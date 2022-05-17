import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'kf-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @Input() drawerTemplate!: TemplateRef<any>;
  @Input() visible:boolean = true;

  @Output() closeOuter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close(): void {
    this.closeOuter.emit();
  }


}
