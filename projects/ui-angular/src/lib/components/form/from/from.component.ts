import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kf-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements AfterViewInit {
  @ViewChild('validateForm') form!: NgForm;

  /** 表单数据 */
  @Input() fields: any[] = [];
  /** 填充数据的dto */
  @Input() inputDto: any;
  /** 展示控件名称 */
  @Input() showInputName: boolean = true;
  @Input() size: any;
  @Input() class: string = '';

  @Output() searchOuter = new EventEmitter();
  @Output() selectOuter = new EventEmitter();
  @Output() initOuter = new EventEmitter();
  @Output() radioOuter = new EventEmitter();

  // 正则表达式
  orderRex = '^[0-9]*$';

  constructor() { }

  ngAfterViewInit(): void {
     this.initOuter.emit(this.form);
   }


  selectChange(param: {id: any, name: any}) {
    this.initOuter.emit(this.form);
    this.selectOuter.emit(param);
  }

  checkGroupChange(param: any) {
    this.initOuter.emit(this.form);
  }

  dateChange(param: Date) {
    this.initOuter.emit(this.form);
  }

  radioChange() {
    this.initOuter.emit(this.form);
  }

  textareaChange(_: string) {
    this.initOuter.emit(this.form);
  }

  textChange(_: string) {
    this.initOuter.emit(this.form);
  }

  numberChange(_:number) {
    this.initOuter.emit(this.form);
  }

  listChange() {
    this.initOuter.emit(this.form);
  }
}
