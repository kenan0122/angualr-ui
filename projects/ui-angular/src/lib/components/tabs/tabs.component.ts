import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'kf-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  /** tabs 展示的位置  */
  @Input() nzTabPosition: NzTabPosition = 'top';
  /** 激活的tab项 */
  @Input() selectedIndex: number = 0;
  @Input()
  tabs!: any[];

  @Output() tabsOuter = new EventEmitter();
  @Input()
  tabsTemplate!: TemplateRef<any>;

  constructor() { }

  selectChange() {
    this.tabsOuter.emit(this.selectedIndex)
  }

}
