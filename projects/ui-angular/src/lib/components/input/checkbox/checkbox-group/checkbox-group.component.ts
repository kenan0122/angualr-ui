import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AbstractValueAccessor, MakeProvider } from '../../asbstract-value-accessor';

@Component({
  selector: 'kf-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(CheckboxGroupComponent)
})
export class CheckboxGroupComponent extends AbstractValueAccessor implements OnInit {
  @Input() options: Object = {};
  @Input() nzDisabled: boolean = false;
  @Output() checkboxGroupOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  setOfCheckedId = new Set<any>();

  override set value(val: any) {
    this._value = val;
    this.setErrorInfo(val);
    this.setOfCheckedId = new Set(val)

    this.textOnChange(this._value);
  }

  constructor() {
    super();
  }

  trackByOption(_: number, option: any): string {
    return option.value;
  }

  ngOnInit(): void {
  }


  onCheckedChange(id: any, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }

    //option.checked = checked;
    this.textOnChange(this.value);
  }

  checkboxChange(option: any) {
    this.checkboxGroupOuter.emit(option)
  }

    /**
  * 实现自定义校验，写在组件类可介入入参
  * @param control AbstractControl
  */
  override validate(control: AbstractControl): ValidationErrors | null {
    if (control.dirty && this._required) {
      const check = control.value.some((item: any) => item !== null)
      if (check) {
        return null;
      } else {
        return { invalid: true };
      }
    }

    return null;
  }

}
