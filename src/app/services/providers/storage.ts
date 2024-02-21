import { InjectionToken, Provider } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { StorageService } from '@src/app/model/storage-service.class';

export const STORAGE_SERVICE = new InjectionToken<StorageService>(
	'storageService'
);

// TODO: change to useFactory
export const StorageProvider: Provider = {
	provide: STORAGE_SERVICE,
	useClass: LocalStorageService,
};
