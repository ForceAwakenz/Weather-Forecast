import { Signal, WritableSignal } from '@angular/core';
import { TripType } from './trip';
import { User } from '@angular/fire/auth';

export abstract class StorageService {
	protected abstract _trips: WritableSignal<TripType[] | null>;

	abstract readonly trips: Signal<TripType[] | null>;

	abstract init(user?: User): void;
	abstract addTrip(trip: Omit<TripType, 'id'>): void;
}
