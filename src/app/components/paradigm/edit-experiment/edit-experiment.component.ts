import { Component, Input, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ConfigEditor,
  setPrimary,
  setDefaultBackground,
  createEglServerApi
} from '@psylab/experiments';

import {range, randomColor, template } from "@psylab/utils";
import { RequestService } from 'src/app/ui-config/service/request.service';
import { IConfigPostDto, IDownloadFileInfo, IUploadFileInfo } from './experiment';

@Component({
  selector: 'app-edit-param',
  templateUrl: './edit-experiment.component.html',
  styleUrls: ['./edit-experiment.component.less']
})
export class EditExperimentComponent extends RequestService implements OnInit {
  private readonly _request = this.request.bind(this);
  paradigmId!: string;
  paradigmEditDto: any;

  configEditor: any;

  constructor(
    private injector: Injector,
    private activatedRoute: ActivatedRoute
  ) {
    super(injector)
   }

  ngOnInit() {
    this.getRouteParam();
    setPrimary(randomColor());
    setDefaultBackground(true);
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
      isEmpty: true,
      isPublished: false,
      isReadonly: false,
      name: this.paradigmEditDto.name,
      // 范式广场的模板id
      templateId: undefined,
      // 模板类型
      type: this.paradigmEditDto.type,
      // 试次类型
      blockFormTypes: this.paradigmEditDto.blockFormTypes || blockFormTypes,
    };

	  const api = {
      upload: this.upload,
      download: this.download,
      postConfigDto: this.postConfigDto,
      that: this
    }

    this.configEditor = new ConfigEditor({
      target: document.getElementById('experiment'),
      props: {
        viewModel: {expDto:expDto1, api}
      }
    });
  }

  save(e:any) {
    this.configEditor.save();
  }

  preview(e:any) {
    this.configEditor.preview();
  }

  async upload(file: IUploadFileInfo): Promise<boolean> {
    this['that']._request({
      method: 'POST',
      url: '/api/blob-storing/paradigm/upload',
      body: file
    }).subscribe((res: any) => {
      console.log(999, res)
    });

    return true;
  }

  async download(fileName: string, folder: string): Promise<IDownloadFileInfo> {
    return {
      name: fileName,
      mimeType: '',
      content: ''
    };
  }

  async postConfigDto(configDto: IConfigPostDto): Promise<boolean> {
    console.log('保存', configDto)
    // await this.request({
    //   method: 'PUT',
    //   url: '/api/Paradigm/paradigms/config',
    //   body: configDto
    // }).subscribe(res => {
    //   console.log('保存', res)
    // });

    return false;
  }


}
