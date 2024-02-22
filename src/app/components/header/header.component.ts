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
import { AuthService } from '@src/app/services/auth.service';
import { AsyncPipe } from '@angular/common';
import { ModalService } from '@src/app/services/modal.service';
import { AuthComponent } from '@src/app/shared/ui-kit/auth/auth.component';
import { Router } from '@angular/router';

@Component({
	selector: 'wt-header',
	standalone: true,
	imports: [ReactiveFormsModule, AsyncPipe],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	@Output() filterChanged = new EventEmitter<string>();
	private destroyRef = inject(DestroyRef);
	private authService = inject(AuthService);
	private modalService = inject(ModalService);
	private router = inject(Router);

	filterInput = new FormControl('', { nonNullable: true });
	user$ = this.authService.user$;

	ngOnInit(): void {
		this.filterInput.valueChanges
			.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
			.subscribe(filterPhraze => {
				this.filterChanged.emit(filterPhraze);
			});
	}
	handleSignIn() {
		this.modalService.showInModal(AuthComponent, { title: 'Login' });
	}

	handleSignOut() {
		this.authService.logout();
		this.router.navigate(['/']);
	}
}
