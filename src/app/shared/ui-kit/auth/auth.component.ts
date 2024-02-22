import {
	ChangeDetectionStrategy,
	Component,
	OnDestroy,
	inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@src/app/services/auth.service';
import { ModalService } from '@src/app/services/modal.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'wt-auth',
	standalone: true,
	imports: [],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnDestroy {
	private authService = inject(AuthService);
	private destroy$ = new Subject<void>();
	private modalService = inject(ModalService);
	private router = inject(Router);

	googleLogin() {
		this.authService.googleLogin().pipe(takeUntil(this.destroy$)).subscribe();
		this.modalService.closeModal();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
