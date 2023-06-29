import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownEditorComponent } from './markdown-editor.component';
import { FormsModule } from '@angular/forms';
import { StyleTemplateComponent } from './compontent/style-template/style-template.component';
import { CustomNavigationComponent } from './compontent/custom-navigation/custom-navigation.component';
import { DropDownButtonModule } from '../input/drop-down-button/drop-down-button.module';
import { HtmlPipe } from './shared/innerhtmlpipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DropDownButtonModule,
    ],
    declarations: [MarkdownEditorComponent, StyleTemplateComponent, CustomNavigationComponent, HtmlPipe],
    exports: [MarkdownEditorComponent]
})
export class MarkdownEditorModule {}
