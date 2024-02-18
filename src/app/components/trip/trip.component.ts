import { DatePipe } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core';
import { CITIES } from '@src/app/shared/constants/cities.constant';
import { TripType } from '@src/app/shared/model/trip';

@Component({
	selector: 'wt-trip',
	standalone: true,
	imports: [DatePipe],
	templateUrl: './trip.component.html',
	styleUrl: './trip.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripComponent implements OnInit {
	@Input() trip!: TripType;
	cityPicturePath!: string;
	ngOnInit() {
		this.cityPicturePath = CITIES[this.trip.city].imagePath;
	}
}
