import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text.component';
import { ErrorModule } from '../../error/error.module';

@NgModule({
  declarations: [InputTextComponent],
  exports: [InputTextComponent],
  imports: [
    CommonModule,
    NzInputModule,
    FormsModule,
    ErrorModule,
    ReactiveFormsModule
  ]
})
export class InputTextModule { }
