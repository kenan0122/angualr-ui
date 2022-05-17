export interface ValidationDto {
  errorList: Array<ErrorInfo>;
}

export interface ErrorInfo {
  // 字段名
  label: string;
  // 错误信息
  msg: string;
}
