import { ButtonComponent } from './button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [
    CommonModule
  ]
})

export class ButtonModule {}
