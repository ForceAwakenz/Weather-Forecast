import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { DayForecastType } from '../../../model/http';

@Component({
	selector: 'wt-daily-forecast',
	standalone: true,
	imports: [DatePipe, DecimalPipe],
	templateUrl: './daily-forecast.component.html',
	styleUrl: './daily-forecast.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyForecastComponent {
	@Input() forecast!: DayForecastType;
}
