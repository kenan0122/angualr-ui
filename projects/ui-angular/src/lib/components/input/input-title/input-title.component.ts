import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kf-input-title',
  template: `<span *ngIf="title" [class]="class">{{title}}</span>`,
  styles: [
    `.kf-title {
      margin-bottom: 0.25rem;
      display: inline-block;
    }`
  ]
})
export class InputTitleComponent {
  @Input() title: string = '';
  @Input() class: string = 'kf-title';

  constructor() { }
}
