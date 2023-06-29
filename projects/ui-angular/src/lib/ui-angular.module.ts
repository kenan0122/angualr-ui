import { TemplateCardModule } from './components/card/template-card/template-card.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UiAngularComponent } from './ui-angular.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from './components/button/button.module';
import { InputTextModule } from './components/input/input-text/input-text.module';
import { CheckboxModule } from './components/input/checkbox/checkbox/checkbox.module';
import { CheckboxGroupModule } from './components/input/checkbox/checkbox-group/checkbox-group.module';
import { InputTitleModule } from './components/input/input-title/input-title.module';
import { InputDateModule } from './components/input/input-date/input-date.module';
import { RadioGroupModule } from './components/input/radio/radio-group/radio-group.module';
import { TextareaModule } from './components/input/textarea/textarea.module';
import { SelectModule } from './components/input/select/select.module';
import { FormPageModule } from './components/form/form-page/form-page.module';
import { TabsModule } from './components/tabs/tabs.module';
import { FormModule } from './components/form/form/form.module';
import { ListModule } from './components/list/list.module';
import { ErrorModule } from './components/error/error.module';
import { TableModule } from './components/table/table.module';
import { ModalModule } from './components/modal/modal.module';
import { InputNumberModule } from './components/input/input-number/input-number.module';
import { UploadModule } from './components/upload/upload.module';
import { DrawerModule } from './components/drawer/drawer.module';
import { QuestionCoverModule } from './components/question-cover/question-cover.module';
import { IconButtonModule } from './components/icon-button/icon-button.module';
import { IconModule } from './components/icon/icon.module';
import { MarkdownEditorModule } from './components/markdown-editor/markdown-editor.module';
import { TableContentModule } from './components/table-content/table-content.module';
import { CustomModule } from './components/custom/custom.module';
import { TableCardModule } from './components/table/table-card/table-card.module';
import { TableListModule } from './components/table/table-list/table-list.module';
import { ContentListModule } from './components/table/content-list/content-list.module';
import { FileInputModule } from './components/input/file-input/file-input.module';
import { MarkdownPreviewModule } from './components/markdown-preview/markdown-preview.module';
import { PipeModule } from './pipe/pipe.module';
import { DirectivesModule } from './directives/directives.module';
import { FileInputArrayModule } from './components/input/file-input-array/file-input-array.module';
import { AddButtonModule } from './components/add-button/add-button.module';
import { DropDownButtonModule } from './components/input/drop-down-button/drop-down-button.module';

import { ThumbnailModule } from './components/thumbnail/thumbnail.module';

const modules = [
  ButtonModule,
  TableModule,
  InputTextModule,
  CheckboxModule,
  CheckboxGroupModule,
  InputTitleModule,
  InputDateModule,
  RadioGroupModule,
  TextareaModule,
  SelectModule,
  FormPageModule,
  FormModule,
  TabsModule,
  ListModule,
  ErrorModule,
  ModalModule,
  InputNumberModule,
  UploadModule,
  DrawerModule,
  QuestionCoverModule,
  IconModule,
  IconButtonModule,
  TemplateCardModule,
  MarkdownEditorModule,
  MarkdownPreviewModule,
  TableContentModule,
  CustomModule,
  TableCardModule,
  TableListModule,
  ContentListModule,
  FileInputModule,
  PipeModule,
  DirectivesModule,
  FileInputArrayModule,
  AddButtonModule,
  DropDownButtonModule,
  ThumbnailModule,
];
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...modules],
  declarations: [UiAngularComponent],
  exports: [UiAngularComponent, ...modules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiAngular {}
