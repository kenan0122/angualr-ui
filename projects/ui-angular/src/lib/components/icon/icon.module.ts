import { InnerHtmlPipe } from './../../pipe/inner-html.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [IconComponent],
  exports: [IconComponent]
})
export class IconModule { }
