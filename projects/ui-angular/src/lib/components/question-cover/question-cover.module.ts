import { RadioGroupModule } from './../input/radio/radio-group/radio-group.module';
import { IconButtonModule } from './../icon-button/icon-button.module';
import { IconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCoverComponent } from './question-cover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from '../input/input-text/input-text.module';
import { InputTitleModule } from '../input/input-title/input-title.module';
import { SelectModule } from '../input/select/select.module';
import { TextareaModule } from '../input/textarea/textarea.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { StarComponent } from './star/star.component';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTitleModule,
    SelectModule,
    TextareaModule,
    InputTextModule,
    NzRadioModule,
    IconModule,
    IconButtonModule,
    PipeModule,
    RadioGroupModule
  ],
  declarations: [
    QuestionCoverComponent,
    StarComponent
  ],
  exports: [
    QuestionCoverComponent
  ]
})
export class QuestionCoverModule { }
