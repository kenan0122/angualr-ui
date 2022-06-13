import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from './markdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MarkdownComponent],
  exports: [MarkdownComponent]
})
export class MarkdownModule { }
