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
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
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

