import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormConfigSchemeDto } from 'src/app/ui-config/type/form';
import { TableConfigScheme } from 'src/app/ui-config/type/table';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  baseUrl: string = environment.apis.default.url;
  tableJsonData!: TableConfigScheme<any>; //= formsJson;
  tableData: any;

  pageNumber: number = 1;
  pageSize: number = 10;

  reLoad: any = {};
  // 发送空数据
  sendNullsAsQueryParam: boolean = false;

  isVisible: boolean = false;

  formsJsonData!: any;
  inputDto: any;
  isCreateMethod: boolean = true;

  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.initJsonData();
  }

  initJsonData() {
    // 范式列表json
    const url=`${this.baseUrl}/api/Paradigm/paradigms/table-config-scheme`;

    this.http.post<TableConfigScheme<any>>(url, {})
      .subscribe((response)=>{
        this.tableJsonData = response;
      })
  }

  // 删除
  delete(param:any) {
    const url = `${this.baseUrl}/api/Paradigm/paradigms/${param.id}`;
    this.http.delete<any>(url)
    .subscribe((response)=>{
      this.reLoad = {};
    })
  }

  // 发布
  publish(param: any) {
    const url = `${this.baseUrl}/api/Paradigm/paradigms/publish`

    this.http.post<any>(url, {...param.column.dto})
    .subscribe((response)=>{
      this.reLoad = {};
    })
  }

  edit(param: any) {
    const url=`${this.baseUrl}/api/Paradigm/paradigms/form-config`;
    this.http.post<any>(url, {})
    .subscribe((response)=>{
      this.getEditData();
      this.formsJsonData = response;
      this.isVisible = true;
    })
  }

  getEditData() {
    const url= `${this.baseUrl}/api/Paradigm/paradigms/7b21d114-7477-a795-18e8-3a02e1654434/for-edit`;
    this.http.get<object>(url).subscribe (response =>{
      this.inputDto = response;
    })
  }

  add() {
    const url=`${this.baseUrl}/api/Paradigm/paradigms/form-config`;
    this.http.post<any>(url, {})
    .subscribe((response)=>{
      this.formsJsonData = response;
      this.inputDto = response.action.dto;
      this.isVisible = true;
    })

  }

  closeModal(param: any) {
    console.log('table', this.inputDto)
    this.isVisible = false;
    // 点击确定, 进行数据请求
    if (param.modal) {
      const url=`${this.baseUrl}/api/Paradigm/paradigms/save-paradigm`;
      this.http.post<any>(url, {...this.inputDto})
      .subscribe((response)=>{
        // 重新加载列表数据
        this.reLoad = {};
      })
    }
  }

}
