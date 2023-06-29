export enum ThemeColorType {
  Blue,
  Green,
  Orange,
  Red,
}

// 定义内容主题颜色常量
export const themeColorList: IDropDownType[] = [
  {
    value: ThemeColorType.Blue,
    color: '#2196f3',
    name: '蓝色',
    fileName: 'blue',
  },
  {
    value: ThemeColorType.Green,
    color: '#38b2ac',
    name: '绿色',
    fileName: 'green',
  },
  {
    value: ThemeColorType.Orange,
    color: '#f49f00',
    name: '橘黄',
    fileName: 'orange',
  },
  {
    value: ThemeColorType.Red,
    color: '#d82821',
    name: '红色',
    fileName: 'red',
  },
];

export function getThemeColor(type: ThemeColorType, param: string = 'color') {
  for (const themeColor of themeColorList) {
    if (type === themeColor.value) {
      return themeColor[param];
    }
  }
}

export interface IDropDownType extends IOption {
  name: string;
  value: any;
}
export interface IOption {
  [propName: string]: any;
}

//copy到的位置
export enum CopyType {
  /** Only markdown */
  Markdown,
  /** Style inline 支持微信将样式转化成行内*/
  WeChat,
}

export interface ITocType {
  /**等级用于展示样式生成 目前使用1-4个等级*/
  level: number;
  title: string;
  url: string;
}

export const copyList: IDropDownType[] = [
  { value: CopyType.WeChat, name: '复制Wechat' },
  { value: CopyType.Markdown, name: '复制Markdown' },
];

export interface INavigation {
  /**高亮显示 value:true 亮色  value:false 暗色*/
  isHighlight: boolean;
  /**预览尺寸 value:true 网页  value:false 手机*/
  isWideScreen: boolean;
  /**水印 value:true kingfar  value:false Ergolab*/
  isKingfar: boolean;
  /**主题颜色 {ThemeColorType} */
  themeColor: ThemeColorType;
  /**CopyType 可空**/
  copyType?: CopyType;
  /**Toc 生成快速导航*/
  toc?: ITocType[];
  /** 插入的类型 可空*/
  insertType?: InputFileType;
  /**estimatedTime 预估时间 目前应用在文章标题下面进行展示 */
  estimatedTime: number;
}

//Navigation button enum
export enum NavigationButtonType {
  Copy,
  Type,
  Theme,
  Preview,
  WaterMarker,
  DarkOrHighlight,
  Save,
  Insert,
}

//IIsert Types
export enum InputFileType {
  Image,
  Audio,
  Video,
  Link,
  Installer
}

//Default navigation value
export const defaultNavigation: INavigation = {
  isHighlight: true,
  isWideScreen: true,
  isKingfar: true,
  themeColor: ThemeColorType.Blue,
  insertType: undefined,
  toc: undefined,
  //预估时间
  estimatedTime: 0,
};

//Custom other setting;
export interface IOtherSetting {
  isShowInsert?: boolean;
  isShowSave?: boolean;
}

export interface IInsertSetting {
  type: InputFileType;
  url: string; //注意这里如果有水印需要传w=x的数需要区分
  displayText: string;
  hasWaterMarker?: boolean;
}
