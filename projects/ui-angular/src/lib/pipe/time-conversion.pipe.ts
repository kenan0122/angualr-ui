
import { Pipe, PipeTransform } from '@angular/core';

const byTime = [24 * 60 * 60 * 1000, 60 * 60 * 1000, 60 * 1000, 1000];
const unit = ['天', '小时', '分钟', '秒钟'];

@Pipe({
  name: 'timeConversion',
})
export class TimeConversionPipe implements PipeTransform {
  transform(value: any, format?: any): any {
    if (value === '' || value === null || value === NaN || value === void 0 || value === 0) {
      // 后端返还0，NaN，undefined
      return '--';
    } else if (typeof value === 'string' || typeof value === 'object') {
      //value = value.replace(/-/g, '/');
      // 时间差
      let ct = new Date().getTime() - Date.parse(value);

      if (ct < 0) {
        return '';
      } else {
        let sb: string[] = [];
        let formate: string = '';

        for (var i = 0; i < byTime.length; i++) {
          if (ct < byTime[i]) {
            continue;
          }

          let temp = Math.floor(ct / byTime[i]);
          ct = ct % byTime[i];
          if (i === 0) {
            if (temp > 3 || temp <= 0) {
              formate = new Date(value).toLocaleDateString().replace(/\//g, '-');
            } else {
              sb.push(`${temp}${unit[0]}`);
              formate = sb.join('') + '前';
            }
            break;
          } else {
            if (temp > 0) {
              sb.push(`${temp}${unit[i]}`);
              formate = sb.join('') + '前';
            }

            /*一下控制最多输出几个时间单位：
                        一个时间单位如：N分钟前
                        两个时间单位如：M分钟N秒前
                        三个时间单位如：M年N分钟X秒前
                    以此类推
                    */
            if (sb.length >= 1) {
              break;
            }
          }
        }

        return formate;
      }
    }
  }
}
