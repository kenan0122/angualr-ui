import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTitleComponent } from './input-title.component';



@NgModule({
  declarations: [InputTitleComponent],
  exports: [InputTitleComponent],
  imports: [
    CommonModule
  ]
})
export class InputTitleModule { }
