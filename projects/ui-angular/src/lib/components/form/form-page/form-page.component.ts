import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  visibleBtn = {
    cancel: true,
    promise: true
  }

  @Output() formPageOuter = new EventEmitter();

  formControllerValid = true;

  constructor() {}

  ngOnInit() {}

  initFormData(param: NgForm) {
    setTimeout(() => {
      this.formControllerValid = param.form.valid;
    }, 0);
  }

  // 提交数据
  click() {
    // /console.log('form-page', this.inputDto);
    this.formPageOuter.emit();
  }

  cancel() {
    this.formPageOuter.emit();
  }
}
