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
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, first } from 'rxjs';

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
	private sourceTrips = this.storageService.trips;
	private sourceTrips$ = toObservable(this.sourceTrips);

	trips: Signal<TripType[] | null> = computed(() => {
		return (
			this.sourceTrips()
				?.filter(trip =>
					trip.city.toLowerCase().includes(this.filterPhraze().toLowerCase())
				)
				.sort(
					(tripA, tripB) =>
						new Date(tripA.startDate).getTime() -
						new Date(tripB.startDate).getTime()
				) ?? null
		);
	});

	ngOnInit(): void {
		this.sourceTrips$
			.pipe(filter(Boolean), first())
			.subscribe(trips => this.tripSelected.emit(trips[0]));
	}

	onSelect(trip: TripType): void {
		this.tripSelected.emit(trip);
	}
}
