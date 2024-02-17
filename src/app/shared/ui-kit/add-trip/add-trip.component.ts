import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wt-add-trip',
  standalone: true,
  imports: [],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTripComponent {

}
