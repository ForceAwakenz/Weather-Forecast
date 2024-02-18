import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnDestroy,
	OnInit,
	WritableSignal,
	signal,
} from '@angular/core';
import { BreakedDownTimeType } from '../../model/time';
import {
	dateNowInMilliseconds,
	getDays,
	getHours,
	getMinutes,
	getSeconds,
} from '../../utils/time.utils';

@Component({
	selector: 'wt-counter',
	standalone: true,
	imports: [],
	templateUrl: './counter.component.html',
	styleUrl: './counter.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit, OnDestroy {
	@Input() reverseCountTo!: Date;

	timeLeft: WritableSignal<BreakedDownTimeType> = signal({
		seconds: 0,
	});
	interval?: ReturnType<typeof setInterval>;

	ngOnInit(): void {
		this.interval = setInterval(this.updateCounter, 1000);
	}

	ngOnDestroy(): void {
		clearInterval(this.interval);
	}

	updateCounter = () => {
		const rawTimeDifference =
			this.reverseCountTo.getTime() - dateNowInMilliseconds();
		if (rawTimeDifference >= 0) {
			this.timeLeft.set({
				days: getDays(rawTimeDifference),
				hours: getHours(rawTimeDifference),
				minutes: getMinutes(rawTimeDifference),
				seconds: getSeconds(rawTimeDifference),
			});
		} else {
			this.timeLeft.set({
				seconds: 0,
			});
		}
	};
}
