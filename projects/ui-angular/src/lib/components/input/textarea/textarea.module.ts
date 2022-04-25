import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';
import { ErrorModule } from '../../error/error.module';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [TextareaComponent],
  exports: [TextareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ErrorModule,
    NzInputModule,
    ReactiveFormsModule
  ]
})
export class TextareaModule { }
