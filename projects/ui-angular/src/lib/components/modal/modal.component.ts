import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() jsonData: any;
  @Input() inputDto: any;

  @Output() modalOuter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleCancel(): void {
    this.modalOuter.emit({modal: false});
  }

  handleOk(): void {
    this.modalOuter.emit({modal: true});
  }


}