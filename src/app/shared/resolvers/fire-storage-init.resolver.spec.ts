import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fireStorageInitResolver } from './fire-storage-init.resolver';
import { Observable } from 'rxjs';

describe('fireStorageInitResolver', () => {
	const executeResolver: ResolveFn<Observable<boolean>> = (
		...resolverParameters
	) =>
		TestBed.runInInjectionContext(() =>
			fireStorageInitResolver(...resolverParameters)
		);

	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it('should be created', () => {
		expect(executeResolver).toBeTruthy();
	});
});
