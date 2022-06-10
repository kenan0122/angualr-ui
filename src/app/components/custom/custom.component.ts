import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  selectIndex: number = 0;
  selectOptions = {
    '表格': 0,
    '表单': 1
  };

  jsonStr:string = '';
  data:string=  '';

  viewJson: any;
  viewData: any;
  reLoad: any = {};

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.viewJson = this.jsonStr ? JSON.parse(this.jsonStr) : '';
    this.viewData = this.data ? JSON.parse(this.data) : '';
  }

  selectChange(param: any) {
    this.viewJson = '';
    this.viewData = '';

    this.jsonStr = '';
    this.data = '';
  }

}
