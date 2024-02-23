import { TestBed, waitForAsync } from '@angular/core/testing';
import { StopPropagationDirective } from './stop-propagation.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
	imports: [StopPropagationDirective],
	standalone: true,
	template: `
		// eslint-disable-next-line
		@angular-eslint/template/click-events-have-key-events
		<div class="parent" (click)="onClickPropagation()">
			<div class="child" wtStopPropagation></div>
		</div>
	`,
})
class TestPropagationDirectiveComponent {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onClickPropagation(): void {}
}

describe('StopPropagationDirective', () => {
	let directive: StopPropagationDirective;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [StopPropagationDirective, TestPropagationDirectiveComponent],
		}).compileComponents();
		directive = new StopPropagationDirective();
	}));

	it('should create an instance', () => {
		expect(directive).toBeTruthy();
	});

	it('should call stopPropagation on passed event', () => {
		const eventSpy = jasmine.createSpyObj('event', ['stopPropagation']);

		directive.onClick(eventSpy);

		expect(eventSpy.stopPropagation).toHaveBeenCalled();
	});

	it('shold not propagate event on parent div in TestPropagationDirectiveComponent', () => {
		const fixture = TestBed.createComponent(TestPropagationDirectiveComponent);
		const de: DebugElement = fixture.debugElement;
		const clickSpy = spyOn(fixture.componentInstance, 'onClickPropagation');

		de.query(By.css('.child')).nativeElement.click();

		expect(clickSpy).not.toHaveBeenCalled();
	});
});
