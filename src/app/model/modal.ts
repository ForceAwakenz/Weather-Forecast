import { Type } from '@angular/core';

export type DynamicComponentOptionsType = {
	component: Type<unknown>;
	title: string;
	approveBtnText: string;
	cancelBtnText?: string;
	message?: string;
};
