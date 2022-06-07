import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface FormBtn {
  cancel: boolean;
  promise: boolean;
}

@Component({
  selector: 'kf-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  /** 表单数据 */
  @Input() forms: any;
  /** 填充数据的dto */
  @Input() inputDto: any;
  /** 按钮的隐藏/显示 */
  @Input()
  visibleBtn: FormBtn = {
    cancel: true,
    promise: true
  }

  @Output() formPageOuter = new EventEmitter();

  formControllerValid = true;

  constructor() {}

  ngOnInit() {
  }

  initFormData(param: NgForm) {
    setTimeout(() => {
      this.formControllerValid = param.form.valid;
    }, 0);
  }

  // 提交数据
  click() {
    this.formPageOuter.emit({modal: true});
  }

  cancel() {
    this.formPageOuter.emit({modal: false});
  }
}
