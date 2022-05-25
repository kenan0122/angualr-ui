import { Pipe, PipeTransform } from "@angular/core";
import { isFunction } from "@psylab/utils";
import { toNumber } from "ng-zorro-antd/core/util";

const MAX_SAFE_INTEGER = 9007199254740991;
const MAX_ARRAY_LENGTH = 4294967295;

@Pipe({
  // 限制循环次数
  name: 'times'
})
export class TimesPipe implements PipeTransform {
  transform(value: any, args?: (index: number) => void): any {
    value = toNumber(value);
    if (value < 1 || value > MAX_SAFE_INTEGER) {
      return [];
    }
    let index = MAX_ARRAY_LENGTH;
    const length = Math.min(value, MAX_ARRAY_LENGTH);

    if (!isFunction(args)) {
      args = () => {};
    }
    value -= MAX_ARRAY_LENGTH;

    const result = baseTimes(length, args);

    return result;
  }

}

function baseTimes(n: number, fn: ((arg0: number) => any)) {
  let index = -1;
  const result = Array(n);

  while (++index < n) {
    result[index] = fn(index);
  }

  return result;
}
