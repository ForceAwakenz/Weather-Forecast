import { Injectable, inject } from '@angular/core';
import { WeatherApiService } from './weather-api.service';

@Injectable({
	providedIn: 'root',
})
export class WeatherService {
	weatherApiService = inject(WeatherApiService);

	getWeather(city: string, startDate: string, endDate: string) {
		return this.weatherApiService.getWeather(city, startDate, endDate);
	}
}
