import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './shared/ui-kit/modal/modal.component';

// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from 'firebase/compat/app';

import {
	Auth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	user,
} from '@angular/fire/auth';

@Component({
	selector: 'wt-root',
	standalone: true,
	imports: [RouterOutlet, ModalComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	private auth: Auth = inject(Auth);
	private provider = new GoogleAuthProvider();
	user$ = user(this.auth);
	constructor() {}

	ngOnInit(): void {
		this.login();
	}

	login() {
		signInWithPopup(this.auth, this.provider).then(result => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			console.log('credential', credential);
			return credential;
		});
	}

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
