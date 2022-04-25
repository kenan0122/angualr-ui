import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DirectivesModule } from '../../../../directives/directives.module';
import { ErrorModule } from '../../../error/error.module';

@NgModule({
  declarations: [CheckboxGroupComponent],
  exports: [CheckboxGroupComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    DirectivesModule,
    NzCheckboxModule,
    ErrorModule,
    ReactiveFormsModule
  ]
})
export class CheckboxGroupModule { }
