import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	input,
	Signal,
	computed,
	Output,
	EventEmitter,
	inject,
} from '@angular/core';
import { TripComponent } from '@app/components/trip/trip.component';
import { TripType } from '@src/app/model/trip';
import { AddTripComponent } from '@src/app/shared/ui-kit/add-trip/add-trip.component';
import { STORAGE_SERVICE } from '@src/app/services/providers/storage';

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

	private storageService = inject(STORAGE_SERVICE);

	trips: Signal<TripType[] | undefined> = computed(() => {
		return this.storageService
			.trips()
			?.filter(trip =>
				trip.city.toLowerCase().includes(this.filterPhraze().toLowerCase())
			);
	});

	ngOnInit(): void {
		this.tripSelected.emit(this.trips()?.[0]);
	}

	onSelect(trip: TripType): void {
		this.tripSelected.emit(trip);
	}
}
