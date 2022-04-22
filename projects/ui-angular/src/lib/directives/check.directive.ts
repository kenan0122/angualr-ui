import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive, Input } from "@angular/core";

@Directive({
  selector: '[appCheck]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckDirective,
      multi: true
    }
  ]
})

export class CheckDirective implements Validator {
  @Input('appCheck') data: any;

  validate(control: AbstractControl): ValidationErrors {
    if (this.data === 'ss') {
      return {appCheck: {value: control.value}}
    }

    return {appCheck: {value: null}};
  }

  registerOnValidatorChange?(fn: () => void): void {

  }
}
