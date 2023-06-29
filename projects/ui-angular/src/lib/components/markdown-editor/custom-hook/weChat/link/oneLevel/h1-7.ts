import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To7 extends LinkConfig {
  preSetType: INavigationType = INavigationType.OneLevel;
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
    return `[01](h1-7 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-7-box block" id="${id}" title="${currentText}">
        <section class="link-h1-7">
            <section>
                <section class="link-h1-7-title bg-color">
                    <p class="link-h1-7-title-font">${text}</p>
                </section>
            </section>
            <section class="link-h1-7-border"></section>
            <section style="margin-top:6px">
                <p class="link-h1-7-text">${currentText}</p>
            </section>
        </section>
    </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
          .kingfar-wechat .link-h1-7-box{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            margin: 20px auto;
          }
          .kingfar-wechat .link-h1-7{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
          }
        .kingfar-wechat .link-h1-7-title {
          padding: 2px 4px;
          background: #1890ff;
          border-left: 1px solid #333333;
          border-top: 1px solid #333333;
          border-right: 1px solid #333333;
          }
        .kingfar-wechat .link-h1-7-title-font {
          font-size: 18px;
          font-weight: bold;
          color: #ffffff;
          line-height: 25px;
          letter-spacing: 1px;
          margin: 0;
        }
        .kingfar-wechat .link-h1-7-border {
          width: 103px;
          height: 1px;
          background: #333333;
        }
        .kingfar-wechat .link-h1-7-text {
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          line-height: 22px;
        }
        `;
  }
}

export const h1_7 = new OneLevelH1To7();
