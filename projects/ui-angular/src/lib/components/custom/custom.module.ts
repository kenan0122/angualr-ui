import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';
import { CustomComponentDirective } from './custom.component.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CustomComponent, CustomComponentDirective],
  exports: [CustomComponent],
})
export class CustomModule {}
