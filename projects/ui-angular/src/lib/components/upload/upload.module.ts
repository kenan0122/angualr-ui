import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { UploadComponent } from './upload.component';
import { ErrorModule } from '../error/error.module';

@NgModule({
  declarations: [UploadComponent],
  exports: [UploadComponent],
  imports: [
    CommonModule,
    NzUploadModule,
    NzCardModule,
    NzModalModule,
    ErrorModule,
    NzMessageModule
  ]
})
export class UploadModule { }
