import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wt-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {

}
