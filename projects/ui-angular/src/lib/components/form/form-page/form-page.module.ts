import { ButtonModule } from './../../button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { TabsModule } from '../../tabs/tabs.module';
import { FormModule } from '../form/form.module';


@NgModule({
  declarations: [FormPageComponent],
  exports: [FormPageComponent],
  imports: [
    CommonModule,
    TabsModule,
    ButtonModule,
    FormModule
  ]
})
export class FormPageModule { }
