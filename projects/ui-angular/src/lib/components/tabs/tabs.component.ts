import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'kf-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  /** 激活的tab项 */
  @Input() selectedIndex: number = 0;
  @Input() tabs!: any[];
  @Input() tabsTemplate!: TemplateRef<any>;
  @Input() extraTemplate!: TemplateRef<any>;

  @Output() tabsOuter = new EventEmitter();

  selectIndex = 0;
  constructor(private cdr: ChangeDetectorRef,) { }

  selectChange() {
    this.tabsOuter.emit(this.selectedIndex)
  }

  click(index: number) {
this.selectIndex = index;
  }


  clickNavItem(tab: any, index: NumberFormatStyle): void {
    this.selectIndex = index;
    this.cdr.markForCheck();
  }

}
