import { Injectable, inject } from '@angular/core';
import { WeatherApiService } from './weather-api.service';
import { tap } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class WeatherService {
	private weatherApiService = inject(WeatherApiService);

	getWeather(city: string, startDate: string, endDate?: string) {
		return this.weatherApiService.getWeather(city, startDate, endDate).pipe(
			tap(response => {
				if (response.queryCost > 2) {
					console.warn('Your query cost is high!');
				}
				console.log(response);
			})
		);
	}
}
