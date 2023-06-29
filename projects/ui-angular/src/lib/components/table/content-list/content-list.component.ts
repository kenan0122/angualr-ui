import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'kf-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() reload!: object;
  /** 表格json数据 */
  @Input() jsonData: any;

  @Input() items:any;
  // 表格字段列表
  @Input() totalCount: number = 0;

  /** 当前页数 */
  @Input() pageNumber: number = 1;
  /** 每页展示的数据条数 */
  @Input() pageSize: number = 10;

  @Input() operateTemplate!: TemplateRef<any>;
  @Input() btnTemplate!: TemplateRef<any>;

  @Output() tableOuter = new EventEmitter();
  @Output() switchOuter = new EventEmitter();

  selectList: object[] = [];

  constructor() { }

  ngOnInit() {

  }

  // 分页
  pageNumberChange(param: number) {
    this.tableOuter.emit({pageNumber: param});
  }

  search() {
    this.pageNumber = 1;
    this.pageNumberChange(this.pageNumber);
  }

  listClick(listItem: any, index: number, event: any) {
    event.stopPropagation();
    event.preventDefault();

    let isExistIndex = this.selectList.findIndex((item: any) => {
      return item === listItem
    });

    if (isExistIndex >= 0) {
      this.selectList.splice(isExistIndex, 1);
    } else {
      this.selectList.push(listItem)
    }

  }

}
