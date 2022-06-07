import { Component, OnInit } from '@angular/core';
import { JsonUrlDto } from 'src/app/ui-config/type/base';

@Component({
  selector: 'app-block-from-type',
  templateUrl: './block-from-type.component.html',
  styleUrls: ['./block-from-type.component.scss']
})
export class BlockFromTypeComponent implements OnInit {

  reLoad: any = null;
  jsonUrlObj: JsonUrlDto = {
    tableJsonUrl: '/api/Paradigm/block-form-type/table-config',
    tableDataUrl: '/api/Paradigm/block-form-type/page',
    deleteJsonUrl: '/api/Paradigm/block-form-type/{0}',
    formJsonUrl: '/api/Paradigm/block-form-type/form-config',
    formDataUrl: '/api/Paradigm/block-form-type/{0}/for-edit',
    saveUrl: '/api/Paradigm/block-form-type/save-block-form-type',
  };
  constructor() { }

  ngOnInit() {
  }

}
