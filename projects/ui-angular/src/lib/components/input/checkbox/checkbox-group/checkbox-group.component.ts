import { notNullish } from '../../../../utils';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../../asbstract-value-accessor';
import { getCheckboxSetting, getDefaultLayout } from '../../input-setting';
import { assignNullProps } from '@psylab/utils';

@Component({
  selector: 'kf-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(CheckboxGroupComponent),
})
export class CheckboxGroupComponent extends AbstractValueAccessor implements OnInit {
  @Input() options: any;
  @Input() setting: any = getCheckboxSetting();
  @Input() layout: any = getDefaultLayout('checkbox');
  @Output() checkboxGroupOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  setOfCheckedId = new Set<any>();
  isArray: boolean = false;

  override set value(val: any) {
    this._value = val;
    this.setErrorInfo(val);
    this.setOfCheckedId = new Set(val);

    this.textOnChange(this._value);
  }

  constructor() {
    super();
  }

  ngOnInit() {
    const defaultLayout = getDefaultLayout('checkbox');
    assignNullProps(this.setting, getCheckboxSetting());
    assignNullProps(this.layout, defaultLayout);

    if (Array.isArray(this.options)) {
      this.isArray = true
    } else {
      this.isArray = false;
    }
  }

  trackByOption(_: number, option: any): string {
    return option.value;
  }

  onCheckedChange(id: any, checked: boolean): void {
    this.firstLoad = false;
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }

    this.value = Array.from(this.setOfCheckedId);
  }

  checkboxChange(option: any) {
    this.checkboxGroupOuter.emit(option);
  }

  unsorted() {
    return 0;
  }

  /**
   * 实现自定义校验，写在组件类可介入入参
   * @param control AbstractControl
   */
  override validate(control: AbstractControl): ValidationErrors | null {
    if (control.dirty && this._required) {
      const check = control.value.some((item: any) => notNullish(item));
      if (check) {
        return null;
      } else {
        return { invalid: true };
      }
    }

    return null;
  }
}
