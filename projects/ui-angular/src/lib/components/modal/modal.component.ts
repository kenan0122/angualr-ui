import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() jsonData: any;
  @Input() inputDto: any;
  @Input() displayFooter: boolean = false;
  @Input() infoList: any[] = [];

  @Output() modalOuter = new EventEmitter();

  readonly error$ = new BehaviorSubject(true);

  constructor() { }

  ngOnInit() {
  }

  handleCancel(): void {
    this.modalOuter.emit({modal: false});
  }

  handleOk(): void {
    this.modalOuter.emit({modal: true});
  }

  saveForm(param: any) {
    if(param.modal) {
      this.handleOk();
    } else {
      this.handleCancel();
    }
  }
}
