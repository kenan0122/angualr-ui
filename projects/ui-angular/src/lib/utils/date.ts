import { deepClone } from '@psylab/utils';
const byTime = [
  365 * 24 * 60 * 60 * 1000,
  24 * 60 * 60 * 1000,
  60 * 60 * 1000,
  60 * 1000,
  1000,
];
const unit = ['年', '天', '小时', '分钟', '秒钟'];
export function getTimeShow(time: string) {
  debugger
  let cloneTime = deepClone(time)
  cloneTime = cloneTime.replace(/-/g, '/');
  // 时间差
  let ct = new Date().getTime() - Date.parse(cloneTime);

  if (ct < 0) {
    return '';
  }

  let sb: string[] = [];
  for (var i = 0; i < byTime.length; i++) {
    if (ct < byTime[i]) {
      continue;
    }

    let temp = Math.floor(ct / byTime[i]);
    ct = ct % byTime[i];
    if (temp > 0) {
      sb.push(`${temp}${unit[i]}`);
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

  return sb.join('') + '前';
}
