import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { checkedIds, options } from 'src/app/ui-config/data/form';
import { FormConfigSchemeDto } from 'src/app/ui-config/type/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  title = 'my-app';
  _checkboxGroups = options;
  checkedId = null;
  ids = checkedIds;
  textValue = null;
  dateValue = null;

  formsJsonData!: any; //= formsJson;
  formInputData: any;

  ngOnInit(): void {
    this.getData();
    this.postData();
  }

  constructor(public http:HttpClient) {}

  postData() {
    // 如果是真实请求: this.paradigm.createFormConfig() 获取数据
    //  获取范式的详情表单
    //const url="http://192.168.1.229:8077/api/Paradigm/paradigms/form-config";

    // 领域详情json
    const url="http://192.168.1.229:8077/api/Paradigm/fields/form-config";

    this.http.post<any>(url, {})
      .subscribe((response)=>{
        this.formsJsonData = response;
      })
  }

  getData() {
    // 获取范式详情
    //const url= "http://192.168.1.229:8077/api/Paradigm/paradigms/7b21d114-7477-a795-18e8-3a02e1654434/for-edit";

    // 领域详情数据
    const url= "http://192.168.1.229:8077/api/Paradigm/fields/030500dc-2a74-b7cb-8a91-3a02a91e5082/for-edit";
    this.http.get<object>(url).subscribe (response =>{
      this.formInputData = response
    })
  }

  click(data: any) {
    console.log(666, this._checkboxGroups)
  }

}
