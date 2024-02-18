import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { WeatherResponseType } from '../model/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class WeatherApiService {
	private http = inject(HttpClient);

	getWeather(
		city: string,
		startDate: string,
		endDate: string
	): Observable<WeatherResponseType> {
		const url = encodeURI(`${city}/${startDate}/${endDate}`);
		return this.http.get<WeatherResponseType>(url);
	}
}
