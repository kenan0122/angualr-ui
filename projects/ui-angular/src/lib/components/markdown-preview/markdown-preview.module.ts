import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropDownButtonModule } from '../input/drop-down-button/drop-down-button.module';
import { MarkdownPreviewComponent } from './markdown-preview.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, FormsModule, DropDownButtonModule, IconModule],
  declarations: [MarkdownPreviewComponent],
  exports: [MarkdownPreviewComponent],
})
export class MarkdownPreviewModule {}
