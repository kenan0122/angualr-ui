import { JsonUrlDto } from './../../ui-config/type/base';
import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { template } from 'projects/ui-angular/src/lib/utils';
import { TableBaseService } from 'src/app/ui-config/service/table-base.service';
import { ErrorInfo } from 'src/app/ui-config/type/errror';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [NzMessageService],
})
export class TableComponent extends TableBaseService implements OnChanges {
  @Input() extraBtnTemplate!: TemplateRef<any>;
  @Input() tableTopTemplate!: TemplateRef<any>;

  @Input() isEnableAddBtn: boolean = true;
  @Input() isEnableEditBtn: boolean = true;
  @Input() checkIdLen: number = 0;
  @Input() reLoad!: object;
  @Input() jsonUrlObj!: JsonUrlDto;

  @Output() switchOuter = new EventEmitter();

  // 表单json数据
  formsJsonData!: any;
  // 表单数据结构
  inputDto: any;
  errorList: ErrorInfo[] = [];

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
        this.getTableJsonData(
          this.jsonUrlObj.tableJsonUrl,
          this.jsonUrlObj.tableDataUrl
        );
      }
    }
  }

  reLoadData() {
    this.getTableStructData(
      this.tableJsonData.action.dto,
      this.jsonUrlObj.tableDataUrl
    );
  }

  // 删除
  delete(param: any) {
    const urlStr = template(this.jsonUrlObj.deleteJsonUrl, param.id);
    const url = `${this.baseUrl}${urlStr}`;
    this.http.delete<any>(url).subscribe((response) => {
      this.message.success('删除成功');
      this.skipPageNumber(1);
    });
  }

  // 发布
  publish(param: any) {
    this.switchOuter.emit(param);
  }

  add() {
    this.requestFormJson().subscribe((response) => {
      this.inputDto = response.action.dto;
      this.formsJsonData = response;
      this.isVisibleModal = true;
    });
  }

  edit(param: any) {
    this.requestFormJson().subscribe((response) => {
      this.getEditData(param.id);
      this.formsJsonData = response;
      this.isVisibleModal = true;
    });
  }

  requestFormJson() {
    const url = `${this.baseUrl}${this.jsonUrlObj.formJsonUrl}`;
    const api = this.http.post<any>(url, {});

    return api;
  }

  getEditData(id: any) {
    const urlStr = template(this.jsonUrlObj.formDataUrl, id);
    const url = `${this.baseUrl}${urlStr}`;

    this.http.get<object>(url).subscribe((response) => {
      this.inputDto = response;
    });
  }

  closeModal(param: any) {
    // 点击确定, 进行数据请求
    if (param.modal) {
      const url = `${this.baseUrl}${this.jsonUrlObj.saveUrl}`;
      this.http.post<any>(url, { ...this.inputDto }).subscribe((response) => {
        if (response.success) {
          this.isVisibleModal = false;
          this.errorList = [];
          this.reLoadData();
        } else {
          this.errorList = response.error ? response.error.errorMessage : [];
        }
      });
    } else {
      this.isVisibleModal = false;
    }
  }

  // 翻页, 排序
  tableChange(pageNumber: number) {
    // 重新存储当前页数
    this.pageNumber = pageNumber;
    this.reLoadData();
  }

  // 跳转页数
  skipPageNumber(delItemLength: number) {
    // 判断是不是第一页
    if (this.pageNumber > 1) {
      // 判断当前页的数据是否 等于 删除项的个数
      if (this.tableData.items.length <= delItemLength) {
        // 如果当前页就一项, 直接跳转到前一页
        this.pageNumber = this.pageNumber - 1;
        this.tableChange(this.pageNumber);
      } else {
        this.tableChange(this.pageNumber);
      }
    } else {
      this.tableChange(this.pageNumber);
    }
  }
}
