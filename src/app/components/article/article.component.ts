import { Component, OnInit } from '@angular/core';
import { articleTableJson, articleTableStructure } from 'src/app/ui-config/json/articleJson';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  reLoad: any = {};
  tableJsonData?:any;
  tableData?: any;

  constructor() { }

  ngOnInit() {
    this.tableJsonData = articleTableJson;
    this.tableData = articleTableStructure;
    console.log(777, this.tableData, this.tableJsonData)
  }

  add() {

  }

}
