import { TemplateRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { assignNullProps } from '@psylab/utils';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../../input/asbstract-value-accessor';
import { getDefaultLayout, getDefaultSetting } from '../../input/input-setting';
import { templateDesc } from './template-card';

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
  @Input() cardStyle: string = '';
  @Input() @InputBoolean() borderLess: boolean = false;
  @Input() setting: any = getDefaultSetting();
  @Input() layout: any = getDefaultLayout('card');
  @Input() extraTemplate?: string | TemplateRef<any>;
  @Input() coverTemplate?: TemplateRef<any>;

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
    assignNullProps(this.setting, getDefaultSetting());
    assignNullProps(this.layout, getDefaultLayout('card'));
  }

  getDescByTemplateValue(value: any) {
    const templateObj = templateDesc[value];

    if (templateObj) {
      return templateObj;
    }
    return {src: '', desc: ''};
  }

  cardClick(index: any) {
    this.value = index;
    this.cardOuter.emit();
  }
}
