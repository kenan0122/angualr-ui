import { Component, Injector, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RequestService } from 'src/app/ui-config/service/request.service';
import { JsonUrlDto } from 'src/app/ui-config/type/base';
import { ErrorInfo } from 'src/app/ui-config/type/errror';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
  providers: [NzMessageService],
})
export class PackageComponent extends RequestService implements OnInit {
  reload: any = {};

  jsonUrlObj: JsonUrlDto = {
    tableJsonUrl: '/api/Paradigm/packages/table-config',
    tableDataUrl: '/api/Paradigm/packages/page',
    deleteJsonUrl: '/api/Paradigm/packages/{0}',
    formJsonUrl: '/api/Paradigm/packages/create-form-config',
    formDataUrl: '/api/Paradigm/packages/{0}/for-edit',
    saveUrl: '/api/Paradigm/packages/save-package',
  };

  checkIdLen: number = 0;
  isVisibleDrawer: boolean = false;
  isVisibleModal: boolean = false;
  formsJsonData?: any;
  inputDto: any = {
    id: null,
    title: '',
  };
  errorList: ErrorInfo[] = [];
  saveType: any = 0;
  currentGrantId?: number;

  // 权限
  //inputGrantDto?:any;

  constructor(injector: Injector, private message: NzMessageService) {
    super(injector);
  }

  ngOnInit() {}

  grantBtn(param: any) {
    this.isVisibleDrawer = true;
    this.currentGrantId = param.id;
  }

  close() {
    this.isVisibleDrawer = false;
  }

  copy(param: any) {
    this.inputDto.id = param.id;
    this.isVisibleModal = true;
    const url = '/api/Paradigm/packages/copy-package-form-config';
    this.request({
      method: 'GET',
      url,
    }).subscribe((response) => {
      this.formsJsonData = response;
    });
  }

  closeModal(param: any) {
    if (param.modal) {
      const url = `/api/Paradigm/packages/copy-package`;

      this.request({
        method: 'POST',
        url,
        body: this.inputDto,
      }).subscribe((response) => {
        this.isVisibleModal = false;
        this.reload = {};
        // if (response.success) {
        //   this.errorList = [];
        //   this.isVisibleModal = false;

        //   if (response.data.id) {
        //     // 编辑页面跳转
        //     this.route.navigate(['/app/paradigm/info/' + response.data.id]);
        //   } else {
        //     this.reload = {};
        //   }
        // } else {
        //   this.errorList = response.error ? response.error.errorMessage : [];
        // }
      });
    } else {
      this.isVisibleModal = false;
    }
  }

  // saveFormType(type: number) {
  //   let url = '';
  //   switch (type) {
  //     case 1:
  //       url = `/api/Paradigm/paradigms/copy`;
  //       break;
  //     default:
  //       url = `/api/Paradigm/paradigms/pre-create-paradigm`;
  //       break;
  //   }

  //   return url;
  // }
}
