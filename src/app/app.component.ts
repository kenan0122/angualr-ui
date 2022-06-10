import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from './ui-config/service/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends RequestService {
  fileArray = [];

  constructor(injector: Injector, private activatedRoute: ActivatedRoute) {
    super(injector);
  }

  uploadFile(param: any) {
    if (param.type === 'fetch') {
      const url = `/api/cms/files/images/upload`;
      const dto = {
        fileType: 1,
        folder: 'cfa6e3dd-b837-692f-534a-39fd20f1151d',
      };

      this.request(
        {
          method: 'POST',
          url,
          params: dto,
          body: param.formData,
        },
        'https://api4.psylab.com.cn'
      ).subscribe((response) => {
        // 上传成功, 调用success方法
        param.status();
        // 这里的response返回的是上传图片的路径
        console.log(777, response);
        //this.inputDto = response;
      });
    }
  }

  translateFn = (key: string) => {
    return key;
  };
}
