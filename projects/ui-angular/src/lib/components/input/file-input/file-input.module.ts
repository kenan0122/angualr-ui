import { IconModule } from './../../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from './file-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ButtonModule } from './../../button/button.module';
import { ErrorModule } from '../../error/error.module';
import { ImageComponent } from './image/image.component';
import { AddButtonModule } from '../../add-button/add-button.module';
import { PipeModule } from '../../../pipe/pipe.module';

@NgModule({
  declarations: [FileInputComponent, ImageComponent],
  exports: [FileInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule,
    ButtonModule,
    NzMessageModule,
    AddButtonModule,
    PipeModule,
    IconModule
  ],
})
export class FileInputModule { }
