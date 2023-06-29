import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { assignNullProps } from '@psylab/utils';
import { getDefaultLayout, getDefaultSetting } from '../../input/input-setting';

@Component({
  selector: 'kf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
  @ViewChild('validateForm') form!: NgForm;

  /** 表单数据 */
  @Input() fields: any[] = [];
  /** 填充数据的dto */
  @Input() inputDto: any;
  @Input() formClass: string = 'cols-max-content-1';
  @Input() customObj?: Object;

  @Input() setting = getDefaultSetting();
  @Input() layout = getDefaultLayout('form');

  @Output() selectOuter = new EventEmitter();
  @Output() initOuter = new EventEmitter();
  @Output() customOuter = new EventEmitter();
  @Output() customInstance = new EventEmitter();
  @Output() fileArrayOuter = new EventEmitter();
  @Output() fileOuter = new EventEmitter();

  // 正则表达式
  orderRex = '^[0-9]*$';

  constructor() {
  }

  ngOnInit(): void {
    assignNullProps(this.setting, getDefaultSetting());
    assignNullProps(this.layout, getDefaultLayout('from'));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initOuter.emit(this.form);
    }, 0);
  }

  selectChanged(param: { id: any; name: any }) {
    this.initOuter.emit(this.form);
    this.selectOuter.emit(param);
  }

  checkGroupChanged(_: any) {
    this.initOuter.emit(this.form);
  }

  dateChanged(_: Date) {
    this.initOuter.emit(this.form);
  }

  radioChanged() {
    this.initOuter.emit(this.form);
  }

  textareaChanged(_: string) {
    this.initOuter.emit(this.form);
  }

  textChanged(_: string) {
    this.initOuter.emit(this.form);
  }

  numberChanged(_: number) {
    this.initOuter.emit(this.form);
  }

  listChanged() {
    this.initOuter.emit(this.form);
  }

  coverChanged() {
    this.initOuter.emit(this.form);
  }

  templateCardChanged() {
    this.initOuter.emit(this.form);
  }

  fileArrayChanged(param: any) {
    this.fileArrayOuter.emit(param);
    this.initOuter.emit(this.form);
  }

  fileChanged(param: any) {
    this.fileOuter.emit(param);
    this.initOuter.emit(this.form);
  }
}
