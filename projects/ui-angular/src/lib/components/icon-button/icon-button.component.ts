import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kf-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() title?: string = undefined;
  @Input() path: string = '';
  @Input() style: string = '';
  @Input() color: string = '';
  	/** 默认1rem*/
	@Input() iconSize: string | number = '1rem';

  @Output() iconOuter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  iconBtn() {
    this.iconOuter.emit();
  }

}
