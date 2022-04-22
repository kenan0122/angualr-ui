import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function AllowableFormatValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const allowable = nameRe.test(control.value);
    return allowable ? null : {allowableFormat: {value: control.value}};
  };
}

@Directive({
  selector: '[appAllowableFormat]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AllowableValidatorDirective,
    multi: true
  }]
})
export class AllowableValidatorDirective implements Validator {
  @Input('appAllowableFormat')
  allowableFormat!: string;
  validate(control: AbstractControl): { [key: string]: any } | null {

    return this.allowableFormat
      ? AllowableFormatValidator(new RegExp(this.allowableFormat))(control)
      : null;
  }
}
