import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TripComponent } from '../trip/trip.component';
import { TripType } from '@src/app/shared/models/trip';
import { AddTripComponent } from '@src/app/shared/ui-kit/add-trip/add-trip.component';

@Component({
	selector: 'wt-trips',
	standalone: true,
	imports: [TripComponent, AddTripComponent],
	templateUrl: './trips.component.html',
	styleUrl: './trips.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsComponent {
	trips: TripType[] = [
		{
			city: 'NewYorkCity',
			startDate: new Date('2021-01-01'),
			endDate: new Date('2021-01-02'),
		},
		{
			city: 'Tokyo',
			startDate: new Date('2021-01-02'),
			endDate: new Date('2021-01-03'),
		},
		{
			city: 'Kyiv',
			startDate: new Date('2021-01-03'),
			endDate: new Date('2021-01-04'),
		},
	];
}
