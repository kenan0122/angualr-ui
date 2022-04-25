import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kf-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  // 表单数据
  @Input() forms: any;

  // 填充数据的dto
  @Input() inputDto: any;

  formControllerValid = true;


  constructor() { }

  ngOnInit() {
  }

  initFormData(param: NgForm) {
    setTimeout(() => {
      this.formControllerValid = param.form.valid;
    }, 0);
  }

  click() {
    console.log(5555, this.inputDto)
  }

}
