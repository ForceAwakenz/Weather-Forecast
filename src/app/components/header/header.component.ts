import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	EventEmitter,
	OnInit,
	Output,
	inject,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
	selector: 'wt-header',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	@Output() filterChanged = new EventEmitter<string>();
	destroyRef = inject(DestroyRef);
	filterInput = new FormControl('', { nonNullable: true });

	ngOnInit(): void {
		this.filterInput.valueChanges
			.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
			.subscribe(filterPhraze => {
				this.filterChanged.emit(filterPhraze);
			});
	}
}
