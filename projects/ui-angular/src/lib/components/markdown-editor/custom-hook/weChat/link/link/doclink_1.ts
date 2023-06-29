import { INavigationType, LinkConfig } from '../../../customHook';

class DocLink1 extends LinkConfig {
  preSetType: INavigationType = INavigationType.Link;
  css: string = this._getCss();

  readonly render = (
    leadingChar: string,
    text: string,
    link: string,
    title: string,
    ref: string,
    target: string
  ) => {
    return this._getHtmlTemplate(title, text);
  };

  createTemplate = (): string => {
    return `[链接允许空格](doclink_1 "https://cdn.ergolab.cn")`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('javascript:void(0)', '01标题内容');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<a href=${title}>${text}</a>`;
  }

  private _getCss(): string {
    return ` `;
  }
}

export const doclink_1 = new DocLink1();
