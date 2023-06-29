import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomComponent]'
})
export class CustomComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
