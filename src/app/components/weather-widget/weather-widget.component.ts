import { ICONS } from '@shared/constants/weather-icons.constant';
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	input,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CITIES } from '@src/app/shared/constants/cities.constant';
import { TripType } from '@src/app/model/trip';
import { WeatherService } from '@src/app/services/weather.service';
import { CounterComponent } from '@src/app/shared/ui-kit/counter/counter.component';
import { distinctUntilKeyChanged, filter, map, switchMap } from 'rxjs';
import { convertToSimpleDayFormat } from '@src/app/shared/utils/time.utils';
import { ModalService } from '@src/app/services/modal.service';
import { AuthComponent } from '@src/app/shared/ui-kit/auth/auth.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'wt-weather-widget',
	standalone: true,
	imports: [CounterComponent, CommonModule],
	templateUrl: './weather-widget.component.html',
	styleUrl: './weather-widget.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherWidgetComponent {
	currentTrip = input<TripType | null>(null);

	private modalService = inject(ModalService);
	private weatherService = inject(WeatherService);

	CITIES = CITIES;

	currentWeather$ = toObservable(this.currentTrip).pipe(
		filter(Boolean),
		distinctUntilKeyChanged('city'),
		switchMap(trip =>
			this.weatherService.getWeather(
				CITIES[trip.city].requestKey,
				convertToSimpleDayFormat(new Date())
			)
		),
		map(response => response.days[0]),
		map(day => ({ ...day, icon: ICONS[day.icon] }))
	);

	handleAuth() {
		// if ('true') {
		this.modalService.showInModal(AuthComponent, { title: 'Login' });
		// }
	}
}
