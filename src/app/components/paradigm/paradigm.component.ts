import { OperationType, RequestService } from 'src/app/ui-config/service/request.service';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonUrlDto } from 'src/app/ui-config/type/base';
import { ErrorInfo } from 'src/app/ui-config/type/errror';
import { template } from '@psylab/utils';

@Component({
  selector: 'app-paradigm',
  templateUrl: './paradigm.component.html',
  styleUrls: ['./paradigm.component.scss'],
})
export class ParadigmComponent extends RequestService implements OnInit {
  reLoad: any = null;
  jsonUrlObj: JsonUrlDto = {
    tableJsonUrl: '/api/Paradigm/paradigms/table-config',
    tableDataUrl: '/api/Paradigm/paradigms/page',
    deleteJsonUrl: '/api/Paradigm/paradigms/{0}',
    formJsonUrl: '/api/Paradigm/paradigms/form-config',
    formDataUrl: '/api/Paradigm/paradigms/{0}/for-edit',
    saveUrl: '/api/Paradigm/paradigms/save-paradigm',
  };
  isVisibleModal: boolean = false;
  formsJsonData?: any;
  inputDto?: any;
  errorList: ErrorInfo[] = [];
  saveType: any = 0;

  constructor(injector: Injector, private route: Router) {
    super(injector);
  }

  ngOnInit() {}

  addParadigm() {
    this.saveType = 0;
    // 弹框展示 "模板类型"和"范式名称"
    const url = '/api/Paradigm/paradigms/template-form-config';

    this.request({
      method: 'POST',
      url,
    }).subscribe((response) => {
      this.formsJsonData = response;
      this.inputDto = response.action.dto;
    });

    this.isVisibleModal = true;
  }

  publish(param: any) {
    const url = `/api/Paradigm/paradigms/publish`;

    this.request({
      method: 'POST',
      url,
      body: param.column.dto,
    }).subscribe((response) => {
      this.reLoad = {};
    });
  }

  editParam(param: any) {
    this.route.navigate(['/app/paradigm/param/' + param.id]);
  }

  editInfo(param: any) {
    this.route.navigate(['/app/paradigm/info/' + param.id]);
  }

  async rename(param: any) {
    this.saveType = 2;
    this.getRenameData(param.id);
  }

  copy(param: any) {
    this.saveType = 1;
    const url = '/api/Paradigm/paradigms/title-form';
    this.loadJson(url, {type: OperationType.Copy}).subscribe((response) => {
      this.formsJsonData = response;
      this.inputDto = response.action.dto;
      this.inputDto.id = param.id;
    });

    this.isVisibleModal = true;
  }

  getRenameData(id: string) {
    const url = template('/api/Paradigm/paradigms/title/{0}', id);

    this.request({
      method: 'GET',
      url,
    }).subscribe((response) => {
      this.inputDto = response;
      this.loadRenameJson();
    });

    this.isVisibleModal = true;;
  }

  loadRenameJson() {
    const url = '/api/Paradigm/paradigms/title-form';
    this.loadJson(url, {type: OperationType.Rename}).subscribe((response) => {
      this.formsJsonData = response;
    });
  }

  loadJson(url: string, dto: any = {}) {
    return this.request({
      method: 'POST',
      url,
      body: dto
    });
  }

  // 添加--保存
  closeModal(param: any) {
    if (param.modal) {
      const url = this.saveFormType(param.saveType);

      this.request({
        method: 'POST',
        url,
        body: this.inputDto,
      }).subscribe((response) => {
        if (response.success) {
          this.errorList = [];
          this.isVisibleModal = false;

          if (response.data.id) {
            // 编辑页面跳转
            this.route.navigate(['/app/paradigm/info/' + response.data.id]);
          } else {
            this.reLoad = {};
          }
        } else {
          this.errorList = response.error ? response.error.errorMessage : [];
        }
      });
    } else {
      this.isVisibleModal = false;
    }
  }

  saveFormType(type: number) {
    let url = '';
    switch (type) {
      case 1:
        url = `/api/Paradigm/paradigms/copy`;
        break;
      case 2:
        url = `/api/Paradigm/paradigms/rename`;
        break;
      default:
        url = `/api/Paradigm/paradigms/pre-create-paradigm`;
        break;
    }

    return url;
  }
}
