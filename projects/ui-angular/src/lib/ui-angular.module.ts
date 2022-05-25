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
import { FormModule } from './components/form/form/form.module';
import { ListModule } from './components/list/list.module';
import { ErrorModule } from './components/error/error.module';
import { TableModule } from './components/table/table.module';
import { ModalModule } from './components/modal/modal.module';
import { InputNumberModule } from './components/input/input-number/input-number.module';
import { UploadModule } from './components/upload/upload.module';
import { DrawerModule } from './components/drawer/drawer.module';

const modules = [
  ButtonModule,
  TableModule,
  InputTextModule,
  CheckboxModule,
  CheckboxGroupModule,
  InputTitleModule,
  InputDateModule,
  RadioGroupModule,
  TextareaModule,
  SelectModule,
  FormPageModule,
  FormModule,
  TabsModule,
  ListModule,
  ErrorModule,
  ModalModule,
  InputNumberModule,
  UploadModule,
  DrawerModule
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
