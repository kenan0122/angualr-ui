import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To6 extends LinkConfig {
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
    return `[01 标题内容](h2-6)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('01', '标题内容');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    const id = this.getHrefId(text);
    return `<h3 class="margin-10"  title="${text}" id="${id}"><section class="link-h2-6 border-bottom-color">&nbsp;${text}</section><section class="link-h2-6-border border-top-color"></section></h3>`;
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .margin-10 {
            margin: 10px 0;
        }
        .kingfar-wechat .link-h2-6 {
            padding-right: 30px;
            display: inline-block;
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #1890ff;
        }
        .kingfar-wechat .link-h2-6-border {
            width: 50px;
            border-top: 3px solid #1890ff;
        }
        `;
  }
}

export const h2_6 = new OneLevelH2To6();
