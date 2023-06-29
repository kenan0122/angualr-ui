import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { JsonUrlDto } from 'src/app/ui-config/type/base';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-block-from-type',
  templateUrl: './block-from-type.component.html',
  styleUrls: ['./block-from-type.component.scss']
})
export class BlockFromTypeComponent implements OnInit {
  baseUrl: string = environment.apis.default.url;
  checkIdLen:number = 0;
  reload: any = null;
  jsonUrlObj: JsonUrlDto = {
    tableJsonUrl: '/api/square/blockformtypes/table-config',
    tableDataUrl: '/api/square/blockformtypes',
    deleteJsonUrl: '/api/square/blockformtypes/{0}',
    formJsonUrl: '/api/square/blockformtypes/create-form-config',
    formDataUrl: '/api/square/blockformtypes/{0}/for-edit',
    saveUrl: '/api/square/blockformtypes',
  };
  constructor(public http:HttpClient, private message: NzMessageService) { }

  ngOnInit() {
  }

  deleteBatch(ids: any) {
    ids = Array.from(ids);
    this.checkIdLen = ids.length;
    const url=`${this.baseUrl}/api/square/blockformtypes/batch`;
    this.http.delete<any>(url, {params: {ids: ids}})
    .subscribe((response)=>{
      this.message.success('删除成功');
      this.reload = {};
    })
  }

}
