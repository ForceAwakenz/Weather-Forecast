import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@src/app/services/auth.service';

@Component({
	selector: 'wt-auth',
	standalone: true,
	imports: [],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
	private authService = inject(AuthService);

	googleLogin() {
		console.log('google login');
		this.authService.googleLogin();
	}

	// facebookLogin() {
	// 	console.log('facebook login');
	// 	this.authService.facebookLogin();
	// }
}
