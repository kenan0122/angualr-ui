import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
// import { UiAngular } from '@kingfar/ui-angular';

import { UiAngular } from 'projects/ui-angular/src/public-api';

import { FieldComponent } from './components/field/field.component';
import { ParadigmComponent } from './components/paradigm/paradigm.component';
import { EditExperimentComponent } from './components/paradigm/edit-experiment/edit-experiment.component';
import { EditParadigmComponent } from './components/paradigm/edit-paradigm/edit-paradigm.component';
import { DimensionComponent } from './components/dimension/dimension.component';
import { PackageComponent } from './components/package/package.component';
import { BlockFromTypeComponent } from './components/block-from-type/block-from-type.component';

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
    BlockFromTypeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UiAngular,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

