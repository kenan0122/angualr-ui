import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';


export function chooseEmptyValidator(nonEmpty: boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let emptyStr = false;
    if (nonEmpty) {
      if (!control.value && control.value !== '') {
        return null;
      }

      // 表示复选框
      if (typeof(control.value) === 'string') {
        emptyStr = control.value.trim() !== '' ? true : false;
      } else {
        emptyStr = control.value;
      }
    } else {
      // 如果不是必填项,不用进行验证
      emptyStr = true;
    }

    return emptyStr ? null : {'chooseEmpty': {value: control.value}};
  };
}

@Directive({
  selector: '[appChooseEmpty]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ChooseEmptyDirective,
      multi: true,
    },
  ],
})
export class ChooseEmptyDirective implements Validator {
  @Input('appChooseEmpty')
  chooseEmpty!: boolean;

  validate(control: AbstractControl): { [key: string]: any } | null {

    return chooseEmptyValidator(this.chooseEmpty)(control);
  }
}
