import { Component, Injector, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RequestService } from 'src/app/ui-config/service/request.service';
import { TableBaseService } from 'src/app/ui-config/service/table-base.service';
import { JsonUrlDto } from 'src/app/ui-config/type/base';

enum AuthorizationType {
  Authorize = 0,
  Remove = 1,
}

@Component({
  selector: 'app-grant-paradigm',
  templateUrl: './grant-paradigm.component.html',
  styleUrls: ['./grant-paradigm.component.less']
})
export class GrantParadigmComponent extends TableBaseService implements OnInit {
  // 套餐id
  @Input() id?: number;
  @ViewChild('tableChild') tableChild: any;

  reload = {};
  jsonUrlObj:JsonUrlDto = {
    tableJsonUrl: '/api/Paradigm/packages/package-authorization-table-config',
    tableDataUrl: '/api/Paradigm/packages/paradigm-list',
    deleteJsonUrl: '/api/Paradigm/packages/authration',
    formJsonUrl: '',
    formDataUrl: '',
    saveUrl: ''
  };
  checkIdLen:number = 0;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 如果重新加载, 重新渲染列表
    if (changes['reload']) {
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

    // 跳转页数
    skipPageNumber(delItemLength: number) {
      // 判断是不是第一页
      if (this.pageNumber > 1) {
        // 判断当前页的数据是否 等于 删除项的个数
        if (this.tableData.items.length <= delItemLength) {
          // 如果当前页就一项, 直接跳转到前一页
          this.pageNumber = this.pageNumber - 1;
          this.pageNumberChange(this.pageNumber);
        } else {
          this.pageNumberChange(this.pageNumber);
        }
      } else {
        this.pageNumberChange(this.pageNumber);
      }
    }

  ngOnInit() {
    this.getTableJsonData(
      this.jsonUrlObj.tableJsonUrl,
      this.jsonUrlObj.tableDataUrl
    );
  }

  override getTableStructData(dto: any, tableUrl: string)  {
    dto.packageId = this.id;
    dto = Object.assign(dto, {
      maxResultCount: this.pageSize,
      skipCount: (this.pageNumber - 1) * this.pageSize
    });

    this.request({
      method: 'GET',
      url: tableUrl,
      params: dto,
    }).subscribe((response) => {
      this.tableData = response;
    }, err => {
      console.error(err)
    });
  }

  delete(param: any) {
    this.fetchGrantData([param.data.id], AuthorizationType.Remove);
  }

  deleteBatch() {
    const checkIds = this.tableChild.setOfCheckedId;
    if (checkIds.size > 0) {
      this.fetchGrantData([...checkIds], AuthorizationType.Remove);
    }
  }

  add(param: any) {
    this.fetchGrantData([param.data.id], AuthorizationType.Authorize);
  }

  batchAdd() {
    const checkIds = this.tableChild.setOfCheckedId;
    if (checkIds.size > 0) {
      this.fetchGrantData([...checkIds], AuthorizationType.Authorize);
    }
  }

  fetchGrantData(paradigmIds: string[], authorizationType: AuthorizationType) {
    const input = {
      authorizationType:  authorizationType,
      packageId: this.id,
      paradigmIds: paradigmIds
    }

    this.request({
      method: 'POST',
      url: this.jsonUrlObj.deleteJsonUrl,
      body: input
    }).subscribe(result => {
      if (result) {
        this.reLoadData();
      }
    })
  }

  reLoadData() {
    this.tableChild.setOfCheckedId.clear();
    this.tableChild.checked = false;
    this.tableChild.indeterminate = false;
    this.getTableStructData(this.tableJsonData.action.dto, this.jsonUrlObj.tableDataUrl);
  }
  // 翻页, 排序
  tableChange(param: any) {
    // 重新存储当前页数
    this.pageNumberChange(param.pageNumber)
  }

  pageNumberChange(pageNumber: number) {
     // 重新存储当前页数
     this.pageNumber = pageNumber;
     this.getTableStructData(
      this.tableJsonData.action.dto,
      this.jsonUrlObj.tableDataUrl
    );
  }
}
