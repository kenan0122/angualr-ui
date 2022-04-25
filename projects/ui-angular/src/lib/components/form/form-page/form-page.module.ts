import { ButtonModule } from './../../button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { TabsModule } from '../../tabs/tabs.module';
import { FromModule } from '../from/from.module';


@NgModule({
  declarations: [FormPageComponent],
  exports: [FormPageComponent],
  imports: [
    CommonModule,
    TabsModule,
    ButtonModule,
    FromModule
  ]
})
export class FormPageModule { }
