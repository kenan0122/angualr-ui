import { INavigationType, LinkConfig } from "../../../customHook";

class Link1 extends LinkConfig {
  preSetType: INavigationType = INavigationType.Link;
  css: string = this._getCss();

  readonly render = (leadingChar: string, text: string, link: string, title: string, ref: string, target: string) => {
    return this._getHtmlTemplate(title, text)
  };

  createTemplate = (): string => {
    return `[01 标题内容](link-1 "https://cdn.ergolab.cn")`
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate("javascript:void(0)", '01标题内容');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<section class="link1 border-bottom-color"><a href=${title} class="link1-color">${text}</a></section>`
  }

  private _getCss(): string {
    return `
        .kingfar-wechat .link1 {
          text-align: center;
          border-bottom: 1px dashed #000000;
          line-height: 35px;
          color: #000;
          }
          .kingfar-wechat .link1-color {
            color:#000
          }
        `
  }
}

export const link_1 = new Link1();