import { TemplateCardModule } from './../../card/template-card/template-card.module';
import { QuestionCoverModule } from './../../question-cover/question-cover.module';
import { InputNumberModule } from '../../input/input-number/input-number.module';
import { ListModule } from '../../list/list.module';
import { RadioGroupModule } from '../../input/radio/radio-group/radio-group.module';
import { DirectivesModule } from '../../../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { InputTitleModule } from '../../input/input-title/input-title.module';
import { SelectModule } from '../../input/select/select.module';
import { TextareaModule } from '../../input/textarea/textarea.module';
import { InputTextModule } from '../../input/input-text/input-text.module';
import { InputDateModule } from '../../input/input-date/input-date.module';
import { CheckboxGroupModule } from '../../input/checkbox/checkbox-group/checkbox-group.module';
import { PipeModule } from '../../../pipe/pipe.module';



@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
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
    ListModule,
    InputNumberModule,
    PipeModule,
    QuestionCoverModule,
    TemplateCardModule
  ]
})
export class FormModule { }
