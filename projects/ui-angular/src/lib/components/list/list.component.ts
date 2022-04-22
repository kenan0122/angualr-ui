import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
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
  // 根据传过来的字段, 判断为false禁用复选框, true可选复选框
  @Input() disabledProp: string = '';
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

  constructor() {
    super();
  }

  ngOnInit() {
  }

  /** 全选 */
  onAllChecked(checked: boolean): void {
    this.value
      .filter((item:any) => !item[this.disabledProp])
      .forEach(({ value }) => this.updateCheckedSet(value, checked));
    this.refreshCheckedStatus();
  }

  /** 每条数据的选择 */
  onItemChecked(value: any, checked: boolean): void {
    this.updateCheckedSet(value, checked);
    this.refreshCheckedStatus();
  }

  /**
  * 实现自定义校验，写在组件类可介入入参
  * @param control AbstractControl
  */
  override validate(control: AbstractControl): ValidationErrors | null {
    if (control.dirty && this._required) {
      const check = control.value.some((item: any) => item.checked)
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
  }

  /** 刷新新当前页复选框的状态 */
  refreshCheckedStatus(): void {
    const listOfEnabledData = this.value.filter((item: any) => !item[this.disabledProp]);

    this.checked = listOfEnabledData.every(({ value }) => this.setOfCheckedId.has(value));
    this.indeterminate = listOfEnabledData.some(({ value }) => this.setOfCheckedId.has(value)) && !this.checked;
  }
}
