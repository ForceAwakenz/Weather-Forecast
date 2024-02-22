import { Injectable, inject, signal } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { TripType } from '../model/trip';
// import { from } from 'rxjs';
// import { TRIPS_MOCK } from './mocks/trips.mock';
import { StorageService } from '../model/storage-service.class';

@Injectable({
	providedIn: 'root',
})
export class FireStorageService extends StorageService {
	private firestore = inject(Firestore);

	protected _trips = signal<TripType[] | null>(null);
	readonly trips = this._trips.asReadonly();

	init(userId: string): void {
		getDoc(doc(this.firestore, `users/${userId}`)).then(doc => {
			if (doc.exists()) {
				const data = doc.data()['trips'];
				this._trips.set(data as TripType[]);
			} else {
				console.log('No such document!');
			}
		});
	}

	addTrip(trip: Omit<TripType, 'id'>): void {
		console.log('addTrip', trip);
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
