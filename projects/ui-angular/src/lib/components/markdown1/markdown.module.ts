import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from './markdown.component';
import { MarkdownEditorResizeSensorComponent } from './resize-sensor/resize-sensor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MarkdownComponent, MarkdownEditorResizeSensorComponent],
  exports: [MarkdownComponent, MarkdownEditorResizeSensorComponent]
})
export class MarkdownModule { }
