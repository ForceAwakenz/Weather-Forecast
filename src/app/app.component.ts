import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './shared/ui-kit/modal/modal.component';
import { StorageProvider } from './services/providers/storage';

@Component({
	selector: 'wt-root',
	standalone: true,
	imports: [RouterOutlet, ModalComponent],
	providers: [StorageProvider],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
