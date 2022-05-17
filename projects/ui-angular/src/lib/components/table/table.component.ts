import {
  HttpClient,
  HttpParameterCodec,
  HttpParams,
} from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'kf-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() reLoad!: object;
  /** 表格json数据 */
  @Input() jsonData: any;
  /** 表格数据 */
  @Input() data: any;

  /** 当前页数 */
  @Input() pageNumber: number = 1;
  /** 每页展示的数据条数 */
  @Input() pageSize: number = 2;
  // 根据传过来的字段, 判断为false禁用复选框, true可选复选框
  @Input() disabledProp: string = '';

  @Input() customTemplate!: TemplateRef<any>;
  @Input() btnTemplate!: TemplateRef<any>;

  @Output() tableOuter = new EventEmitter();
  @Output() switchOuter = new EventEmitter();

  checked: boolean = false;
  indeterminate: boolean = false;
  disabledCheck: boolean = false;
  setOfCheckedId = new Set<string>();

  constructor(public http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    // 如果重新加载, 重新渲染列表
    if (changes['reLoad']) {
      if (this.jsonData.multiSelect) {
        this.resetData();
      }
    }
  }

  onAllChecked(checked: boolean) {
    this.data.items
      .filter((item: any) => !item[this.disabledProp])
      .forEach((item: any) => this.updateCheckedSet(item.id, checked));
    this.refreshCheckedStatus();
  }

  onItemChecked(id: any, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
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
    const listOfEnabledData = this.data.items.filter(
      (item: any) => !item[this.disabledProp]
    );

    this.checked = listOfEnabledData.every((item: any) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      listOfEnabledData.some((item: any) => this.setOfCheckedId.has(item.id)) &&
      !this.checked;
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
    this.tableOuter.emit(param);
  }

  // 重置选中的数据
  resetData() {
    this.setOfCheckedId.clear();
    this.checked = false;
    this.indeterminate = false;
  }

  search() {
    this.pageNumber = 1;
    this.pageNumberChange(this.pageNumber);
  }


  sortOderChange(sortField: string, sortOrder: string | null) {
    const index = sortOrder?.lastIndexOf('end');
    const order = sortOrder?.substring(0, index);

    this.jsonData.action.dto.sortingKey = sortField;
    this.jsonData.action.dto.sortingType = order;
    this.search();
  }
}
