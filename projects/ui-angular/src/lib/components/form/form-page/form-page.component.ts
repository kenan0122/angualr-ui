import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { assignNullProps } from '@psylab/utils';
import { getDefaultLayout } from '../../input/input-setting';
import { ComponentInstance } from './form-page';

export interface FormBtn {
  cancel: boolean;
  promise: boolean;
}

@Component({
  selector: 'kf-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  providers: [{provide: ComponentInstance, useExisting: FormPageComponent}]
})
export class FormPageComponent implements OnInit {
  @ViewChild('formChild') formChild?: ElementRef;
  /** 表单数据 */
  @Input() forms: any;
  /** 填充数据的dto */
  @Input() inputDto: any;
  @Input() customObj?: Object;
  @Input() formClass: string = 'cols-max-content-1';
  @Input() layout = getDefaultLayout('form-page');

  /** 按钮的隐藏/显示 */
  @Input()
  visibleBtn: FormBtn = {
    cancel: true,
    promise: true
  }

  @Output() formPageOuter = new EventEmitter();
  @Output() customOuter = new EventEmitter();
  @Output() customInstance = new EventEmitter();
  @Output() fileArrayOuter = new EventEmitter();
  @Output() fileOuter = new EventEmitter();
  @Output() initOuter = new EventEmitter();

  formControllerValid = true;

  constructor() {}

  ngOnInit() {
    assignNullProps(this.layout, getDefaultLayout('from-page'));
  }

  initFormData(param: NgForm) {
    // setTimeout(() => {
    //   this.formControllerValid = param.form.valid;
    // }, 0);
    this.formControllerValid = param.form.valid;
    this.initOuter.emit(param);
  }

  // 提交数据
  click() {
    this.formPageOuter.emit({modal: true});
  }

  cancel() {
    this.formPageOuter.emit({modal: false});
  }

  instanceChanged(param: any) {
    this.customInstance.emit(param);
  }

  fileArrayChanged(param: any) {
    this.fileArrayOuter.emit(param)
  }

  fileChanged(param: any) {
    this.fileOuter.emit(param)
  }
}
