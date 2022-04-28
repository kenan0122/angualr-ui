import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NzSelectModeType, NzSelectSizeType } from 'ng-zorro-antd/select';
import { AbstractValueAccessor, MakeProvider } from '../asbstract-value-accessor';

@Component({
  selector: 'kf-select',
  templateUrl: './select.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(SelectComponent),
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends AbstractValueAccessor implements OnInit {
  @ViewChild('select') select: any;

  @Input() size: NzSelectSizeType = 'large';
  // 是否多选
  @Input() isMulti: boolean = false;
  @Input() title: string = '';
  @Input() options: Object = {};
  // 控件名字
  @Input() name: string = 'select';
  @Input() flexDirection: string = 'kf-justify-center';

  @Output() selectOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  selectMode:NzSelectModeType = 'default';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.selectMode = this.isMulti ? 'multiple' : 'default';
  }

  /**
   * 下拉框发生改变
   * @param param 数字 或 字符串数组 或 数字数组 或 字符串
   */
  selectChange(id: any) {
    this.firstLoad = false;
    this.selectOuter.emit({id, name: this.name});
  }
}
