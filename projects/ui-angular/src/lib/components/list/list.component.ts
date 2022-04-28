import { notNullish } from 'projects/ui-angular/src/lib/utils';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AbstractValueAccessor, MakeProvider } from '../input/asbstract-value-accessor';

@Component({
  selector: 'kf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(ListComponent)
})
export class ListComponent extends AbstractValueAccessor implements OnInit {
  @Input() title: string = '';
  @Input() options: Object = {};
  // 根据传过来的字段, 判断为false禁用复选框, true可选复选框
  @Input() disabledProp: string = '';
  @Input() itemSize = 32;
  @Input() maxItemLength = 8;
  @Input() flexDirection: string = 'kf-justify-center';

  @Output() listOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  checked: boolean = false;
  indeterminate: boolean = false;
  disabledCheck: boolean = false;

  setOfCheckedId = new Set<any>();
  optionsLength: number = 0;

  constructor() {
    super();
  }

  override set value(val: any) {
    this._value = val;
    this.setErrorInfo(val);
    this.setOfCheckedId = new Set(val)
    this.textOnChange(this._value);
  }

  ngOnInit() {
    this.optionsLength = Object.keys(this.options).length;
  }

  /** 全选 */
  onAllChecked(checked: boolean): void {
    this.firstLoad = false;
    for (const [_, value] of Object.entries(this.options)) {
      this.updateCheckedSet(value, checked);
    }

    this.refreshCheckedStatus();

    this.listOuter.emit();
  }

  /** 每条数据的选择 */
  onItemChecked(value: any, checked: boolean): void {
    this.firstLoad = false;
    this.updateCheckedSet(value, checked);
    this.refreshCheckedStatus();

    this.listOuter.emit();
  }

  /**
  * 实现自定义校验，写在组件类可介入入参
  * @param control AbstractControl
  */
  override validate(control: AbstractControl): ValidationErrors | null {
    if (control.dirty && this._required) {
      const check = control.value.some((item: any) => notNullish(item))
      if (check) {
        return null;
      } else {
        return { invalid: true };
      }
    }

    return null;
  }

  /** 更新当前页复选框的状态 */
  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }

    this.value = Array.from(this.setOfCheckedId);
  }

  /** 刷新新当前页复选框的状态 */
  refreshCheckedStatus(): void {
    const listOfEnabledData = Object.values(this.options);

    this.checked = listOfEnabledData.every((value) => this.setOfCheckedId.has(value));
    this.indeterminate = listOfEnabledData.some((value) => this.setOfCheckedId.has(value)) && !this.checked;
  }

  onScrolledIndexChange(_: number): void {
  }
}
