import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // https://www.thinbug.com/q/46805343
  // 根据value的值产生对应的数组元素
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(length: number, offset:number = 0): number[] {
    if (!length) {
      return [];
    }

    let array:number[] = [];
    for (let n = 0; n < length; n++) {
      array.push(offset + n);
    }

    return array;
  }

}
