import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListComponent } from './list.component';
import { ErrorModule } from '../error/error.module';


@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    ScrollingModule,
    ErrorModule,
    NzListModule
  ]
})
export class ListModule { }
