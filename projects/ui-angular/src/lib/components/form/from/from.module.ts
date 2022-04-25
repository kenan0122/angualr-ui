import { ListModule } from './../../list/list.module';
import { RadioGroupModule } from './../../input/radio/radio-group/radio-group.module';
import { DirectivesModule } from '../../../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FromComponent } from './from.component';
import { InputTitleModule } from '../../input/input-title/input-title.module';
import { SelectModule } from '../../input/select/select.module';
import { TextareaModule } from '../../input/textarea/textarea.module';
import { InputTextModule } from '../../input/input-text/input-text.module';
import { InputDateModule } from '../../input/input-date/input-date.module';
import { CheckboxGroupModule } from '../../input/checkbox/checkbox-group/checkbox-group.module';



@NgModule({
  declarations: [FromComponent],
  exports: [FromComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTitleModule,
    SelectModule,
    TextareaModule,
    InputTextModule,
    InputDateModule,
    CheckboxGroupModule,
    RadioGroupModule,
    DirectivesModule,
    ListModule
  ]
})
export class FromModule { }
