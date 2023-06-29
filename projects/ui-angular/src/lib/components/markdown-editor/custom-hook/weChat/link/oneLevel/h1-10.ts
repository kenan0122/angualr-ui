import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To10 extends LinkConfig {
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
    return `[01](h1-10 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-10 block" id="${id}" title="${currentText}"><section class="link-h1-10-box"><span class="link-h1-10-icon"></span><section class="link-h1-10-title color">${text}</section></section><section class="link-h1-10-text color">${currentText}</section></h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-h1-10 {
          display: flex;
          align-items: center;
        }
        .kingfar-wechat .link-h1-10-box {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }
        .kingfar-wechat .link-h1-10-icon {
          margin-bottom: -25.5px;
          width: 18px;
          height: 18px;
          border-radius: 9px;
          background: #ffd55d;
        }
        .kingfar-wechat .link-h1-10-title {
          margin-left: 5px;
          font-size: 34px;
          font-weight: bold;
          color: #1890ff;
          line-height: 51px;
          letter-spacing: 2px;
        }
        .kingfar-wechat .link-h1-10-text {
          margin-bottom: -2.5px;
          margin-left: 2px;
          font-weight: bold;
          color: #1890ff;
          line-height: 22px;
          font-size:14px;
          text-decoration: underline;
        }
        `;
  }
}

export const h1_10 = new OneLevelH1To10();
