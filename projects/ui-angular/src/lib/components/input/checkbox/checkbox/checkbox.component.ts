import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import { AbstractValueAccessor, MakeProvider } from '../../asbstract-value-accessor';

@Component({
  selector: 'kf-checkbox',
  templateUrl: './checkbox.component.html',
  styles: [
    `.kf-checkbox {
      margin-right: 0.5rem;
    }`
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(CheckboxComponent),
})
export class CheckboxComponent extends AbstractValueAccessor {
  @Input() title: string = '';
  // 控件名字
  @Input() name: string = 'text';
  @Input() disabled: boolean = false;

  @Output() checkboxOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  constructor() {
    super();
    this._required = this.required;
  }

  onCheckedChange(checked: boolean): void {
    this.textOnChange(checked);
    this.checkboxOuter.emit(checked)
  }

}
