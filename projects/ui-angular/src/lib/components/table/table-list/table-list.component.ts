import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { getTimeShow } from '../../../utils';

@Component({
  selector: 'kf-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnChanges {
  @Input() reload!: object;
  /** 表格json数据 */
  @Input() jsonData: any;
  @Input() items: any;
  // 表格字段列表
  @Input() totalCount: number = 0;

  /** 当前页数 */
  @Input() pageNumber: number = 1;
  /** 每页展示的数据条数 */
  @Input() pageSize: number = 10;
  // 根据传过来的字段, 判断为false禁用复选框, true可选复选框
  @Input() disabledProp: string = '';
  @Input() onlyField: string = 'id';

  @Input() operateTemplate!: TemplateRef<any>;
  @Input() btnTemplate!: TemplateRef<any>;
  @Input() tdFirstTemplate!: TemplateRef<any>;
  @Input() tdCustomTemplate!: TemplateRef<any>;
  //是否可以更新 如果不可以直接隐藏(不采用disabled 怕用户通过代码更改)
  @Input() hasUpdateAuth: boolean = true;
  // 每行的高度
  @Input() trHeight: number = 65;
  @Input() isShowTrBg: boolean = false;

  @Output() tableOuter = new EventEmitter();
  @Output() switchOuter = new EventEmitter();
  @Output() trClick = new EventEmitter();
  @Output() checkedChange = new EventEmitter();

  checked: boolean = false;
  indeterminate: boolean = false;
  disabledCheck: boolean = false;
  setOfCheckedId = new Set<any>();
  selectedTrIndex: number | undefined;

  constructor(private injector: Injector) {}

  ngOnChanges(changes: SimpleChanges): void {
    // 如果重新加载, 重新渲染列表
    if (changes['reload']) {
      if (this.jsonData.multiSelect) {
        this.resetData();
      }
    }
  }

  trackByItems(index: number, item: any): number {
    return item[this.onlyField];
  }
  trackByColumns(index: number, item: any): number {
    return item.key;
  }

  getTimeShow(date: string) {
    if (date) {
      return getTimeShow(date);
    }

    return '';
  }

  onAllChecked(checked: boolean) {
    this.items
      .filter((item: any) => !item[this.disabledProp])
      .forEach((item: any) =>
        this.updateCheckedSet(item[this.onlyField], checked)
      );
    this.refreshCheckedStatus();
    this.checkedChange.emit(this.setOfCheckedId);
  }

  onItemChecked(id: any, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
    this.checkedChange.emit(this.setOfCheckedId);
  }

  /** 更新当前页复选框的状态 */
  private updateCheckedSet(id: any, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  /** 刷新新当前页复选框的状态 */
  private refreshCheckedStatus(): void {
    const listOfEnabledData = this.items.filter(
      (item: any) => !item[this.disabledProp]
    );

    this.checked = listOfEnabledData.every((item: any) =>
      this.setOfCheckedId.has(item[this.onlyField])
    );
    this.indeterminate =
      listOfEnabledData.some((item: any) =>
        this.setOfCheckedId.has(item[this.onlyField])
      ) && !this.checked;
  }

  private findKey(obj: any, value: any, compare = (a: any, b: any) => a === b) {
    return Object.keys(obj).find((k) => compare(obj[k], value));
  }

  /**
   * @param item 要转换的数据
   * @param options 数据集合
   * @returns 转换后的文本
   */
  lg(item: any, options: any) {
    return this.findKey(options, item);
  }

  switchClick(data: any, column: any, state: any) {
    Object.keys(column.dto).forEach((key) => {
      const value = key === state ? !data[key] : data[key];
      column.dto[key] = value;
    });

    this.switchOuter.emit({ column });
  }

  // 分页
  pageNumberChange(param: number) {
    this.tableOuter.emit({ pageNumber: param });
  }

  // 重置选中的数据
  resetData() {
    this.setOfCheckedId.clear();
    this.checked = false;
    this.indeterminate = false;
  }

  sortOderChange(sortField: string, sortOrder: string | null) {
    const index = sortOrder?.lastIndexOf('end');
    const order = sortOrder?.substring(0, index);

    if (order) {
      this.jsonData.action.dto.sorting = `${sortField} ${order}`;
      //this.jsonData.action.dto.sortingType = order;
      this.pageNumber = 1;
      this.pageNumberChange(this.pageNumber);
    }
  }

  navigate(url: string, e: MouseEvent): void {
    e.preventDefault();
    this.injector.get(Router).navigateByUrl(url);
  }

  itemClick(index: number, param: any, event: any) {
    event.stopPropagation();
    event.preventDefault();

    this.selectedTrIndex = index;
    this.trClick.emit(param);
  }

  search() {
    this.pageNumber = 1;
    this.pageNumberChange(this.pageNumber);
  }
}
