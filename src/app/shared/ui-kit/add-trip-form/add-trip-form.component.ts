import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	inject,
} from '@angular/core';
import {
	convertDaysToMilliseconds,
	convertToSimpleDayFormat,
	dateNowInMilliseconds,
} from '../../utils/time.utils';
import { ModalService } from '@src/app/services/modal.service';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { StorageService } from '@src/app/services/storage.service';

@Component({
	selector: 'wt-add-trip-form',
	standalone: true,
	imports: [ReactiveFormsModule, JsonPipe],
	templateUrl: './add-trip-form.component.html',
	styleUrl: './add-trip-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTripFormComponent implements OnInit {
	private modalService = inject(ModalService);
	private storageService = inject(StorageService);
	private fb = inject(FormBuilder);

	form!: FormGroup;
	dateRestrictions = {
		min: convertToSimpleDayFormat(new Date()),
		max: convertToSimpleDayFormat(
			new Date(dateNowInMilliseconds() + convertDaysToMilliseconds(14))
		),
	};

	ngOnInit(): void {
		this.form = this.fb.group({
			city: ['', Validators.required],
			startDate: ['', Validators.required],
			endDate: ['', Validators.required],
		});
	}

	onSubmit() {
		const trip = { ...this.form.value };
		trip.startDate = new Date(trip.startDate);
		trip.endDate = new Date(trip.endDate);

		this.storageService.addTrip(trip);
		console.log(this.form);

		this.modalService.closeModal();

		this.form.reset();
	}

	closeModal(): void {
		this.modalService.closeModal();
	}
}