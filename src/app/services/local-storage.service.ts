import { Injectable, signal } from '@angular/core';
import { TRIPS_MOCK } from './mocks/trips.mock';
import { TripType } from '../model/trip';
import { StorageService } from '../model/storage-service.class';

@Injectable()
export class LocalStorageService extends StorageService {
	protected _trips = signal<TripType[] | null>(null);
	readonly trips = this._trips.asReadonly();

	init(): void {
		const trips = localStorage.getItem('trips')
			? JSON.parse(localStorage.getItem('trips')!)
			: TRIPS_MOCK;
		this._trips.set(trips);
	}

	addTrip(trip: Omit<TripType, 'id'>): void {
		const tripWithId = { ...trip, id: crypto.randomUUID() };

		let trips = this._trips() ?? [];

		trips = [...trips, tripWithId];
		localStorage.setItem('trips', JSON.stringify(trips));
		this._trips.set(trips);
	}
}
