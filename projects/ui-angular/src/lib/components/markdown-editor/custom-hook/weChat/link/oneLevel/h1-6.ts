import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To6 extends LinkConfig {
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
    return `[01](h1-6 '标题内容')`;
  };
  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };
  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-6-box block" id="${id}" title="${currentText}">
                <section class="link-h1-6">
                    <section  class="link-h1-6-top"> 
                        <section class="link-h1-6-top-left"></section>
                        <section  class="link-h1-6-top-right"></section>
                    </section>
                    <section class="link-h1-6-bg">
                        <section style="margin: 0 7px;">
                            <span class="link-h1-6-text color" >${text}</span>
                        </section>
                    </section>
                    <section style="margin: 0 9px;">
                        <section class="link-h1-6-bg-title">${currentText}</section>
                    </section>
                    <section class="link-h1-6-bottom">
                        <section class="link-h1-6-bottom-left"></section>
                        <section class="link-h1-6-bottom-right"></section>
                    </section>
                </section>
             </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
        .kingfar-wechat .link-h1-6-box {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            margin: 20px auto;
          }
          .kingfar-wechat .link-h1-6 {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .kingfar-wechat .link-h1-6-top {
            margin-bottom: -30.5px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          .kingfar-wechat .link-h1-6-top-left {
            width: 9px;
            height: 9px;
            border-left: 1px solid #333333;
            border-top: 1px solid #333333;
          }
          .kingfar-wechat .link-h1-6-top-right {
            width: 9px;
            height: 9px;
            border-right: 1px solid #333333;
            border-top: 1px solid #333333;
          }
          .kingfar-wechat .link-h1-6-bg {
            margin-bottom: -50.5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .kingfar-wechat .link-h1-6-text {
            font-size: 55px;
            font-weight: bold;
            color: #1890ff;
            opacity: 0.25;
            line-height: 83px;
          }
          .kingfar-wechat .link-h1-6-bg-title {
            font-size: 16px;
            font-weight: bold;
            color: #333333;
            line-height: 22px;
            letter-spacing: 1px;
          }
          .kingfar-wechat .link-h1-6-bottom {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          .kingfar-wechat .link-h1-6-bottom-left {
            border-left: 1px solid #333333;
            border-bottom: 1px solid #333333;
            width: 9px;
            height: 9px;
          }
          .kingfar-wechat .link-h1-6-bottom-right {
            width: 9px;
            height: 9px;
            border-right: 1px solid #333333;
            border-bottom: 1px solid #333333;
          }
        `;
  }
}

export const h1_6 = new OneLevelH1To6();
