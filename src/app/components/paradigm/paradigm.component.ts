import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { JsonUrlDto } from 'src/app/ui-config/type/base';
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

  jsonUrlObj:JsonUrlDto = {
    tableJsonUrl: 'api/Paradigm/paradigms/table-config',
    tableDataUrl: 'api/Paradigm/paradigms/page',
    deleteJsonUrl: 'api/Paradigm/paradigms/{0}',
    formJsonUrl: 'api/Paradigm/paradigms/form-config',
    formDataUrl: 'api/Paradigm/paradigms/{0}/for-edit',
    saveUrl: 'api/Paradigm/paradigms/save-paradigm'
  };

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

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

  editParam(param: any) {
    this.route.navigate(['/app/paradigm/experiment/' + param.id]);
  }

}
