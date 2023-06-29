import { Component, Input, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfigEditor,
  setPrimary,
  KnownColor,
  ServerApi,
  setDefaultBackground
} from '@psylab/experiments';

import {range, randomColor, template } from "@psylab/utils";
import { RequestService } from 'src/app/ui-config/service/request.service';

@Component({
  selector: 'app-edit-param',
  templateUrl: './edit-experiment.component.html',
  styleUrls: ['./edit-experiment.component.scss']
})
export class EditExperimentComponent extends RequestService implements OnInit {
  private readonly _request = this.request.bind(this);
  paradigmId!: string;
  paradigmEditDto: any;

  configEditor: any;
  isDark: boolean = false;

  constructor(
    private injector: Injector,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    super(injector)
   }

  ngOnInit() {
    this.getRouteParam();
    setPrimary(KnownColor.Blue);
  }


  getRouteParam() {
    this.activatedRoute.params.subscribe(param => {
      this.paradigmId = param['id'];
      this.getEditData(this.paradigmId);
    });
  }

  getEditData(id: any) {
    const url = template('/api/Paradigm/paradigms/{0}/exp-config', id)

    this.request({
      method: 'GET',
      url,
    }).subscribe (response =>{
      this.paradigmEditDto = response;
      this.createModel();
    });
  }

  createModel() {
    const blockFormTypes = range(10, 30);
    const expDto1 = {
      id: this.paradigmId,
      isEmpty: this.paradigmEditDto.isEmpty,
      isPublished: this.paradigmEditDto.isPublished,
      isReadonly: this.paradigmEditDto.isReadonly,
      name: this.paradigmEditDto.name,
      // 范式广场的模板id
      templateId: this.paradigmEditDto.templateId,
      // 模板类型
      type: this.paradigmEditDto.type,
      // 试次类型
      blockFormTypes: this.paradigmEditDto.blockFormTypes || blockFormTypes,
    };

    const uploadUrl = this.baseUrl + '/api/paradigm/config/';
    const configUrl = this.baseUrl + '/api/Paradigm/paradigms/';
    const downUrl = this.baseUrl + '/api/file/paradigm/';

    const api = new ServerApi({
      expId: this.paradigmId,
      configDtoUrl: `${configUrl}save-config`,
      // reportDtoUrl: `${apiBaseUrl}report`,
      expDownloadBaseUrl: `${downUrl}download`,
      uploadUrl: `${uploadUrl}upload`,
      // templateDownloadBaseUrl: `${serviceBaseUrl}/api/paradigm/egl`,
    });

    this.configEditor = new ConfigEditor({
      target: document.getElementById('experiment'),
      props: {
        viewModel: {expDto:expDto1, api}
      }
    });
  }

  save() {
    this.configEditor.save();
    this.route.navigate(['/app/paradigm']);
  }

  preview() {
    this.configEditor.preview();
  }

  back() {
    this.route.navigate(['/app/paradigm']);
  }

  themeSwitch() {
    this.isDark = !this.isDark;
    setDefaultBackground(this.isDark);
  }

}
