// import { Injectable, inject } from '@angular/core';
// import { TripType } from '../model/trip';
// import { Observable } from 'rxjs';
// // import second from ''
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import {
// 	AngularFirestore,
// 	AngularFirestoreDocument,
// } from '@angular/fire/compat/firestore';
// import { Router } from '@angular/router';
// import {Auth, idToken} from '@angular/fire/auth';

// export type User = {
// 	uid: string;
// 	email: string;
// 	displayName: string;
// 	photoURL: string;
// 	trips?: TripType[];
// };

// @Injectable({
// 	providedIn: 'root',
// })
// export class AuthService {
// 	user$: any;
// 	private angularFireAuth = inject(AngularFireAuth);
// 	private angularFirestore = inject(AngularFirestore);
// 	private firestoreDocument = inject(AngularFirestoreDocument);
// 	private router = inject(Router);
//   // private auth = inject(Auth);
//   // idToken$ = idToken(this.auth);

// 	constructor() {
// 		this.user$ = this.angularFireAuth.authState.subscribe((user) => {
//       console.log('user', user);
// 	}
// }

// 	async googleSignin() {
//     const provider = new Auth().
// 		// const credential = await this.angularFireAuth.signInWithPopup(provider);
// 		// return this.updateUserData(credential.user);
// 	}
// }
