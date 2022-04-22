import {
  ExistingProvider,
  forwardRef,
  Injectable,
  Injector
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export abstract class  AbstractValueAccessor  implements ControlValueAccessor, Validator {
  private _value!: any;
  _required!: boolean;

  // 首次加载页面, 不进行错误提示
  firstLoad: boolean = true;

  readonly error$ = new BehaviorSubject(false);

  constructor() {
   }

  // 文本发生改变
  textOnChange: (value: any) => void = (_: any) => { };
  textOnTouched: () => void = () => null;

  get value() {
    return this._value;
  }

  set value(val: any) {
    this._value = val;
    const error = this._required && (!val || val.length <= 0) && !this.firstLoad;
    // 显示错误提示消息
    this.error$.next(error);

    this.textOnChange(this._value);
  }

  // 验证发生改变时
  registerOnValidatorChange?(fn: () => void): void {

  }
  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.textOnChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.textOnTouched = fn;
  }
  // 当控件被设置禁用的时候, 走此方法
  setDisabledState?(isDisabled: boolean): void {

  }

  /**
  * 实现自定义校验，写在组件类可介入入参
  * @param control AbstractControl
  */
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.dirty && this._required) {
      if (control.value) {
        return null;
      } else {
        return { invalid: true };
      }
    }

    return null;
  }

  /**
  * 为响应式表单提供`touch`状态
  */
  focus() {
    this.firstLoad = false;
    this.textOnTouched();
  }
}

export function MakeProvider(type: any): ExistingProvider[] {
  return [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => type), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => type), multi: true }
  ]
}

