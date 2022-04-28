import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { AbstractValueAccessor, MakeProvider } from '../asbstract-value-accessor';

@Component({
  selector: 'kf-input-date',
  templateUrl: './input-date.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(InputDateComponent),
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent extends AbstractValueAccessor {
  @Input() size: NzSizeLDSType = 'large';
  @Input() title: string = '';
  // 控件名字
  @Input() name: string = 'date';
  @Input() placeholder: string = '请输入要日期';
  @Input() flexDirection: string = 'kf-justify-center';

  @Input()
  dateTemplate!: TemplateRef<any>;
  @Output() dateOuter = new EventEmitter();

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

  dateChange(date: Date) {
    this.dateOuter.emit(date)
  }
}
