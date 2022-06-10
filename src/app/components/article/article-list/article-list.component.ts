import { template } from 'projects/ui-angular/src/lib/utils';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { articleTableJson, articleTableStructure } from 'src/app/ui-config/json/articleJson';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  reLoad: any = {};
  tableJsonData?:any;
  tableData?: any;

  constructor() { }

  ngOnInit() {
    this.tableJsonData = articleTableJson;
    const random = Math.ceil(Math.random() * 10);

    const items = articleTableStructure.items.map(item => {
      item.path = item.path + random;
      item.title = item.title + random;
      return item;
    });
    this.tableData = Object.assign(articleTableStructure, {
      items
    });
  }

  add() {

  }

}
