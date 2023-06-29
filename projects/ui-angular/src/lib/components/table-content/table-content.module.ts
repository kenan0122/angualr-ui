import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { TableModule } from '../table/table.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { TableContentComponent } from './table-content.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { InputTextModule } from '../input/input-text/input-text.module';
import { SelectModule } from '../input/select/select.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ContentBreadcrumbComponent } from './content-breadcrumb/content-breadcrumb.component';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    PipeModule
  ],
  declarations: [
    TableContentComponent,
    ContentFormComponent,
    ContentBreadcrumbComponent,
  ],
  exports: [TableContentComponent],
})
export class TableContentModule {}
