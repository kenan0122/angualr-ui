import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { IconStarFill } from '@psylab/icons-path';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../../input/asbstract-value-accessor';

@Component({
  selector: 'kf-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(StarComponent),
})
export class StarComponent extends AbstractValueAccessor {
  @Input() count: number = 5;
  @Output() starOuter = new EventEmitter();

  path = IconStarFill;

  constructor() {
    super();
  }

  choice(index: number) {
    // 选中第几个star
    this.value = index;
    this.starOuter.emit();
  }
}
