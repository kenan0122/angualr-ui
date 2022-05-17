
import { Component, Injector, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { TableBaseService } from './ui-config/service/table-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  extends TableBaseService implements OnInit {
  fileArray = [];
  ngOnInit(): void {
  }

  constructor(injector: Injector) {
    super(injector);
  }

  uploadFile(param: any) {
    if (param.type === 'fetch') {
      const url = `https://api4.psylab.com.cn/api/cms/files/images/upload`;
      const dto = {
        'fileType': 1,
        'folder': 'cfa6e3dd-b837-692f-534a-39fd20f1151d'
      }
      this.http.post<any>(url, param.formData, {
        params: dto
      }).subscribe (response =>{
        // 上传成功, 调用success方法
        param.status();
        // 这里的response返回的是上传图片的路径
        console.log(777,response)
        //this.inputDto = response;
      })
    }
  }

}
