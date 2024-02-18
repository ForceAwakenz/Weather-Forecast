import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	WritableSignal,
	inject,
	signal,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TripsComponent } from '../trips/trips.component';
import { AddTripComponent } from '@src/app/shared/ui-kit/add-trip/add-trip.component';
import { DailyForecastComponent } from '@src/app/shared/ui-kit/daily-forecast/daily-forecast.component';
import { TripType } from '@src/app/shared/model/trip';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, switchMap } from 'rxjs';
import { WeatherService } from '@src/app/shared/services/weather.service';
import { CITIES } from '@src/app/shared/constants/cities.constant';
import { AsyncPipe } from '@angular/common';
import { ICONS } from '@src/app/shared/constants/weather-icons.constant';

@Component({
	selector: 'wt-main',
	standalone: true,
	imports: [
		AsyncPipe,
		HeaderComponent,
		TripsComponent,
		AddTripComponent,
		DailyForecastComponent,
	],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
	private weatherService = inject(WeatherService);

	filterPhraze = signal<string>('');
	currentTrip: WritableSignal<TripType | null> = signal(null);

	forecasts$ = toObservable(this.currentTrip).pipe(
		filter(Boolean),
		switchMap(trip =>
			this.weatherService.getWeather(
				CITIES[trip.city].requestKey,
				trip.startDate.toISOString(),
				trip.endDate.toISOString()
			)
		),
		map(response =>
			response.days.map(day => ({ ...day, icon: ICONS[day.icon] }))
		)
	);

	onFilter(filterPhraze: string): void {
		this.filterPhraze.set(filterPhraze);
	}

	ngOnInit(): void {
		this.forecasts$.subscribe(console.log);
	}

	selectTrip(trip: TripType | null): void {
		this.currentTrip.set(trip);
	}

	// forecasts: DayForecastType[] = [
	// 	{
	// 		datetime: '2021-07-27T12:00:00.000Z',
	// 		temp: 28,
	// 		icon: '☀️',
	// 		tempmax: 30,
	// 		tempmin: 26,
	// 	},
	// 	{
	// 		datetime: '2021-07-28T12:00:00.000Z',
	// 		temp: 30,
	// 		icon: '☀️',
	// 		tempmax: 32,
	// 		tempmin: 27,
	// 	},
	// 	{
	// 		datetime: '2021-07-29T12:00:00.000Z',
	// 		temp: 31,
	// 		icon: '🌫️',
	// 		tempmax: 33,
	// 		tempmin: 28,
	// 	},
	// 	{
	// 		datetime: '2021-07-30T12:00:00.000Z',
	// 		temp: 29,
	// 		icon: '☁️',
	// 		tempmax: 31,
	// 		tempmin: 27,
	// 	},
	// 	{
	// 		datetime: '2021-07-31T12:00:00.000Z',
	// 		temp: 28,
	// 		icon: '💨',
	// 		tempmax: 30,
	// 		tempmin: 26,
	// 	},
	// ];
}
