import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To8 extends LinkConfig {
  preSetType: INavigationType = INavigationType.SecondLevel;
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
    return `[01](h2-8 '标题内容')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标题内容', '01');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    const id = this.getHrefId(text);
    return `<h3 class="link-h2-8"  title="${text}" id="${id}"><section class="link-h2-8-box"><section class="link-h2-8-box-top bg-color"></section><section class="link-h2-8-box-content">${text}</section><section class="link-h2-8-box-top bg-color"></section></section></h3>`;
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .link-h2-8 {
            line-height: 1.5;
            font-size: 14px;
            margin: 10px 0px;
            border: none;
            box-sizing: border-box;
        }
        .kingfar-wechat .link-h2-8-box {
            line-height: 1.5;
            font-size: 14px;
            display: flex;
        }
        .kingfar-wechat .link-h2-8-box-top {
            line-height: 1.5;
            font-size: 14px;
            flex: 1;
            height: 1px;
            background: #1890ff;
        }
        .kingfar-wechat .link-h2-8-box-content {
            line-height: 1.5;
            font-size: 16px;
            margin-top: -12px;
            padding: 0 10px;
            font-weight: bold;
        }
        `;
  }
}

export const h2_8 = new OneLevelH2To8();
