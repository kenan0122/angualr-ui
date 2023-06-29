import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzListModule } from 'ng-zorro-antd/list';

import { ContentListComponent } from './content-list.component';
import { FormModule } from '../../form/form/form.module';
import { ButtonModule } from '../../button/button.module';


@NgModule({
  declarations: [ContentListComponent],
  exports: [ContentListComponent],
  imports: [
    CommonModule,
    NzTableModule,
    ButtonModule,
    NzListModule,
    FormModule
  ]
})
export class ContentListModule { }
