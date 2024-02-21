import { Signal, WritableSignal } from '@angular/core';
import { TripType } from './trip';

export abstract class StorageService {
	protected abstract _trips: WritableSignal<TripType[] | null>;

	abstract readonly trips: Signal<TripType[] | null>;

	abstract getTrips(): TripType[];
	abstract addTrip(trip: Omit<TripType, 'id'>): void;
}
