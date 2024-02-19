import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicComponentOptionsType } from '../model/modal';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	private _modal$ = new BehaviorSubject<DynamicComponentOptionsType | null>(
		null
	);

	get modal$() {
		return this._modal$.asObservable();
	}

	showInModal(
		component: Type<unknown>,
		inputs: Omit<DynamicComponentOptionsType, 'component'>
	): void {
		this._modal$.next({ component, ...inputs });
	}

	closeModal(): void {
		this._modal$.next(null);
	}
}
