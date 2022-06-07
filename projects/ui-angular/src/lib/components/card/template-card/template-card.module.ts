import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateCardComponent } from './template-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  imports: [
    CommonModule,
    NzCardModule
  ],
  declarations: [TemplateCardComponent],
  exports: [TemplateCardComponent]
})
export class TemplateCardModule { }
