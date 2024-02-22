import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { STORAGE_SERVICE } from '@src/app/services/providers/storage';

export const localStorageInitResolver: ResolveFn<boolean> = () => {
	const storageService = inject(STORAGE_SERVICE);
	storageService.init();
	return true;
};
