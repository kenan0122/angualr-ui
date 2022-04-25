import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';
import { ErrorModule } from '../../../error/error.module';


@NgModule({
  declarations: [RadioGroupComponent],
  exports: [RadioGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule,
    NzRadioModule
  ]
})
export class RadioGroupModule { }
