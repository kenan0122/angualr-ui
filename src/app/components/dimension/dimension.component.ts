import { Component, Injector, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RequestService } from 'src/app/ui-config/service/request.service';
import { JsonUrlDto } from 'src/app/ui-config/type/base';
import { CustomComponent } from '../custom/custom.component';

@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrls: ['./dimension.component.scss'],
  providers:[NzMessageService]
})
export class DimensionComponent extends RequestService {
  reload: any = {};

  jsonUrlObj:JsonUrlDto = {
    tableJsonUrl: '/api/Paradigm/dimensions/table-config',
    tableDataUrl: '/api/Paradigm/dimensions/page',
    deleteJsonUrl: '/api/Paradigm/dimensions/{0}',
    formJsonUrl: '/api/Paradigm/dimensions/create-form-config',
    formDataUrl: '/api/Paradigm/dimensions/{0}/for-edit',
    saveUrl: '/api/Paradigm/dimensions/save-dimension'
  };

  checkIdLen:number = 0;
  visible: boolean = false;

  param: any = {
    data: 'eee',
    jsonStr: 'ddd',
    param: 18
  };

  component = CustomComponent;

  constructor(injector: Injector, private message: NzMessageService) {
    super(injector);
  }

  deleteBatch(ids: any) {
    ids = Array.from(ids);
    this.checkIdLen = ids.length;
    const url=`/api/Paradigm/dimensions/batch`;

    this.request({
      method: 'POST',
      url,
      body: {ids: ids}
    }).subscribe((response)=>{
      this.message.success('删除成功');
      this.reload = {};
    })
  }

  trClick(param: any) {
  }
}
