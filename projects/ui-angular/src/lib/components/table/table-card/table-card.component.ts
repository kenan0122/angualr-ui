import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'kf-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
})
export class TableCardComponent implements OnInit {
  @Input() reload!: object;
  /** 表格json数据 */
  @Input() jsonData: any;
  /** 表格数据 */
  @Input() data: any;
  @Input() items: any;
  // 表格字段列表
  @Input() totalCount: number = 0;
  /** 当前页数 */
  @Input() pageNumber: number = 1;
  /** 每页展示的数据条数 */
  @Input() pageSize: number = 10;
  @Input() isMultiple: boolean = false;

  @Input() operateTemplate!: TemplateRef<any>;
  @Input() btnTemplate!: TemplateRef<any>;

  @Output() cardOuter = new EventEmitter();
  @Output() switchOuter = new EventEmitter();
  @Output() chooseOuter = new EventEmitter();

  selectList: object[] = [];
  constructor() {}

  ngOnInit() {}

  // 分页
  pageNumberChange(param: number) {
    this.cardOuter.emit({ pageNumber: param });
  }

  cardClick(cardItem: any, event: any) {
    if (cardItem.isFolder) {
      // 跳转到第一页
      this.cardOuter.emit({ pageNumber: 1, cardItem });
    } else {
      event.stopPropagation();
      event.preventDefault();

      let isExistIndex = this.selectList.findIndex((item: any) => {
        return item === cardItem;
      });

      if (isExistIndex >= 0) {
        this.selectList.splice(isExistIndex, 1);
      } else {
        if (this.isMultiple) {
          this.selectList.push(cardItem);
        } else {
          this.selectList = [cardItem];
        }
      }
    }
  }

  search() {
    this.pageNumber = 1;
    this.pageNumberChange(this.pageNumber);
  }
}
