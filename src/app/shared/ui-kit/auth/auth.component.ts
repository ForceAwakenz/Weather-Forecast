import {
	ChangeDetectionStrategy,
	Component,
	OnDestroy,
	inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@src/app/services/auth.service';
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
	private router = inject(Router);
	private destroy$ = new Subject<void>();

	googleLogin() {
		this.authService
			.googleLogin()
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.router.navigate(['/user']);
			});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
