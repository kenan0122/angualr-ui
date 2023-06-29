import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
// import { UiAngular } from '@kingfar/ui-angular';

import { UiAngular } from 'projects/ui-angular/src/public-api';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { FieldComponent } from './components/field/field.component';
import { ParadigmComponent } from './components/paradigm/paradigm.component';
import { EditExperimentComponent } from './components/paradigm/edit-experiment/edit-experiment.component';
import { EditParadigmComponent } from './components/paradigm/edit-paradigm/edit-paradigm.component';
import { DimensionComponent } from './components/dimension/dimension.component';
import { PackageComponent } from './components/package/package.component';
import { BlockFromTypeComponent } from './components/block-from-type/block-from-type.component';
import { ArticleComponent } from './components/article/article.component';
import { PreviewComponent } from './components/article/preview/preview.component';
import { CustomComponent } from './components/custom/custom.component';
import { ParadigmListComponent } from './components/paradigm/paradigm-list/paradigm-list.component';
import { ArticleListComponent } from './components/article/article-list/article-list.component';
import { MarkdownPreviewComponent } from './components/markdown-preview/markdown-preview.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { BlogComponent } from './components/blog/blog.component';
import { GlobalErrorhandler } from './ui-config/error/global-error';
import { GrantParadigmComponent } from './components/package/grant-paradigm/grant-paradigm.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { MarkdownEditorComponent1 } from './components/markdown-editor/markdown-editor.component';
import { ThumbnailTestComponent } from './components/thumbnail-test/thumbnail-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    FieldComponent,
    ParadigmComponent,
    EditExperimentComponent,
    EditParadigmComponent,
    DimensionComponent,
    PackageComponent,
    BlockFromTypeComponent,
    ArticleComponent,
    PreviewComponent,
    CustomComponent,
    ParadigmListComponent,
    ArticleListComponent,
    MarkdownPreviewComponent,
    MarkdownEditorComponent1,
    TableCardComponent,
    BlogComponent,
    GrantParadigmComponent,
    FileInputComponent,
    ThumbnailTestComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UiAngular,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    NzSwitchModule,
    NzTreeViewModule,
    NzTreeModule,
    NzTabsModule,
    NzDropDownModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorhandler }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
