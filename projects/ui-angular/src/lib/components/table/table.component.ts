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
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { isUndefinedOrEmptyString } from '../../utils';

interface PagedResult<T> {
  totalCount: number;
  items: T[];
}

type Params = HttpParams | { [param: string]: any };

@Component({
  selector: 'kf-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() api: string = '';
  @Input() reLoad!: object;
  @Input() jsonData: any;

  /** 当前页数 */
  @Input() pageNumber: number = 1;
  /** 每页展示的数据条数 */
  @Input() pageSize: number = 2;
  // 根据传过来的字段, 判断为false禁用复选框, true可选复选框
  @Input() disabledProp: string = '';
  // 发送空数据
  @Input() sendNullsAsQueryParam: boolean = false;

  @Input() customTemplate!: TemplateRef<any>;
  @Input() btnTemplate!: TemplateRef<any>;

  @Output() tableOuter = new EventEmitter();
  @Output() switchOuter = new EventEmitter();

  checked: boolean = false;
  indeterminate: boolean = false;
  disabledCheck: boolean = false;
  setOfCheckedId = new Set<string>();

  /** 数据项列表 */
  data!: any;

  constructor(public http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    // 如果重新加载, 重新渲染列表
    if (changes['reLoad']) {
      if (this.jsonData.multiSelect) {
        this.skipPageNumber(this.setOfCheckedId.size);
        this.resetData();
      } else {
        this.skipPageNumber(1);
      }
    }
  }

  ngOnInit() {
    //this.getData(this.jsonData.action.dto)
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

  private getParams(params: Params, encoder?: HttpParameterCodec): HttpParams {
    const filteredParams = Object.keys(params).reduce((acc, key) => {
      const value = params[key];
      if (isUndefinedOrEmptyString(value)) return acc;
      if (value === null && !this.sendNullsAsQueryParam) return acc;
      acc[key] = value;
      return acc;
    }, {});
    return encoder
      ? new HttpParams({ encoder, fromObject: filteredParams })
      : new HttpParams({ fromObject: filteredParams });
  }

  // 进行api请求
  private getRequest(url: string, dto: any, method: string) {
    this.http
      .request<any>(method, url, {
        ...({ params: dto } && { params: this.getParams(dto) }),
      } as any)
      .subscribe((response) => {
        this.data = response;
      });
  }

  // 获取表格数据
  private getData(dto: any) {
    dto = Object.assign(dto, {
      maxResultCount: this.pageSize,
      skipCount: (this.pageNumber - 1) * this.pageSize
    })
    const url = `${this.api}/${this.jsonData.action.methodName}`;
    this.getRequest(url, dto, 'GET');
  }

  // 分页
  pageNumberChange() {
    this.getData(this.jsonData.action.dto);
  }

  // 重置选中的数据
  resetData() {
    this.setOfCheckedId.clear();
    this.checked = false;
    this.indeterminate = false;
  }

  // 跳转页数
  skipPageNumber(delItemLength: number) {
    // 判断是不是第一页
    if (this.pageNumber > 1) {
      // 判断当前页的数据是否 等于 删除项的个数
      if (this.data.items.length <= delItemLength) {
        // 如果当前页就一项, 直接跳转到前一页
        this.pageNumber = this.pageNumber - 1;
        this.pageNumberChange()
      } else {
        this.pageNumberChange();
      }
    } else {
      this.pageNumberChange();
    }
  }

  search() {
    this.pageNumber = 1;
    this.getData(this.jsonData.action.dto);
  }

  // 排序查询参数
  onQueryParamsChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex, sort } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;

    const index = sortOrder?.lastIndexOf('end');
    const order = sortOrder?.substring(0, index);

    const dto = Object.assign(this.jsonData.action.dto, {
      sorting: `${sortField} ${order}`,
      skipCount: 0
    });

   this.getData(dto)
  }
}
