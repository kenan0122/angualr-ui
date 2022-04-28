import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { TableConfigScheme } from 'src/app/ui-config/type/table';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers:[NzMessageService]
})
export class FieldComponent implements OnInit {
  baseUrl: string = environment.apis.default.url;
  tableJsonData!: TableConfigScheme<any>; //= formsJson;
  tableData: any;

  reLoad: any = {};
  // 发送空数据
  sendNullsAsQueryParam: boolean = false;

  isVisible: boolean = false;

  // 表单数据
  formsJsonData!: any;
  inputDto: any;

  constructor(public http:HttpClient, private message: NzMessageService) { }

  ngOnInit() {
    this.initJsonData();
  }

  initJsonData() {
    // 领域table列表json
    const url=`${this.baseUrl}/api/Paradigm/fields/table-config-scheme`;

    this.http.post<TableConfigScheme<any>>(url, {})
      .subscribe((response)=>{
        this.tableJsonData = response;
      })
  }

  // 删除
  delete(param:any) {
    const url = `${this.baseUrl}/api/Paradigm/fields/${param.id}`;
    this.http.delete<any>(url)
    .subscribe((response)=>{
      this.reLoad = {};
    })
  }

  deleteBatch(ids: any) {
    ids = Array.from(ids)
    const url=`${this.baseUrl}/api/Paradigm/fields/batch`;
    this.http.post<any>(url, {ids: ids})
    .subscribe((response)=>{
      this.message.success('删除成功')
      this.reLoad = {};
    })
  }


  edit(param: any) {
    const url=`${this.baseUrl}/api/Paradigm/fields/form-config`;
    this.http.post<any>(url, {})
    .subscribe((response)=>{
      this.getEditData(param.id);
      this.formsJsonData = response;
      this.isVisible = true;
    })
  }

  getEditData(id: string) {
    const url= `${this.baseUrl}/api/Paradigm/fields/${id}/for-edit`;
    this.http.get<object>(url).subscribe (response =>{
      this.inputDto = response;
    })
  }

  add() {
    const url=`${this.baseUrl}/api/Paradigm/fields/form-config`;
    this.http.post<any>(url, {})
    .subscribe((response)=>{
      this.formsJsonData = response;
      this.inputDto = response.action.dto;
      this.isVisible = true;
    })

  }

  closeModal(param: any) {
    this.isVisible = false;
    // 点击确定, 进行数据请求
    if (param.modal) {
      const url=`${this.baseUrl}/api/Paradigm/fields/save-field`;
      this.http.post<any>(url, {...this.inputDto})
      .subscribe((response)=>{
        // 重新加载列表数据
        this.reLoad = {};
      })
    }
  }

}
