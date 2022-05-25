import { HttpClient, HttpParameterCodec, HttpParams } from "@angular/common/http";
import { Injector } from "@angular/core";
import { Params } from "@angular/router";
import { isUndefinedOrEmptyString, template } from "projects/ui-angular/src/lib/utils";
import { environment } from "src/environments/environment";
import { TableConfigScheme } from "../type/table";

export abstract class TableBaseService {
  // api的路径
  baseUrl: string = environment.apis.default.url;

  // 表格json的数据
  tableJsonData!: any;//TableConfigScheme<any>;
  // 表格的数据结构
  tableData: any;
  pageNumber: number = 1;
  pageSize: number = 2;

  // 发送空数据
  sendNullsAsQueryParam: boolean = false;
  // 是否显示模态框
  isVisibleModal: boolean = false;

  http!: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
   }

  /** 获取表格的json数据结构 */
  getTableJsonData(tableJsonUrl: string, tableUrl: string) {
    const url=`${this.baseUrl}/${tableJsonUrl}`;

    this.http
    .get<any>(url, {
      ...({ params: {} } && { params: this.getParams({}) }),
    } as any)
    .subscribe((response) => {
      this.tableJsonData = response;
      this.getTableStructData(this.tableJsonData.action.dto, tableUrl);
    });
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

    const url = `${this.baseUrl}/${tableUrl}`;
    this.getRequest(url, dto, 'GET');
  }


  // 进行api请求
  private getRequest(url: string, dto: any, method: string) {
    this.http
      .request<any>(method, url, {
        ...({ params: dto } && { params: this.getParams(dto) }),
      } as any)
      .subscribe((response) => {
        this.tableData = response;
      });
  }

  // 排除参数为null的情况
  private getParams(params: Params, encoder?: HttpParameterCodec): HttpParams {
    const filteredParams = Object.keys(params).reduce((acc, key) => {
      const value = params[key];
      if (isUndefinedOrEmptyString(value)) return acc;
      if (value === null && !this.sendNullsAsQueryParam) return acc;
      acc[key] = value;
      return acc;
    }, {});
    return encoder
      ? new HttpParams({ encoder, fromObject: filteredParams })
      : new HttpParams({ fromObject: filteredParams });
  }
}
