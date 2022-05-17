# Overview
展示列表数据, 组件名称: 'kf-form'

## Param
### Input

#### reLoad
类型: object
作用: 重新加载数据, 主要用于批量操作, 重置复选框操作
默认: null

#### jsonData
类型: any
作用: 表格json数据
默认: null

#### data
类型: any
作用: 表格的数据结构
默认: null

#### pageNumber
类型: number
作用: 当前页数

#### pageSize
类型: number
作用: 每页展示的数据条数
默认: 10

#### disabledProp
类型: string
作用: 根据传过来的字段, 判断为false禁用复选框, true可选复选框
默认: ''

#### customTemplate
类型: TemplateRef<any>
作用: 定义操作类的模板引用变量
默认: null

#### btnTemplate
类型: TemplateRef<any>
作用: 定义表格上方的的模板引用变量
默认: null

### Output
#### tableOuter
作用: 表格发生改变时, 进行事件上报
返回: pageNumber(当前页数)

#### switchOuter
作用: switch控件的值发生变化的时候, 进行上报
返回: { column }(当前列的相关数据)

# Sample
```
// html中
<div class="app-table">
  <kf-table
    *ngIf="tableJsonData"
    [data]="tableData"
    [jsonData]="tableJsonData"
    [reLoad]="reLoad"
    [customTemplate]="customTpl"
    [btnTemplate]="btnTpl"
    (switchOuter)="publish($event)"
    (tableOuter)="tableChange($event)"
  >
  </kf-table>

  <ng-template #btnTpl let-ids>
    <div class="grid-column-start">
      <kf-button
        style="width: 100px;"
        (btnOuter)="editOrAdd()">
        添加
      </kf-button>
      <ng-container *ngTemplateOutlet="tableTopTemplate; context: {$implicit: ids}"></ng-container>

    </div>
  </ng-template>

  <ng-template #customTpl  let-model>
    <div class="grid-column-center ">
      <kf-button
        buttonType="button--danger"
        buttonClass="ml-10"
        (btnOuter)="delete(model.data)">
        删除
      </kf-button>
      <kf-button
        buttonType="button--danger"
        buttonClass="ml-10"
        (btnOuter)="editOrAdd(model.data)">
        编辑
      </kf-button>
      <ng-container *ngTemplateOutlet="extraBtnTemplate; context: {$implicit: model.data}"></ng-container>
    </div>
  </ng-template>
</div>
```

```
// ts中
export class AppComponent {
  publish(param: any) {
    
  }

  tableChange(pageNumber: number) {
    // 重新存储当前页数
    this.pageNumber = pageNumber;
    this.getTableStructData(this.tableJsonData.action.dto, this.tableUrl)
  }
}

```
