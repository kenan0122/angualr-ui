import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DirectivesModule } from '../../../../directives/directives.module';

@NgModule({
  declarations: [CheckboxGroupComponent],
  exports: [CheckboxGroupComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    DirectivesModule,
    ReactiveFormsModule
  ]
})
export class CheckboxGroupModule { }
