import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit, OnInit {
  @ViewChild('validateForm') form!: NgForm;

  /** 表单数据 */
  @Input() fields: any[] = [];
  /** 填充数据的dto */
  @Input() inputDto: any;
  @Input() size: any = 'large';
  @Input() class: string = '';

  @Output() selectOuter = new EventEmitter();
  @Output() initOuter = new EventEmitter();

  // 正则表达式
  orderRex = '^[0-9]*$';

  constructor() { }

  ngOnInit(): void {
  }

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

  coverChange() {
    this.initOuter.emit(this.form);
  }

  templateCardChange() {
    this.initOuter.emit(this.form);
  }
}
