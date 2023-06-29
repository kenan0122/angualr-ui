import { IconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button.component';
@NgModule({
  declarations: [IconButtonComponent],
  exports: [IconButtonComponent],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class IconButtonModule { }
