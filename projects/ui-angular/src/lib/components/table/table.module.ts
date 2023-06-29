import { TableListModule } from './table-list/table-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';
import { TableCardModule } from './table-card/table-card.module';
import { ContentListModule } from './content-list/content-list.module';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    RouterModule,
    TableCardModule,
    TableListModule,
    ContentListModule
  ]
})

export class TableModule {}
