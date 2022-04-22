import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}
