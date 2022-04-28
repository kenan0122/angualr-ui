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
