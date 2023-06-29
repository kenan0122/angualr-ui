import {
  InputFileType,
  IDropDownType,
} from '../compontent/custom-navigation/custom-navigation.types';

/**Editor setting*/
export interface IMdEditorSetting {
  id?: string | undefined; // Id 为了可以在一个页面中使用多次编辑器 id不重复
  style?: IStyleOption | undefined; //Custom style
  toolbars?: any[] | undefined;
  editorColor?: string | undefined;
  isShowSave?: boolean | undefined;
  markdown: string | undefined;
  mode: Mode | undefined;
  pasteMoalCallback: Function;
  localFileNamesPattern?: any;
  fileReferencesPattern?: any;
  isImport: boolean;
  /**类型参数支持两种 目前支持保存和复制
   * 1、{type:IButtonType.Button,text:string,fn:function} 普通按钮类型
   * 2、{type:IButtonType.DropDown,text:string,options:}
   */
  buttonSetting: ISaveButtonSetting[] | undefined;
  //提取只有这个网站的复制需要进行上传图片
  patternBaseUrl?: string;
  //提供网站匹配的id 如果是这个id的文章 就不在需要替换 否则需要上传替换成本文章的图片
  patternId?: string;
  readonly: boolean;
}
export interface ISaveButtonSetting {
  /**按钮类型 */
  type: IButtonType;
  /**展示文字 */
  text: string;
  /**回调函数 */
  fn: (() => void) | undefined;
  options: IDropDownType[] | undefined;
}

export enum IButtonType {
  Button,
  DropDown,
}

export const enum Mode {
  /** WeChat发布微信，展示专属cdn导航*/
  WeChat,
  /** 支持原生markdown无左侧导航*/
  VuePress,
}

export function getDefaultSetting(): IMdEditorSetting {
  return {
    id: 'markdown',
    style: defaultEditorStyle,
    toolbars: defaultEditorModelToobar(),
    //设置编辑器的颜色 推荐使用系统自带样式 暗色系'#20304b' 亮色系'#'
    editorColor: '',
    //new RegExp(/article\/\w+\/body\/[p|d]\/(\w+\.\w+)/g)
    //匹配的路径地址: /blob/img/content/123/body/123.png?w=1
    localFileNamesPattern: new RegExp(
      /\/blob\/img\/[a-z]+\/\w+\/body\/(\w+\.\w+)/g
    ),
    //测试路径/blob/img/content/123/1234.png?w=1 线上地址
    fileReferencesPattern: new RegExp(/\/blob\/img\/[a-z]+\/\w+\/(\w+\.\w+)/g),
    isShowSave: true,
    markdown: '',
    mode: Mode.WeChat,
    isImport: false,
    buttonSetting: [
      {
        type: IButtonType.DropDown,
        text: '上传/插入',
        options: insertList,
        fn: undefined,
      },
      {
        type: IButtonType.Button,
        text: '保存',
        options: undefined,
        fn: undefined,
      },
    ],
    pasteMoalCallback: (file: File) => {
      return 'http:/www.baidu';
    },
    /**匹配的基础路径 用来对图片、视频、音频 处理，**/
    patternBaseUrl: 'https://i.kingfar.cn',
    patternId: '',
    readonly: false,
  };
}
export interface IStyleOption {
  [propName: string]: string;
}

export function defaultEditorModelToobar() {
  return [
    'bold',
    'italic',
    'strikethrough',
    '|',
    'color',
    'header',
    '|',
    'list',
    {
      insert: ['table', 'formula', 'hr', 'br', 'code'],
    },
    'settings',
    // 'export',
  ];
}

export const defaultEditorModelSidebar = [];

export const defaultEditorStyle = {
  position: 'relative',
  height: '100vh',
  width: '100%',
};

export function isCdnMode(mode: Mode) {
  mode === Mode.WeChat ? true : false;
}

export interface SaveType {
  html: string;
  markdown: string;
}

/**常量id的标识 在这里统一定义和修改*/
export const themeId = 'KfThemeId';
export const vuepressId = 'KfVuepressId';
export const docsContentId = 'KfDocsContentId';
export const kfWeChatId = 'kfWeChatId';
export const kingfarEditor = 'kingfar-wechat';
export const kingfarVuepress = 'kingfar-docs';
export const textLength: number = 300;

/**定义常量Key内容*/
export const insertList: IDropDownType[] = [
  { value: InputFileType.Image, name: '图片' },
  { value: InputFileType.Audio, name: '音频' },
  { value: InputFileType.Video, name: '视频' },
  { value: InputFileType.Link, name: '内部链接' },
];

export interface IUpdateTemplate {
  other: any;
  // inRefChanged: boolean;
  isBodyChange: boolean;
  //id 为当前文章的id? url为当前的路径的url
  // fileInfo?: { id?: string; url: string }[];
  fileNames: string[];
  md: string;
  toc: IToc[];
  html: string;
}

/**Toc的存储类型*/
export interface IToc {
  /**等级 控制渲染时候的样式 */
  tag: string;
  /**跳转的路径*/
  id: string;
  /**标题的内容*/
  text: string;
}

/** @param id 从document中获取指定id下面的h1-h3 标签可以扩展 参考coding只有3及标签才能进行展示*/
export function getToc(id: string | undefined, mode: Mode | undefined): IToc[] {
  const headerQuery = 'h2, h3';
  if (!document) return [];
  const html: any = document.querySelector('#' + id);
  const htmlContent: any = html.querySelector('.cherry-previewer');
  let headings = htmlContent.querySelectorAll(headerQuery);
  let headingResult: IToc[] = [];
  //toc的数据提交
  Array.prototype.forEach.call(headings, function (heading) {
    let text = '';
    if (mode === Mode.VuePress) {
      text = heading.innerText ? heading.innerText : '';
    } else {
      //微信自己写了h2 h3 样式 自带title 如果有 就用原始的title，否则就用id代替
      text = headings && headings.title ? headings.title : heading.id;
    }
    const tagName = heading.tagName;
    headingResult.push({
      /**url路径 也就是id*/
      id: heading.id,
      /**标题的内容 */
      text: text,
      /**等级就是h1 就是1 h2就是2 为了方便后期样式的效果处理,注释:这里的1代表的是从1开始截取 */
      tag: 'H' + tagName.slice(1),
    });
  });
  return headingResult;
}
