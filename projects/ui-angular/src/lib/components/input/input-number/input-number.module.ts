import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number.component';
import { DirectivesModule } from '../../../directives/directives.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorModule } from '../../error/error.module';

@NgModule({
  imports: [
    CommonModule,
    NzInputModule,
    FormsModule,
    ErrorModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  declarations: [InputNumberComponent],
  exports: [InputNumberComponent]
})
export class InputNumberModule { }
