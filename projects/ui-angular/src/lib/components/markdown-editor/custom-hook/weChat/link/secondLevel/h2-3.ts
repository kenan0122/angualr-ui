import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To3 extends LinkConfig {
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
    return `[01 标题内容](h2-3)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标题内容', '01');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    const id = this.getHrefId(text);
    return `<h3 class="link-h2-3"  title="${text}" id="${id}"><span class="link-h2-3-box"><span class="link-h2-3-border">${text}</span><span class="link-flex"><span class="link-h2-3-bolock bg-color"></span><span class="link-h2-3-point bg-color"></span></span></span></h3>`;
  };

  private _getCss(): string {
    return `
            .kingfar-wechat .link-h2-3 {
                letter-spacing: 1px;
                font-size: 1rem;
                font-weight: bold;
                margin: 10px 0;
            }
            .kingfar-wechat .link-h2-3-box {
                flex-flow: column;
                display: inline-flex;
            }
            .kingfar-wechat .link-h2-3-border {
                display: inline-block;
                padding-right: 10px;
            }
            .kingfar-wechat .link-h2-3-bolock {
                background: #1890ff;
                display: inline-block;
                width: 100%;
                height: 3px;
            }
            .kingfar-wechat .link-h2-3-point {
                height: 3px;
                display: inline-block;
                background: #1890ff;
                margin-left: 4px;
                width: 3px;
            }
            .kingfar-wechat .link-flex{
                display: flex;
            }
        `;
  }
}

export const h2_3 = new OneLevelH2To3();
