import { HttpClient, HttpParameterCodec, HttpParams } from "@angular/common/http";
import { Injector } from "@angular/core";
import { Params } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

export enum OperationType {
  Add,
  Copy,
  Rename
}

export abstract class RequestService {
  // api的路径
  baseUrl: string = environment.apis.default.url;
  // 发送空数据
  sendNullsAsQueryParam: boolean = false;

  http!: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
   }

  request1(url: string, dto: any, method: string): Observable<any> {
    return this.http
      .request<any>(method, `${this.baseUrl}/${url}`, {
        ...({ params: dto } && { params: this.getParams(dto) }),
      } as any)
  }

  request(request: any, api= this.baseUrl, config?:any) {
    config = config || {};
    const { method, params, ...options } = request;
    const { observe = 'body', skipHandleError } = config;

    return this.http
      .request<any>(method,  api + request.url, {
        observe,
        ...(params && {
          params: this.getParams(params, config.httpParamEncoder),
        }),
        ...options,
      } as any)
      .pipe(catchError(err => (
        skipHandleError ? throwError(err) : this.handleError(err)
      )));
  }

  handleError(err: any): Observable<any> {
    return throwError(err);
  }

  isUndefinedOrEmptyString(value: unknown): boolean {
    return value === undefined || value === '';
  }

  // 排除参数为null的情况
  private getParams(params: Params, encoder?: HttpParameterCodec): HttpParams {
    const filteredParams = Object.keys(params).reduce((acc, key) => {
      const value = params[key];
      if (this.isUndefinedOrEmptyString(value)) return acc;
      if (value === null && !this.sendNullsAsQueryParam) return acc;
      acc[key] = value;
      return acc;
    }, {});
    return encoder
      ? new HttpParams({ encoder, fromObject: filteredParams })
      : new HttpParams({ fromObject: filteredParams });
  }
}
