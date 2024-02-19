import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ModalService } from '@src/app/services/modal.service';
import { AddTripFormComponent } from '../add-trip-form/add-trip-form.component';

@Component({
	selector: 'wt-add-trip',
	standalone: true,
	imports: [],
	templateUrl: './add-trip.component.html',
	styleUrl: './add-trip.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTripComponent {
	modalService = inject(ModalService);

	onAddTrip() {
		this.modalService.showInModal(AddTripFormComponent, {
			title: 'Create trip',
			approveBtnText: 'Save',
		});
	}
}
