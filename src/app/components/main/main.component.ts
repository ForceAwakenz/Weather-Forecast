import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TripsComponent } from '../trips/trips.component';
import { AddTripComponent } from '@src/app/shared/ui-kit/add-trip/add-trip.component';
import { DailyForecastComponent } from '@src/app/shared/ui-kit/daily-forecast/daily-forecast.component';
import { ForecastType } from '@src/app/shared/models/forecast';

@Component({
	selector: 'wt-main',
	standalone: true,
	imports: [
		HeaderComponent,
		TripsComponent,
		AddTripComponent,
		DailyForecastComponent,
	],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
	forecasts: ForecastType[] = [
		{
			datetime: '2021-07-27T12:00:00.000Z',
			temp: 28,
			icon: '☀️',
		},
		{
			datetime: '2021-07-28T12:00:00.000Z',
			temp: 30,
			icon: '☀️',
		},
		{
			datetime: '2021-07-29T12:00:00.000Z',
			temp: 31,
			icon: '⛅️',
		},
		{
			datetime: '2021-07-30T12:00:00.000Z',
			temp: 29,
			icon: '☁️',
		},
		{
			datetime: '2021-07-31T12:00:00.000Z',
			temp: 28,
			icon: '⛅️',
		},
	];
}
