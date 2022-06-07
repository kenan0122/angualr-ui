import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../../input/asbstract-value-accessor';

@Component({
  selector: 'kf-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(TemplateCardComponent)
})
export class TemplateCardComponent extends AbstractValueAccessor {
  @Input() options: Object = {};
  @Input() flexDirection: string = 'kf-justify-center';

  @Output() cardOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  constructor() {
    super();
   }

  ngOnInit() {
  }

  cardClick(index: number) {
    this.value = index;
    this.cardOuter.emit();
  }

}
