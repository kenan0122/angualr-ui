import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ButtonModule } from '../../button/button.module';
import { FormModule } from '../../form/form/form.module';
import { ModalModule } from '../../modal/modal.module';
import { TableListComponent } from './table-list.component';
import { PipeModule } from '../../../pipe/pipe.module';



@NgModule({
  declarations: [TableListComponent],
  exports: [TableListComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    ButtonModule,
    ModalModule,
    FormModule,
    PipeModule
  ]
})
export class TableListModule { }
