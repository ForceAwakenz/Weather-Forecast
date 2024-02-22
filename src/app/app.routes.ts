import { Routes } from '@angular/router';
import { STORAGE_SERVICE } from './services/providers/storage';
import { LocalStorageService } from './services/local-storage.service';
import { FireStorageService } from './services/fire-storage.service';
import { localStorageInitResolver } from './shared/resolvers/local-storage-init.resolver';
import { fireStorageInitResolver } from './shared/resolvers/fire-storage-init.resolver';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./components/main/main.component').then(m => m.MainComponent),
		pathMatch: 'full',
		providers: [{ provide: STORAGE_SERVICE, useClass: LocalStorageService }],
		resolve: { init: localStorageInitResolver },
	},
	{
		path: 'user',
		loadComponent: () =>
			import('./components/main/main.component').then(m => m.MainComponent),
		providers: [{ provide: STORAGE_SERVICE, useClass: FireStorageService }],
		resolve: { init: fireStorageInitResolver },
		canActivate: [authGuard],
	},
];
