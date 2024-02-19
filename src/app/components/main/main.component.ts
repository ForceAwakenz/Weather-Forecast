import {
	ChangeDetectionStrategy,
	Component,
	WritableSignal,
	inject,
	signal,
} from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';
import { TripsComponent } from '@app/components/trips/trips.component';
import { AddTripComponent } from '@src/app/shared/ui-kit/add-trip/add-trip.component';
import { DailyForecastComponent } from '@src/app/shared/ui-kit/daily-forecast/daily-forecast.component';
import { TripType } from '@src/app/model/trip';
import { toObservable } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { WeatherService } from '@src/app/services/weather.service';
import { CITIES } from '@src/app/shared/constants/cities.constant';
import { AsyncPipe } from '@angular/common';
import { ICONS } from '@src/app/shared/constants/weather-icons.constant';
import { WeatherWidgetComponent } from '@app/components/weather-widget/weather-widget.component';
import { convertToSimpleDayFormat } from '@src/app/shared/utils/time.utils';

@Component({
	selector: 'wt-main',
	standalone: true,
	imports: [
		AsyncPipe,
		HeaderComponent,
		TripsComponent,
		AddTripComponent,
		DailyForecastComponent,
		WeatherWidgetComponent,
	],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
	private weatherService = inject(WeatherService);

	filterPhraze = signal<string>('');
	currentTrip: WritableSignal<TripType | null> = signal(null);

	forecasts$ = toObservable(this.currentTrip).pipe(
		filter(Boolean),
		distinctUntilChanged(),
		switchMap(trip =>
			this.weatherService.getWeather(
				CITIES[trip.city].requestKey,
				convertToSimpleDayFormat(new Date(trip.startDate)),
				convertToSimpleDayFormat(new Date(trip.endDate))
			)
		),
		map(response =>
			response.days.map(day => ({ ...day, icon: ICONS[day.icon] }))
		)
	);

	onFilter(filterPhraze: string): void {
		this.filterPhraze.set(filterPhraze);
	}

	selectTrip(trip: TripType | null): void {
		this.currentTrip.set(trip);
	}
}
