import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

export enum TableType {
  List,
  Card,
  ContentList
}
@Component({
  selector: 'kf-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableType: TableType = TableType.List;
  @Input() reload!: object;
  /** 表格json数据 */
  @Input() jsonData: any;
  /** 表格数据 */
  @Input() data: any;
  @Input() items:any;
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

  @Output() tableOuter = new EventEmitter();
  @Output() cardOuter = new EventEmitter();
  @Output() switchOuter = new EventEmitter();
  @Output() chooseOuter = new EventEmitter();
  @Output() trClick = new EventEmitter();
  @Output() checkedChange = new EventEmitter();
  @ViewChild('tableChild') tableChild: any;


  constructor() {}
  ngOnInit(): void {
  }

  switchClick(param: any) {
    this.switchOuter.emit({ column: param.column });
  }

  // 分页
  pageNumberChange(param: any) {
    this.tableOuter.emit({pageNumber: param.pageNumber});
  }

  cardItemChange(param: any) {
    this.cardOuter.emit(param);
  }

  search() {
    this.pageNumber = 1;
    this.pageNumberChange({pageNumber: this.pageNumber});
  }

  switch(tableType: TableType) {
    this.tableType = tableType === TableType.Card ? TableType.List : TableType.Card;
  }

  chooseChange(param: any) {
    this.chooseOuter.emit(param);
  }

  itemClick(param: any) {
    this.trClick.emit(param);
  }

  checkedChanged(ids: Set<any>) {
    this.checkedChange.emit(ids);
  }
}
