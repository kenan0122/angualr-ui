import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';

import { TableCardComponent } from './table-card.component';
import { ButtonModule } from '../../button/button.module';
import { FormModule } from '../../form/form/form.module';

@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    NzCardModule
  ],
  declarations: [TableCardComponent],
  exports: [TableCardComponent],
})
export class TableCardModule { }
