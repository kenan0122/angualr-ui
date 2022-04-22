import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';


export function nonEmptyValidator(nonEmpty: boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let emptyStr = false;
    if (nonEmpty) {
      if (!control.value && control.value !== '') {
        return null;
      }
    } else {
      // 如果不是必填项,不用进行验证
      emptyStr = true;
    }

    return emptyStr ? null : {'nonEmpty': {value: control.value}};
  };
}

@Directive({
  selector: '[appNonEmpty]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NonEmptyDirective,
      multi: true,
    },
  ],
})
export class NonEmptyDirective implements Validator {
  @Input('appNonEmpty')
  nonEmpty!: boolean;

  validate(control: AbstractControl): { [key: string]: any } | null {

    return nonEmptyValidator(this.nonEmpty)(control);
  }
}
