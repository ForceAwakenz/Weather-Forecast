import { Injectable } from '@angular/core';
import { TRIPS_MOCK } from './mocks/trips.mock';
import { TripType } from '../model/trip';

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	getTrips(): TripType[] {
		return localStorage.getItem('trips')
			? JSON.parse(localStorage.getItem('trips')!)
			: TRIPS_MOCK;
	}
}
