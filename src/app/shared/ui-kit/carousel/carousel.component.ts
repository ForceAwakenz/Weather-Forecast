import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wt-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {

}
