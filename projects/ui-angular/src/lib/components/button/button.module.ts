import { ButtonComponent } from './button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzSpinModule
  ]
})

export class ButtonModule {}
