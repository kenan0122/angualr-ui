export interface IOptionEntry<T = any> {
	name: string;
	value: T;
	[prop: string]: any;
}

/** 请求的dto */
export interface ServiceRequestDto<T> {
  serviceName: string;
  methodName: string;
  dto: T;
}

export interface JsonUrlDto {
  /** 表格json url */
  tableJsonUrl: string;
  /** 表格结构 url */
  tableDataUrl: string;
  /** 删除 url */
  deleteJsonUrl: string;
  /** 表格json url */
  formJsonUrl: string;
  /** 表单数据的url */
  formDataUrl: string;
  /** 表单保存数据的url */
  saveUrl: string;
}
