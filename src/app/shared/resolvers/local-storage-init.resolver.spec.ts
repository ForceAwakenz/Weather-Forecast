import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { localStorageInitResolver } from './local-storage-init.resolver';

describe('localStorageInitResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => localStorageInitResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
