import { Injector } from "@angular/core";
import { RequestService } from "./request.service";
export abstract class TableBaseService extends RequestService {
  // 表格json的数据
  tableJsonData!: any;//TableConfigScheme<any>;
  // 表格的数据结构
  tableData: any;
  pageNumber: number = 1;
  pageSize: number = 10;
  // 是否显示模态框
  isVisibleModal: boolean = false;

  constructor(injector: Injector) {
    super(injector)
   }

  /** 获取表格的json数据结构 */
  getTableJsonData(tableJsonUrl: string, tableUrl: string) {
    this.request({
      method: 'GET',
      url: tableJsonUrl,
    }).subscribe((response) => {
      this.tableJsonData = response;
      this.getTableStructData(this.tableJsonData.action.dto, tableUrl);
    });

    // this.request(tableJsonUrl, {}, 'GET')
    // .subscribe((response) => {
    //   this.tableJsonData = response;
    //   this.getTableStructData(this.tableJsonData.action.dto, tableUrl);
    // });
  }

  /**
   * 获取表格的数据结构
   * @param {*} dto 查询的实体参数
   * @memberof TableBaseService
   */
  getTableStructData(dto: any, tableUrl: string) {
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
    });
  }
}
