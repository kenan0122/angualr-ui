import { ErrorModule } from './../error/error.module';
import { FormPageModule } from './../form/form-page/form-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormPageModule,
    NzModalModule,
    ErrorModule
  ]
})
export class ModalModule { }
