import { Injectable, inject } from '@angular/core';
import {
	Auth,
	GoogleAuthProvider,
	User,
	// FacebookAuthProvider,
	signInWithPopup,
	signOut,
	user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private auth: Auth = inject(Auth);
	private googleProvider = new GoogleAuthProvider();
	// private facebookProvider = new FacebookAuthProvider();
	private router = inject(Router);

	user$: Observable<User | null> = user(this.auth);

	googleLogin(): Observable<User> {
		const userPromise = signInWithPopup(this.auth, this.googleProvider).then(
			result => {
				this.router.navigate(['/user']);
				return result.user;
			}
		);
		return from(userPromise);
	}

	// facebookLogin() {
	// 	signInWithPopup(this.auth, this.facebookProvider).then(result => {
	// 		const credential = FacebookAuthProvider.credentialFromResult(result);
	// 		console.log('credential', credential);
	// 		return credential;
	// 	});
	// }

	logout() {
		signOut(this.auth).catch(error => {
			console.log('sign out error: ' + error);
		});
	}
}
