import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

@Component({
	selector: 'wt-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, MainComponent, WeatherWidgetComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'Weather-Forecast';
	weatherData = {
		city: 'New York',
		date: new Date(),
		temperature: 72,
		icon: '☀️',
	};
}
