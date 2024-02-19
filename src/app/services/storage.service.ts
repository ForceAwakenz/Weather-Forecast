import { Injectable } from '@angular/core';
import { TRIPS_MOCK } from './mocks/trips.mock';
import { TripType } from '../model/trip';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	//TODO: implement the BehaviorSubject update
	private _trips$ = new BehaviorSubject<TripType[]>(this.getTrips());

	getTrips(): TripType[] {
		return localStorage.getItem('trips')
			? JSON.parse(localStorage.getItem('trips')!)
			: TRIPS_MOCK;
	}

	addTrip(trip: TripType): void {
		const trips = this.getTrips();
		trips.push(trip);
		localStorage.setItem('trips', JSON.stringify(trips));
	}
}
