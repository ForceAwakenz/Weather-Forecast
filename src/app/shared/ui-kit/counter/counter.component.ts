import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	OnDestroy,
	SimpleChange,
	WritableSignal,
	signal,
} from '@angular/core';
import { BreakedDownTimeType } from '../../../model/time';
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
export class CounterComponent implements OnChanges, OnDestroy {
	@Input() reverseCountTo!: Date | null;

	timeLeft: WritableSignal<BreakedDownTimeType> = signal({
		seconds: 0,
	});

	interval?: ReturnType<typeof setInterval>;

	ngOnChanges(changes: Record<keyof this, SimpleChange>): void {
		if (changes.reverseCountTo) {
			this.interval || clearInterval(this.interval);
			this.interval = setInterval(this.updateCounter, 1000);
		}
	}

	ngOnDestroy(): void {
		this.interval || clearInterval(this.interval);
	}

	updateCounter = () => {
		const rawTimeDifference = this.reverseCountTo
			? this.reverseCountTo.getTime() - dateNowInMilliseconds()
			: 0;

		if (rawTimeDifference > 990) {
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
			this.interval || clearInterval(this.interval);
		}
	};
}
