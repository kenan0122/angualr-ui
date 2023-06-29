import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To1 extends LinkConfig {
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
    return `[01 标题内容](h2-1)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标题内容', '01');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    const id = this.getHrefId(text);
    return `<h3 class="link-h2-1" title="${text}" id="${id}"><section class="link-h2-1-box border-color color"><strong>${text}</strong></section></h3>`;
  };

  private _getCss(): string {
    return `
            .kingfar-wechat .link-h2-1 {
                color: #59c3f9;
                margin: 10px 0;
            }
            .kingfar-wechat .link-h2-1-box {
                border-left: 4px solid #1890ff;
                font-size: 14px;
                line-height: 1.75em;
                color: #1890ff;
                letter-spacing: 2px;
                padding-right: 10px;
                padding-left: 10px;
                border-bottom-color: #1890ff;
                border-top-color: #1890ff;
                border-right-color: #1890ff;
                box-sizing: border-box;
                text-align: left;
            }
        `;
  }
}

export const h2_1 = new OneLevelH2To1();
