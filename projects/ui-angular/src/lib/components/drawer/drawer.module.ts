import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { DrawerComponent } from './drawer.component';

@NgModule({
  declarations: [DrawerComponent],
  exports: [DrawerComponent],
  imports: [
    CommonModule,
    NzDrawerModule
  ],
})
export class DrawerModule { }
