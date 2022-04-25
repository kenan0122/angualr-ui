import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kf-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  /** 表单数据 */
  @Input() fields: any[] = [];
  /** 填充数据的dto */
  @Input() inputDto: any;
  /** 展示控件名称 */
  @Input() showInputName: boolean = true;
  @Input() size: any;

  @Output() searchOuter = new EventEmitter();
  @Output() selectOuter = new EventEmitter();
  @Output() initOuter = new EventEmitter();
  @Output() radioOuter = new EventEmitter();

  // 正则表达式
  orderRex = '^[0-9]*$';

  constructor() { }

  ngOnInit() {
  }

  selectChange(param: {id: any, name: any}) {
    this.selectOuter.emit(param);
  }


}
