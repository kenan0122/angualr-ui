import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { JsonUrlDto } from 'src/app/ui-config/type/base';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers:[NzMessageService]
})
export class FieldComponent {
  baseUrl: string = environment.apis.default.url;
  reload: any = {};

  jsonUrlObj:JsonUrlDto = {
    tableJsonUrl: '/api/Paradigm/fields/table-config',
    tableDataUrl: '/api/Paradigm/fields/page',
    deleteJsonUrl: '/api/Paradigm/fields/{0}',
    formJsonUrl: '/api/Paradigm/fields/form-config',
    formDataUrl: '/api/Paradigm/fields/{0}/for-edit',
    saveUrl: '/api/Paradigm/fields/save-field'
  };

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
      this.reload = {};
    })
  }

  grantBtn(param: any) {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

}
