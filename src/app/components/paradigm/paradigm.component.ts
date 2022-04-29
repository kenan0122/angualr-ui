import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paradigm',
  templateUrl: './paradigm.component.html',
  styleUrls: ['./paradigm.component.scss']
})
export class ParadigmComponent implements OnInit {
  // api的路径
  baseUrl: string = environment.apis.default.url;
  reLoad: any = null;

  jsonUrl: string = 'api/Paradigm/paradigms/table-config-scheme';
  url: string = 'api/Paradigm/paradigms/page';
  deleteUrl: string = 'api/Paradigm/paradigms/{0}';
  // 编辑/添加表单json
  formJsonUrl: string = 'api/Paradigm/paradigms/form-config';
  formUrl: string = 'api/Paradigm/paradigms/{0}/for-edit';
  saveUrl: string = 'api/Paradigm/paradigms/save-paradigm';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // 发布
  publish(param: any) {
    const url = `${this.baseUrl}/api/Paradigm/paradigms/publish`

    this.http.post<any>(url, {...param.column.dto})
    .subscribe((response)=>{
      this.reLoad = {};
    })
  }

}
