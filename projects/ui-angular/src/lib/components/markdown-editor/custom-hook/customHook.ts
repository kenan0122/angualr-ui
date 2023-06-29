export abstract class HookConfigBase {
  //导航属于哪个级别
  abstract preSetType: INavigationType;
  abstract readonly css: string;
  abstract createTemplate: () => string;
  abstract getHtml: () => string; //当类型使用没有用protected
}
export abstract class LinkConfig extends HookConfigBase {
  getHrefId = (content: string) => {
    const id = content
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-')
      .replace(/[!@#$%^&*():]/gi, '')
      .replace(/\//gi, '-');
    return id;
  };
  abstract readonly render: (
    leadingChar: string,
    text: string,
    link: string,
    title: string,
    ref: string,
    target: string
  ) => string;
}
export abstract class BlockCodeConfig extends HookConfigBase {
  abstract readonly render: (codeSrc: any, sign: any, engine: any) => string;
}
export interface INavigation {
  name: string;
  type: INavigationType;
}

export enum INavigationType {
  OneLevel,
  SecondLevel,
  Border,
  List,
  Hr,
  Text,
  Link,
  ResourceCenter,
  Insert, //用于插入显示 例如图片 视频 音频的快捷入口
}

export function preSetTypeToName(type: INavigationType): string {
  switch (type) {
    case INavigationType.Border:
      return `线框`;
    case INavigationType.Hr:
      return `分割`;
    case INavigationType.Link:
      return `链接`;
    case INavigationType.List:
      return `列表`;
    case INavigationType.OneLevel:
      return `一级`;
    case INavigationType.SecondLevel:
      return `二级`;
    case INavigationType.Text:
      return `文本`;
    // case INavigationType.Insert:
    //     return `插入`;
    default:
      return `文本`;
  }
}

export function preSetTypeToNameVuePress(type: INavigationType): string {
  switch (type) {
    case INavigationType.ResourceCenter:
      return `资源中心`;
    // case INavigationType.Insert:
    //     return `插入`;
    default:
      return `资源中心`;
  }
}
