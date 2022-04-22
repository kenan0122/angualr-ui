import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    NzTableModule,
    CommonModule,
  ]
})

export class TableModule {}
