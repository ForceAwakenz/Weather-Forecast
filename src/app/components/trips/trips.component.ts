import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	inject,
	input,
	Signal,
	computed,
} from '@angular/core';
import { TripComponent } from '../trip/trip.component';
import { TripType } from '@src/app/shared/model/trip';
import { AddTripComponent } from '@src/app/shared/ui-kit/add-trip/add-trip.component';
import { WeatherService } from '@src/app/shared/services/weather.service';
import { CITIES } from '@src/app/shared/constants/cities.constant';
import { StorageService } from '@src/app/shared/services/storage.service';

@Component({
	selector: 'wt-trips',
	standalone: true,
	imports: [TripComponent, AddTripComponent],
	templateUrl: './trips.component.html',
	styleUrl: './trips.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsComponent implements OnInit {
	filterPhraze = input('');
	weatherService = inject(WeatherService);
	storageService = inject(StorageService);
	trips: Signal<TripType[]> = computed(() =>
		this.storageService
			.getTrips()
			.filter(trip =>
				trip.city.toLowerCase().includes(this.filterPhraze().toLowerCase())
			)
	);

	ngOnInit(): void {
		this.weatherService.getWeather(
			CITIES.NewYorkCity.requestKey,
			'2024-02-19',
			'2024-02-21'
		);
		// .subscribe(weather => {
		// 	console.log(weather);
		// });
	}
}
