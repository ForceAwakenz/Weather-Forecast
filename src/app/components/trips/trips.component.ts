import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	inject,
	input,
	Signal,
	computed,
	Output,
	EventEmitter,
} from '@angular/core';
import { TripComponent } from '../trip/trip.component';
import { TripType } from '@src/app/shared/model/trip';
import { AddTripComponent } from '@src/app/shared/ui-kit/add-trip/add-trip.component';
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
	@Output() tripSelected = new EventEmitter<TripType | null>();
	filterPhraze = input('');

	private storageService = inject(StorageService);

	trips: Signal<TripType[]> = computed(() =>
		this.storageService
			.getTrips()
			.filter(trip =>
				trip.city.toLowerCase().includes(this.filterPhraze().toLowerCase())
			)
	);

	ngOnInit(): void {
		this.tripSelected.emit(this.trips()[0]);
	}

	onSelect(trip: TripType): void {
		this.tripSelected.emit(trip);
	}
}
