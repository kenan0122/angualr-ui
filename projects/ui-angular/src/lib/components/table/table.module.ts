
import { ButtonModule } from './../button/button.module';
import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form/form/form.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    NzTableModule,
    CommonModule,
    NzSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    ButtonModule,
    ModalModule,
    FormModule
  ]
})

export class TableModule {}
