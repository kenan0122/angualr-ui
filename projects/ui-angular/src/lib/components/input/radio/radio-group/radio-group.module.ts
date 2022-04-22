import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';


@NgModule({
  declarations: [RadioGroupComponent],
  exports: [RadioGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzRadioModule
  ]
})
export class RadioGroupModule { }
