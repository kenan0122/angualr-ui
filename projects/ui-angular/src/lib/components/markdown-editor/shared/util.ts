import * as links from '../custom-hook/weChat/link';
import * as blockCode from '../custom-hook/weChat/blockCode';

export const previewPattern =
  /(\/blob\/(img|raw)\/[a-z]+\/[\w-]+\/[\w]+\/[\w-]+\.[\w]+)(\?w=[1-9])/g;
export const referencesPattern = /(\/blob\/(img|raw)\/[a-z]+\/[\w-]+\.[\w]+)/g;
export const localPattern =
  /(\/blob\/(img|raw)\/[a-z]+\/[\w-]+\/[\w]+\/([\w-]+)\.[\w]+)/g;
export const patternImgCopy =
  /\!\[\]\(((.*\/blob\/(img|raw)\/[a-z]+\/([\w-]+)\/[\w]+\/[\w-]+\.[\w]+)\?.*)\)/g;
export const patternLink = /(\/learn\/(module|series)\/[\w-].+)\)/g;
export const kingfarWaterMarker = '?w=1';
export const ergoLABwaterMarker = '?w=2';

export function copyContent(content: string) {
  return new Promise<boolean>((resolve, reject) => {
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', content);
    document.body.appendChild(input);
    input.setSelectionRange(0, 999999999);
    input.select();
    if (document.execCommand('Copy')) {
      document.execCommand('Copy');
      resolve(true);
    } else {
      resolve(false);
    }
    document.body.removeChild(input);
  });
}

export function removeStyleMarker(html: string): string {
  const patternStyle = /(<style[^>]*>[^<]*<\/style>)/g;
  const re = new RegExp(patternStyle);
  return html.replace(re, (_match: any, p1: any) => {
    return '';
  });
}

export function deleteFirst(content: string): string {
  return content.slice(1, content.length - 1);
}

export function deleteLast(content: string): string {
  return content.substr(0, content.length - 1);
}

//提供公共的样式
export function getArticleStyle() {
  //根据不同类型添加不同的样式
  const articaleLinkBlockKeys = Object.keys(links);
  const linkStyle = calWechatStyleAndTemplates(articaleLinkBlockKeys, links);
  const articaleBlockKeys = Object.keys(blockCode);
  const blockStyle = calWechatStyleAndTemplates(articaleBlockKeys, blockCode);
  return blockStyle + linkStyle;
}

export function calWechatStyleAndTemplates(
  targetKeys: string[],
  target: any
): string {
  let resultStyle: string = '';
  for (const hookKey of targetKeys) {
    //使用两个hookKey获取是因为头部导入数据格式原因
    const currentKey = target[hookKey][hookKey];
    resultStyle += currentKey.css;
  }
  return resultStyle;
}
