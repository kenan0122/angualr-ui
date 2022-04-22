
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UiAngularComponent } from './ui-angular.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from './components/button/button.module';
import { InputTextModule } from './components/input/input-text/input-text.module';
import { CheckboxModule } from './components/input/checkbox/checkbox/checkbox.module';
import { CheckboxGroupModule } from './components/input/checkbox/checkbox-group/checkbox-group.module';
import { InputTitleModule } from './components/input/input-title/input-title.module';
import { InputDateModule } from './components/input/input-date/input-date.module';
import { RadioGroupModule } from './components/input/radio/radio-group/radio-group.module';
import { TextareaModule } from './components/input/textarea/textarea.module';
import { SelectModule } from './components/input/select/select.module';
import { FormPageModule } from './components/form/form-page/form-page.module';
import { TabsModule } from './components/tabs/tabs.module';
import { FromModule } from './components/form/from/from.module';
import { ListModule } from './components/list/list.module';


const modules = [
  ButtonModule,
  // TableModule,
  InputTextModule,
  CheckboxModule,
  CheckboxGroupModule,
  InputTitleModule,
  InputDateModule,
  RadioGroupModule,
  TextareaModule,
  SelectModule,
  FormPageModule,
  FromModule,
  TabsModule,
  ListModule


  // DirectivesModule
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules
  ],
  declarations: [
    UiAngularComponent
  ],
  exports: [
    UiAngularComponent,
    ...modules
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UiAngular { }
