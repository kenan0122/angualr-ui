import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum SaveType {
  Add,
  Copy,
  Rename
}
@Component({
  selector: 'kf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() width: string = '520px';
  @Input() isVisible: boolean = false;
  @Input() jsonData: any;
  @Input() inputDto: any;
  @Input() displayFooter: boolean = false;
  @Input() infoList: any[] = [];
  @Input() saveType:SaveType = SaveType.Add;

  @Output() modalOuter = new EventEmitter();

  readonly error$ = new BehaviorSubject(true);

  constructor() { }

  ngOnInit() {
  }

  handleCancel(): void {
    this.modalOuter.emit({modal: false, saveType: this.saveType});
  }

  handleOk(): void {
    this.modalOuter.emit({modal: true, saveType: this.saveType});
  }

  saveForm(param: any) {
    if(param.modal) {
      this.handleOk();
    } else {
      this.handleCancel();
    }
  }
}
