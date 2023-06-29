import { Mode } from '../markdown-editor/shared/markdown-editor';

export interface IMarkdownPreviewSetting {
  html: string;
  markdown: string;
  articleType: Mode;
  baseUrl: string;
  backUrl: string;
  showToc: boolean;
}

export const defaultMarkdownPreviewSetting: IMarkdownPreviewSetting = {
  html: '',
  markdown: '',
  articleType: Mode.WeChat,
  baseUrl: '',
  backUrl: '',
  showToc: false,
};

//判断是否是手机
export function isMobile() {
  const userAgentInfo = navigator.userAgent;
  const mobileAgents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ];
  let mobile_flag = false;
  //根据userAgent判断是否是手机
  for (var v = 0; v < mobileAgents.length; v++) {
    if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
      mobile_flag = true;
      break;
    }
  }
  return mobile_flag;
}
