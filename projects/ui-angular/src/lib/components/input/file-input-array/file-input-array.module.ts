import { ErrorModule } from './../../error/error.module';
import { IconButtonModule } from './../../icon-button/icon-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputArrayComponent } from './file-input-array.component';
import { FileInputModule } from '../file-input/file-input.module';
import { AddButtonComponent } from '../../add-button/add-button.component';
import { AddButtonModule } from '../../add-button/add-button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IconButtonModule,
    FileInputModule,
    AddButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule
  ],
  exports: [FileInputArrayComponent],
  declarations: [FileInputArrayComponent]
})
export class FileInputArrayModule { }
