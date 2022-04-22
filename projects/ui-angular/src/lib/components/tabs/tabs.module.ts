import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TabsComponent } from './tabs.component';


@NgModule({
  declarations: [TabsComponent],
  exports: [TabsComponent],
  imports: [
    CommonModule,
    NzTabsModule
  ]
})
export class TabsModule { }
