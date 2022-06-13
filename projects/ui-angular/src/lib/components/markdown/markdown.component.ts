import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../input/asbstract-value-accessor';

@Component({
  selector: 'kf-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(MarkdownComponent),
})
export class MarkdownComponent extends AbstractValueAccessor implements OnInit {
  ngOnInit(): void {
  }
}
