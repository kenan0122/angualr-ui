import * as linkHook from '../link/index';

export function getCustomHtml(
  leadingChar: string,
  text: string,
  link: string,
  title: string,
  ref: string,
  target: string
) {
  //这里需要注意在js中不允许伊-中横线命名,只允许以_，在使用md我们使用-所以需要转化在进行匹配。为了统一
  const currenLink = link.replaceAll('-', '_');
  if (currenLink) {
    //这里其实可以只接受text和title都传递是为了方便后期扩展
    return linkHook[currenLink][currenLink].render(
      leadingChar,
      text,
      link,
      title,
      ref,
      target
    );
  }
}

/**处理 heading 的id 这里的id是做锚点连接 需要考虑浏览器不支持的方式例如# /等特殊字符*/
export const makeHrefId = (content: string): string => {
  const id = content
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-')
    .replace(/[!@#$%^&*():]/gi, '')
    .replace(/\//gi, '-');
  return id;
};
