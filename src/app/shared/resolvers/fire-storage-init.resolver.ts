import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthService } from '@src/app/services/auth.service';
import { STORAGE_SERVICE } from '@src/app/services/providers/storage';
import { map, tap, Observable, filter } from 'rxjs';

export const fireStorageInitResolver: ResolveFn<Observable<boolean>> = () => {
	const authService = inject(AuthService);
	const storageService = inject(STORAGE_SERVICE);

	return authService.user$.pipe(
		filter(Boolean),
		tap(user => {
			storageService.init(user);
		}),
		map(() => true)
	);
};
