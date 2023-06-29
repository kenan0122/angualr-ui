import { FileInputModule } from './../input/file-input/file-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TabsComponent } from './tabs.component';
import { MarkdownEditorModule } from '../markdown-editor/markdown-editor.module';
import { ButtonModule } from '../button/button.module';


@NgModule({
  declarations: [TabsComponent],
  exports: [TabsComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    MarkdownEditorModule,
    FileInputModule,
    ButtonModule
  ]
})
export class TabsModule { }
