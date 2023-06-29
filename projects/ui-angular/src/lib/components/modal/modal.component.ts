import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { assignNullProps } from '@psylab/utils';
import { BehaviorSubject } from 'rxjs';
import { FormBtn } from '../form/form-page/form-page.component';
import { getDefaultLayout } from '../input/input-setting';

export enum ModalSaveType {
  Add,
  Copy,
  Rename,
  Move,
  Editor,
}
@Component({
  selector: 'kf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() width: string = '520px';
  @Input() isVisible: boolean = false;
  @Input() jsonData: any;
  @Input() inputDto: any;
  @Input() displayFooter: boolean = false;
  @Input() infoList: any[] = [];
  @Input() saveType: ModalSaveType = ModalSaveType.Add;
  @Input() displayName: string = '添加/修改';
  @Input() formClass: string = '';
  @Input() layout = getDefaultLayout();
  @Input() kfFooter?: TemplateRef<any>;
  /** 表单按钮的隐藏/显示 */
  @Input()
  visibleBtn: FormBtn = {
    cancel: true,
    promise: true,
  };

  @Output() modalOuter = new EventEmitter();
  @Output() fileArrayOuter = new EventEmitter();
  @Output() fileOuter = new EventEmitter();
  @Output() initOuter = new EventEmitter();

  readonly error$ = new BehaviorSubject(true);
  formControllerValid: boolean = true;

  constructor() {}

  ngOnInit() {
    assignNullProps(this.layout, getDefaultLayout());
  }

  initFormData(param: NgForm) {
    this.formControllerValid = param.form.valid;
    this.initOuter.emit(param);
  }

  handleCancel(): void {
    this.modalOuter.emit({ modal: false, saveType: this.saveType });
  }

  handleOk(): void {
    this.modalOuter.emit({ modal: true, saveType: this.saveType });
  }

  saveForm(param: any) {
    if (param.modal) {
      this.handleOk();
    } else {
      this.handleCancel();
    }
  }

  fileArrayChanged(param: any) {
    this.fileArrayOuter.emit(param)
  }

  fileChanged(param: any) {
    this.fileOuter.emit(param)
  }
}
