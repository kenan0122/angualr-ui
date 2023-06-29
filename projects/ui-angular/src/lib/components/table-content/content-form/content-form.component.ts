import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { assignNullProps } from '@psylab/utils';
import { getDefaultLayout } from '../../input/input-setting';

@Component({
  selector: 'content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss'],
})
export class ContentFormComponent implements OnInit, AfterViewInit {
  @ViewChild('validateForm') form!: NgForm;

  /** 表单数据 */
  @Input() fields: any[] = [];
  /** 填充数据的dto */
  @Input() inputDto: any;
  @Input() layout = getDefaultLayout();

  @Output() selectOuter = new EventEmitter();
  @Output() initOuter = new EventEmitter();

  constructor() {}

  ngOnInit() {
    assignNullProps(this.layout, getDefaultLayout());
  }

  ngAfterViewInit(): void {
    this.initOuter.emit(this.form);
  }

  selectChange(param: { id: any; name: any }) {
    this.initOuter.emit(this.form);
    this.selectOuter.emit(param);
  }

  textChange(_: string) {
    this.initOuter.emit(this.form);
  }
}
