import { InjectionToken } from '@angular/core';
import { StorageService } from '@src/app/model/storage-service.class';

export const STORAGE_SERVICE = new InjectionToken<StorageService>(
	'storageService'
);
