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
export class FieldComponent {
  baseUrl: string = environment.apis.default.url;
  reLoad: any = {};

  jsonUrl: string = 'api/Paradigm/fields/table-config';
  url: string = 'api/Paradigm/fields/page';
  deleteUrl: string = 'api/Paradigm/fields/{0}';
  // 编辑/添加表单json
  formJsonUrl: string = 'api/Paradigm/fields/form-config';
  formUrl: string = 'api/Paradigm/fields/{0}/for-edit';
  saveUrl: string = 'api/Paradigm/fields/save-field';

  checkIdLen:number = 0;
  visible: boolean = false;

  constructor(public http:HttpClient, private message: NzMessageService) { }

  deleteBatch(ids: any) {
    ids = Array.from(ids);
    this.checkIdLen = ids.length;
    const url=`${this.baseUrl}/api/Paradigm/fields/batch`;
    this.http.post<any>(url, {ids: ids})
    .subscribe((response)=>{
      this.message.success('删除成功');
      this.reLoad = {};
    })
  }

  grantBtn(param: any) {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

}
