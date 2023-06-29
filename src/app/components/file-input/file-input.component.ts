import { ValueType } from './../../ui-config/type/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  //"/api/paradigm/193/carousel/b515627c2dc87ff9c90519e8f29048fc.jpeg"
  valueArray = ["https://cdnapi.psylab.com.cn/api/cdn/PsyLAB/file/p/10.png?s=64"];
  value: string = 'blob:http://localhost:4600/b88fa80c-fcca-4ab8-bc38-c6a227736c1f';
  constructor() { }

  ngOnInit() {
  }

  ok(){

  }

  fileArrayChanged(param: any) {
   // console.log('fileArray', param, this.valueArray)
  }

  fileChanged(param: any) {
   // console.log('file', param, this.value)

  }

}
