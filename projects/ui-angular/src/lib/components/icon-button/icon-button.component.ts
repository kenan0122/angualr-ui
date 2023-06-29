import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { CoerceBooleanProperty } from '../../utils/coerce/coerce-boolean';

@Component({
  selector: 'kf-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() title?: string = undefined;
  @Input() path: string = '';
  @Input() style: string = '';
  @Input() color: string = '';
  /** 默认1rem*/
  @Input() iconSize: string | number = '1rem';
  @Input()
  @CoerceBooleanProperty()
  disabled: boolean = false;
  @Input() iconClass: string = ''; // 主要用于修改颜色，如 text-primary
  @Input() class: string = '';

  @Output() iconOuter = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  iconBtn() {
    // this.iconOuter.emit();
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    if (this.disabled) {
      return false;
    }

    return true;
  }


}
