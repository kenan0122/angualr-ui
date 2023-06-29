import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  FileInputComponent,
  MarkdownEditorComponent,
} from 'projects/ui-angular/src/public-api';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit {
  @ViewChild('formPage') formPage?: any;

  param = 12;

  selectIndex: number = 0;
  selectOptions = {
    表格: 0,
    表单: 1,
  };

  jsonStr: string = '';
  data: string = '';

  viewJson: any;
  viewData: any;
  reload: any = {};
  customObj: Object = {};
  richObj: any = {};
  visibleBtn = {
    cancel: false,
    promise: false,
  };
  list: any[] = [];
  html: string = '';
  md: string = '';
  thumbnail: string | Blob = '';
  formControllerValid: boolean = false;

  constructor() {}

  ngOnInit() {
    this.richObj = {
      name: '',
      description: '',
      thumbnailDto: {
        isLocal: false,
        url: '',
      },
      body: {
        isChanged: false,
        fileNames: [],
        info: undefined,
        mdUrl: '',
      },
      articleType: 0,
    };

    this.customObj = {
      body: {
        outer: 'settingOuter',
        component: MarkdownEditorComponent,
        params: {
          // 传的是articleInfo
          // navParams: richObj.bodyText.articleInfo,
          // setting: {
          //   id: 'markdown',
          //   isEditor: true,
          //   mode: richObj.bodyText.articleType,
          //   markdownUrl: richObj.bodyText.mdUrl,
          //   isShowSave: true
          // }
          setting: {
            id: 'cy',
          },
        },
      },
      thumbnailDto: {
        outer: 'fileOuter',
        component: FileInputComponent,
        params: {},
      },
    };
  }

  click() {
    this.viewJson = this.jsonStr ? JSON.parse(this.jsonStr) : '';
    // if (this.viewJson) {
    //   this.viewJson.action.dto['body'] = this.richObj['body'];
    //   this.viewJson.action.dto['thumbnailDto'] = this.richObj['thumbnailDto'];
    // }

    this.viewData = this.data
      ? JSON.parse(this.data)
      : this.viewJson?.action.dto;

  }

  selectChange(param: any) {
    this.viewJson = '';
    this.viewData = '';

    this.jsonStr = '';
    this.data = '';
  }

  customChange() {
    const dto = {
      name: this.viewJson.action.dto.name,
      description: this.viewJson.action.dto.description,
      thumbnailDto: this.viewJson.action.dto.thumbnailDto,
      body: this.viewJson.action.dto.body,
      articleType: this.viewJson.action.dto.articleType,
    };

    let formData = new FormData();
    formData.append('dto', JSON.stringify(dto));
    formData.append('htmlContent', this.html);
    formData.append('mdContent', this.md);
    formData.append('thumbnail', this.thumbnail);

    let bundleDto = {
      dto: JSON.stringify(dto),
      htmlContent: this.html,
      mdContent: this.md,
      thumbnail: this.thumbnail,
    };
  }

  fillFormData(param: any) {
    if (param.type === 'markdown') {
      this.viewJson.action.dto.body.info = param.content.other;
      this.viewJson.action.dto.body.fileNames = param.content.fileNames;
      this.viewJson.action.dto.body.isChanged = param.content.inChanged;
      this.viewJson.action.dto.body.mdUrl = '';
      this.html = param.content.html;
      this.md = param.content.markdown;
    } else if (param.type === 'thumbnail') {
      this.viewJson.action.dto.thumbnailDto = {
        isLocal: param.content.isLocal,
        url: ''
      };
      if (param.content.isLocal) {
        this.thumbnail = param.content.url;
      }
    }
  }

  formPageChange(param: any) {
    if (param.modal) {
      this.list.forEach((item) => {
        let data = item.save();
        this.fillFormData(data);
      });

      this.customChange();
    }
  }

  instanceChanged(param: any) {
    this.list.push(param);
  }

  formPageChanged(param: any) {
    console.log(777, this.viewData, param)
  }

  initFormData(param: NgForm) {
    debugger
    if (param) {
      this.formControllerValid = param.form.valid;
    }
  }
}
