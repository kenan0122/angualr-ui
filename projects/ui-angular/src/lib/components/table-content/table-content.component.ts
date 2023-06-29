import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { TableType } from '../table/table.component';
import { BreadcrumbConfig } from './table-content';

@Component({
  selector: 'kf-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit, OnChanges {
  @Input() isSearch: boolean = false;
  @Input() breadcrumbs?: BreadcrumbConfig[];
  @Input() tableType: TableType = TableType.List;
  @Input() reload!: object;
  /** 表格json数据 */
  @Input() jsonData: any = {};
  @Input() items:any;
  // 表格字段列表
  @Input() totalCount: number = 0;

  /** 当前页数 */
  @Input() pageNumber: number = 1;
  /** 每页展示的数据条数 */
  @Input() pageSize: number = 10;
  // 根据传过来的字段, 判断为false禁用复选框, true可选复选框
  @Input() disabledProp: string = '';

  @Input() operateTemplate!: TemplateRef<any>;
  @Input() btnTemplate!: TemplateRef<any>;

  @Output() tableOuter = new EventEmitter();
  @Output() cardOuter = new EventEmitter();
  @Output() switchOuter = new EventEmitter();
  @Output() chooseOuter = new EventEmitter();

  checked: boolean = false;
  indeterminate: boolean = false;
  disabledCheck: boolean = false;
  setOfCheckedId = new Set<string>();
  // breadcrumbList: BreadcrumbConfig[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // if (!this.isSearch) {
    //   if (!this.breadcrumbItem) {
    //     this.breadcrumbList.push(
    //       {
    //         id: 'all',
    //         title: '全部文件',
    //         path: ''
    //       }
    //     )
    //   } else {
    //     this.breadcrumbList.push(this.breadcrumbItem as BreadcrumbConfig);
    //   }
    //   this.breadcrumbList = this.breadcrumbList.slice(0)
    // }
  }

  ngOnInit(): void {
  }

  switchClick(param: any) {
    this.switchOuter.emit({ column: param.column });
  }

  // 分页
  cardItemChange(param: any) {
    this.cardOuter.emit(param);
  }

  search() {
    this.pageNumber = 1;
    this.tableOuter.emit({pageNumber: this.pageNumber});
  }

  chooseChange(param: any) {
    this.chooseOuter.emit(param);
  }
}
