import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastType } from '../../models/forecast';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'wt-daily-forecast',
	standalone: true,
	imports: [DatePipe],
	templateUrl: './daily-forecast.component.html',
	styleUrl: './daily-forecast.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyForecastComponent {
	@Input() forecast!: ForecastType;
}
