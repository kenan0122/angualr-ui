import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { assignNullProps } from '@psylab/utils';
import { NzSelectModeType, NzSelectSizeType } from 'ng-zorro-antd/select';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../asbstract-value-accessor';
import { getDefaultLayout, getSelectSetting } from '../input-setting';

@Component({
  selector: 'kf-select',
  templateUrl: './select.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(SelectComponent),
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends AbstractValueAccessor implements OnInit {
  @ViewChild('select') select: any;

  @Input() options: object | undefined;
  @Input() setting: any = getSelectSetting();
  @Input() layout: any = getDefaultLayout('select');

  @Output() selectOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  selectMode: NzSelectModeType = 'default';

  constructor() {
    super();
  }

  ngOnInit(): void {
    assignNullProps(this.setting, getSelectSetting());
    assignNullProps(this.layout, getDefaultLayout('select'));

    this.selectMode = this.setting.isMulti ? 'multiple' : 'default';
  }

  /**
   * 下拉框发生改变
   * @param param 数字 或 字符串数组 或 数字数组 或 字符串
   */
  selectChange(id: any) {
    this.firstLoad = false;
    this.selectOuter.emit({ id });
  }

  // But for angular 7 or above, you need to put an empty function to keep data unsorted.
  //change keyvalue's order, 不能删除
  unsorted() {
    return 0;
  }
}
