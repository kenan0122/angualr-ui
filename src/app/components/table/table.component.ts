import { HttpClient} from '@angular/common/http';
import { Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { template } from 'projects/ui-angular/src/lib/utils';
import { TableBaseService } from 'src/app/ui-config/service/table-base.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [NzMessageService]
})
export  class TableComponent extends TableBaseService implements OnChanges {
  @Input() extraBtnTemplate!: TemplateRef<any>;
  @Input() tableTopTemplate!: TemplateRef<any>;

  @Input() checkIdLen: number = 0;
  @Input() reLoad!: object;

  // 每个表格json的url
  @Input() tableJsonUrl: string = '';
  // 请求表格数据的url
  @Input() tableUrl: string = '';
  // 请求删除的url
  @Input() deleteUrl: string = '';
  // 每个表单json的url
  @Input() formJsonUrl: string = '';
  // 请求表单数据的url
  @Input() formUrl: string = '';
  @Input() saveUrl: string = '';

  @Output() switchOuter = new EventEmitter();

  // 表单json数据
  formsJsonData!: any;
  // 表单数据结构
  inputDto: any;

  constructor(injector: Injector, private message: NzMessageService) {
    super(injector);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 如果重新加载, 重新渲染列表
    if (changes['reLoad']) {
      if (this.tableJsonData) {
        // 如果是多选, 删除之后重新刷新列表
        if (this.tableJsonData.multiSelect) {
          this.skipPageNumber(this.checkIdLen);
        } else {
          // 没有多选框, 删除之后的列表刷新
          this.skipPageNumber(1);
        }
      } else {
        // 没有json数据之前, 请求数据
        this.getTableJsonData(this.tableJsonUrl, this.tableUrl);
      }

    }
  }

  // 删除
  delete(param:any) {
    const urlStr = template(this.deleteUrl, param.id)
    const url = `${this.baseUrl}/${urlStr}`;
    this.http.delete<any>(url)
    .subscribe((response)=>{
      this.message.success('删除成功');
      this.skipPageNumber(1);
    })
  }

  // 发布
  publish(param: any) {
    this.switchOuter.emit(param)
  }

  editOrAdd(param?: any) {
    const url=`${this.baseUrl}/${this.formJsonUrl}`;
    this.http.post<any>(url, {})
    .subscribe((response)=>{
      if (param) {
        // 编辑
        this.getEditData(param.id);
      } else {
        // 添加
        this.inputDto = response.action.dto;
      }
      this.formsJsonData = response;
      this.isVisible = true;
    })
  }

  getEditData(id: any) {
    const urlStr = template(this.formUrl, id)
    const url = `${this.baseUrl}/${urlStr}`;

    this.http.get<object>(url).subscribe (response =>{
      this.inputDto = response;
    })
  }


  closeModal(param: any) {
    this.isVisible = false;
    // 点击确定, 进行数据请求
    if (param.modal) {
      const url=`${this.baseUrl}/${this.saveUrl}`;
      this.http.post<any>(url, {...this.inputDto})
      .subscribe((response)=>{
        // 重新加载列表数据
        this.getTableStructData(this.tableJsonData.action.dto, this.tableUrl)
      })
    }
  }

  // 翻页, 排序
  tableChange(pageNumber: number) {
    // 重新存储当前页数
    this.pageNumber = pageNumber;
    this.getTableStructData(this.tableJsonData.action.dto, this.tableUrl)
  }

  // 跳转页数
  skipPageNumber(delItemLength: number) {
    // 判断是不是第一页
    if (this.pageNumber > 1) {
      // 判断当前页的数据是否 等于 删除项的个数
      if (this.tableData.items.length <= delItemLength) {
        // 如果当前页就一项, 直接跳转到前一页
        this.pageNumber = this.pageNumber - 1;
       this.tableChange(this.pageNumber)
      } else {
        this.tableChange(this.pageNumber);
      }
    } else {
      this.tableChange(this.pageNumber);
    }
  }

}
