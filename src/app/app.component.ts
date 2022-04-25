
import { Component, OnInit } from '@angular/core';
import {options, checkedIds} from './components';
import {HttpClient} from "@angular/common/http";
import { FormConfigSchemeDto } from './ui-config/type/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-app';
  _checkboxGroups = options;
  checkedId = null;
  ids = checkedIds;
  textValue = null;
  dateValue = null;

  formsJsonData!: FormConfigSchemeDto; //= formsJson;
  formInputData: any;

  ngOnInit(): void {
    this.getData();
    this.postData();
  }

  constructor(public http:HttpClient) {}

  postData() {
    // 页面需要用到的数据
    // 如果是真实请求: this.paradigm.createFormConfig() 获取数据
    var url="http://192.168.1.229:8077/api/Paradigm/paradigms/form-config";
    this.http.post<FormConfigSchemeDto>(url, {})
      .subscribe((response)=>{
        this.formsJsonData = response;
      })
  }

  getData() {
    var url= "http://192.168.1.229:8077/api/Paradigm/paradigms/7b21d114-7477-a795-18e8-3a02e1654434/for-edit";
    this.http.get<object>(url).subscribe (response =>{
      this.formInputData = response
    })
  }

  click(data: any) {
    console.log(666, this._checkboxGroups)
  }
}
