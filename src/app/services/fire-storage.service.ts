import { User } from '@angular/fire/auth';
import { Injectable, inject, signal } from '@angular/core';
import {
	Firestore,
	doc,
	getDoc,
	setDoc,
	updateDoc,
} from '@angular/fire/firestore';
import { TripType } from '../model/trip';
import { StorageService } from '../model/storage-service.class';
import { AuthService } from './auth.service';
import { first } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FireStorageService extends StorageService {
	private firestore = inject(Firestore);
	private authService = inject(AuthService);

	protected _trips = signal<TripType[] | null>(null);
	readonly trips = this._trips.asReadonly();

	init(user: User): void {
		const userRef = doc(this.firestore, 'users', user.uid);

		getDoc(userRef).then(doc => {
			if (doc.exists()) {
				const data = doc.data()['trips'];
				this._trips.set(data as TripType[]);
			} else {
				const userData = {
					email: user.email,
					photoURL: user.photoURL,
					displayName: user.displayName,
					uid: user.uid,
					trips: null,
				};

				setDoc(userRef, userData);
				this._trips.set(null);
				console.warn('New user was created in Firestore.');
			}
		});
	}

	addTrip(trip: Omit<TripType, 'id'>): void {
		this.authService.user$.pipe(first()).subscribe(user => {
			if (user) {
				const userRef = doc(this.firestore, 'users', user.uid);
				const currentTrips = this._trips() || [];

				const newTrip = {
					...trip,
					id: crypto.randomUUID(),
				};

				const updatedTrips = [...currentTrips, newTrip];

				updateDoc(userRef, { trips: updatedTrips });
				this._trips.set(updatedTrips);
			} else {
				console.error('User is not logged in');
			}
		});
	}

	// getUserDataOrCreate(user: User) {
	// 	// const userRef = doc(this.firestore, 'users', userId);
	// 	// const userSnap = await getDoc(userRef);

	// 	// if (userSnap.exists()) {
	// 	// 	// Document exists, return the data
	// 	// 	return userSnap.data();
	// 	// } else {
	// 	// 	// Document does not exist, create it
	// 	const res = setDoc(
	// 		doc(this.firestore, `users/${user.uid}`),
	// 		{
	// 			email: user.email,
	// 			photoURL: user.photoURL,
	// 			displayName: user.displayName,
	// 			uid: user.uid,
	// 			trips: TRIPS_MOCK,
	// 		},
	// 		{ merge: true }
	// 	).then(res => res);

	// 	return from(res);
	// 	// }
	// }
}
