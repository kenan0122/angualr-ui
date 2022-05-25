import { Component, Input, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ConfigEditor,
  setPrimary,
  setDefaultBackground
} from '@psylab/experiments';
import {range, randomColor, template } from "@psylab/utils";
import { TableBaseService } from 'src/app/ui-config/service/table-base.service';


@Component({
  selector: 'app-edit-param',
  templateUrl: './edit-experiment.component.html',
  styleUrls: ['./edit-experiment.component.less']
})
export class EditExperimentComponent extends TableBaseService implements OnInit {
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
    const urlStr = template('api/Paradigm/paradigms/{0}/for-edit', id)
    const url = `${this.baseUrl}/${urlStr}`;

    this.http.get<object>(url).subscribe (response =>{
      this.paradigmEditDto = response;
      this.createModel();
    })
  }

  createModel() {
    const blockFormTypes = range(10, 30);
    const expDto1 = {
      id: this.paradigmId,
      isEmpty: true,
      isPublished: false,
      isReadonly: false,
      name: this.paradigmEditDto.title,
      // 范式广场的模板id
      templateId: undefined,
      // 模板类型
      type: this.paradigmEditDto.moduleType,
      // 试次类型
      blockFormTypes: this.paradigmEditDto.blockFormTypes || blockFormTypes,
    };

	    //const api = createEglServerApi(this.paradigmId);


    this.configEditor = new ConfigEditor({
      target: document.getElementById('experiment'),
      props: {
        viewModel: {expDto:expDto1, api: null}
      }
    });
    // app.$on('save',this.onSave);
    // app.$on('preview', this.onPreview);
  }

  onSave(e:any) {
   this.configEditor.preview()
  }

  preview(e:any) {
    this.configEditor.preview()
  }
}
