import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import { ErrorModule } from '../../error/error.module';


@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule,
    NzSelectModule
  ]
})
export class SelectModule { }
