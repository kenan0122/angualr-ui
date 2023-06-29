import { ErrorHandler,Injectable } from '@angular/core';

// https://www.yisu.com/zixun/615187.html
export class GlobalErrorhandler implements ErrorHandler {
  constructor(
  ) {

  }

  handleError(error: any) {
   // this.toaster.error('请求失败');
   console.log('请求错误', error)
  }
}
