import { Component, Injector, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BreadcrumbConfig } from 'projects/ui-angular/src/lib/components/table-content/table-content';
import {
  cardTableJson,
  cardTableStructure,
} from 'src/app/ui-config/json/cardJson';
import { TableBaseService } from 'src/app/ui-config/service/table-base.service';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
})
export class TableCardComponent extends TableBaseService implements OnInit {
  reload: object = {};
  breadcrumbItem?: BreadcrumbConfig;
  isSearch: boolean = false;

  constructor(injector: Injector, private message: NzMessageService) {
    super(injector);
  }

  ngOnInit() {
    this.reLoadData();
  }

  // 翻页, 排序
  tableChange(param: any) {
    // 重新存储当前页数
    this.pageNumber = param.pageNumber;
    this.isSearch = true;
    this.reLoadData();
  }

  cardItemChange(param: any) {
    this.breadcrumbItem = param.cardItem;
    this.isSearch = false;
    // 重新存储当前页数
    this.pageNumber = param.pageNumber;
    this.reLoadData();
}

  reLoadData() {
    this.tableJsonData = cardTableJson;
    const random = Math.ceil(Math.random() * 10);

    const items = cardTableStructure.items.map((item) => {
      item.slug = item.slug + random;
      item.name = item.name + random;
      return item;
    });
    this.tableData = Object.assign(cardTableStructure, {
      items,
    });

    this.reload = {};
  }

  chooseChange(param: any) {
  }
}
