import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';
import { INTERCEPTORS } from '@shared/interceptors/interceptors';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '@src/environments/environment';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(withInterceptors(INTERCEPTORS)),
		importProvidersFrom(
			provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
			provideAuth(() => getAuth()),
			provideFirestore(() => getFirestore())
		),
	],
};
