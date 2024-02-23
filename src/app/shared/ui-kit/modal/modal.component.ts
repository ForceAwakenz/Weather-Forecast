import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	DestroyRef,
	Input,
	OnInit,
	inject,
} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ModalService } from '@src/app/services/modal.service';
import { DynamicComponentOptionsType } from '@src/app/model/modal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { StopPropagationDirective } from '../../directives/stop-propagation.directive';

@Component({
	selector: 'wt-modal',
	standalone: true,
	imports: [NgComponentOutlet, StopPropagationDirective],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
	@Input() header = '';

	private modalService = inject(ModalService);
	private cdRef = inject(ChangeDetectorRef);
	private destroyRef = inject(DestroyRef);

	options?: DynamicComponentOptionsType | null;

	ngOnInit(): void {
		this.modalService.modal$
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(options => {
				this.options = options;
				this.cdRef.detectChanges();
			});
	}

	closeModal(): void {
		this.modalService.closeModal();
	}
}
