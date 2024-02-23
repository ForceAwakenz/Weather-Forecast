import { Directive, HostListener } from '@angular/core';

@Directive({
	selector: '[wtStopPropagation]',
	standalone: true,
})
export class StopPropagationDirective {
	@HostListener('click', ['$event'])
	onClick(event: Event): void {
		event.stopPropagation();
	}
}
