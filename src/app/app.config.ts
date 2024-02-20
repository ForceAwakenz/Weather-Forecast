import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';
import { INTERCEPTORS } from '@shared/interceptors/interceptors';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(withInterceptors(INTERCEPTORS)),
		importProvidersFrom(
			provideFirebaseApp(() =>
				initializeApp({
					projectId: 'weather-forecast-b313c',
					appId: '1:1066539945804:web:3a0355f1557c1b464389e9',
					storageBucket: 'weather-forecast-b313c.appspot.com',
					apiKey: 'AIzaSyDcyIvqGRWtg3mofs54Yl64zUGWfv-mjcA',
					authDomain: 'weather-forecast-b313c.firebaseapp.com',
					messagingSenderId: '1066539945804',
				})
			)
		),
		importProvidersFrom(provideAuth(() => getAuth())),
		importProvidersFrom(provideFirestore(() => getFirestore())),
	],
};
