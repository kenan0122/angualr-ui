import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'kf-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @Input() visible:boolean = true;
  @Input() width:number = 860;
  @Input() closable: boolean = false;
  @Input() placement: NzDrawerPlacement = 'right';

  @Input() drawerTemplate!: TemplateRef<any>;
  @Input() titleTemplate!: TemplateRef<any>;
  @Input() footerTemplate!: TemplateRef<any>;

  @Output() closeOuter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close(): void {
    this.closeOuter.emit();
  }


}
