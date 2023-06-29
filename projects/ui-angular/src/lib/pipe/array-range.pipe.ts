import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // 根据value的值产生对应的数组元素
  name: 'arrayRange',
})
export class ArrayRangePipe implements PipeTransform {
  transform(value: any[], start: number = 0, end: number = 0): any[] {
    if (!value) {
      return [];
    }

    const s = end - start > 0 ? start : end;
    const e = end - start > 0 ? end : start;
    const array = value.slice(s, e);

    return array;
  }
}
