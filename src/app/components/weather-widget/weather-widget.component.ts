import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherDataType } from '@src/app/shared/models/weather-data';
import { CounterComponent } from '@src/app/shared/ui-kit/counter/counter.component';

@Component({
	selector: 'wt-weather-widget',
	standalone: true,
	imports: [DatePipe, CounterComponent],
	templateUrl: './weather-widget.component.html',
	styleUrl: './weather-widget.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherWidgetComponent {
	@Input() weatherData!: WeatherDataType;
	tripDate: Date = new Date('2024-03-25');
}
