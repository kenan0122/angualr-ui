import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To4 extends LinkConfig {
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
    return `[01 标题内容](h2-4)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标题内容', '01');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    const id = this.getHrefId(text);
    return `<h3 class="link-h2-4"  title="${text}" id="${id}"><section class="link-h2-4-content"><span class="link-h2-4-icon border-left-color"></span><span class="link-h2-4-icon-second border-left-color"></span></section><section class="link-h2-4-text color"><section style="box-sizing: border-box;font-weight:800;font-size:14px;">${text}</section></section></h3>`;
  };

  private _getCss(): string {
    return `
          .kingfar-wechat .link-h2-4 {
                margin: 10px 0%;
                line-height: 1;
                font-size: 14.8px;
                box-sizing: border-box;
                border: 0px none;
                padding: 0px;
            }
            .kingfar-wechat .link-h2-4-content {
                display: inline-block;
                vertical-align: top;
                box-sizing: border-box;
            }
            .kingfar-wechat .link-h2-4-icon {
                width: 0px;
                display: inline-block;
                opacity: 0.6;
                border-left: 0.5em solid #1890ff;
                box-sizing: border-box;
                border-top: 0.4em solid transparent !important;
                border-bottom: 0.4em solid transparent !important;
            }
            .kingfar-wechat .link-h2-4-icon-second {
                width: 0px;
                display: inline-block;
                border-left: 0.5em solid #1890ff;
                box-sizing: border-box;
                border-top: 0.4em solid transparent !important;
                border-bottom: 0.4em solid transparent !important;
            }
            .kingfar-wechat .link-h2-4-text {
                display: inline-block;
                vertical-align: top;
                line-height: 1.2;
                padding-right: 10px;
                color: #1890ff;
                box-sizing: border-box;
            }
        `;
  }
}

export const h2_4 = new OneLevelH2To4();
