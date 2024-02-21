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
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private auth: Auth = inject(Auth);
	private googleProvider = new GoogleAuthProvider();
	// private facebookProvider = new FacebookAuthProvider();
	user$: Observable<User | null> = user(this.auth);

	googleLogin() {
		signInWithPopup(this.auth, this.googleProvider).then(result => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			console.log('credential', credential);
			return credential;
		});
	}

	// facebookLogin() {
	// 	signInWithPopup(this.auth, this.facebookProvider).then(result => {
	// 		const credential = FacebookAuthProvider.credentialFromResult(result);
	// 		console.log('credential', credential);
	// 		return credential;
	// 	});
	// }

	logout() {
		signOut(this.auth)
			.then(() => {
				console.log('signed out');
			})
			.catch(error => {
				console.log('sign out error: ' + error);
			});
	}
}
