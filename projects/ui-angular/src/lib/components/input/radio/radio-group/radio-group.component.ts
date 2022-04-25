import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../../asbstract-value-accessor';

@Component({
  selector: 'kf-radio-group',
  templateUrl: './radio-group.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(RadioGroupComponent),
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent extends AbstractValueAccessor {
  @Input() title: string = '';
  @Input() options: any;
  // 前台要显示的字段名称
  @Input() fontName: string = 'name';
  // 绑定的后台字段
  @Input() backProp: string = 'value';
  // 控件名字
  @Input() name: string = 'radio';
  @Input() flexDirection: string = 'kf-flex-colum';

  @Output() radioOuter = new EventEmitter();

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

  radioChange() {
    this.firstLoad = false;
    this.radioOuter.emit();
  }
}
