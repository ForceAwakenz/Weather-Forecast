import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@src/app/services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
	const authService = inject(AuthService);
	const router = inject(Router);
	return authService.user$.pipe(
		map(user => (user ? true : router.createUrlTree(['/'])))
	);
};
