import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To8 extends LinkConfig {
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
    return `[01](h1-8 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-8-box block" id="${id}" title="${currentText}" >
    <section class="link-h1-8-content">
        <section class="link-h1-8-icon">
            <section class="link-h1-8-icon-bg bg-color">
                <p class="link-h1-8-title">${text}</p>
            </section>
            <section class="link-h1-8-icon-bottom-bg"></section>
        </section>
        <section class="link-h1-8-border border-color">
            <p class="link-h1-8-font color">${currentText}</p>
        </section>
    </section>
 </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-h1-8-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 20px auto;
        }
        .kingfar-wechat .link-h1-8-icon {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          align-self: flex-start;
          margin-bottom: -25.1px;
          z-index: 1;
        }
        .kingfar-wechat .link-h1-8-icon-bg {
          padding: 2px 4px 5px 4px;
          background: #1890ff;
        }
        .kingfar-wechat .link-h1-8-title {
          font-size: 16px;
          font-weight: bold;
          color: #ffffff;
          line-height: 22px;
          letter-spacing: 1px;
          margin: 0px;
        }
        .kingfar-wechat .link-h1-8-icon-bottom-bg {
          border-bottom: 4px solid white;
          border-left: 13px solid transparent;
          border-right: 13px solid transparent;
          width: 0px;
          height: 0px;
          margin-top: -3.9px;
        }
        .kingfar-wechat .link-h1-8-border {
          text-align: left;
          padding: 6px 16px 5px 35px;
          border: 1px solid #1890ff;
        }
        .kingfar-wechat .link-h1-8-font {
          font-size: 16px;
          font-weight: bold;
          color: #1890ff;
          line-height: 22px;
          letter-spacing: 1px;
          margin: 0px;
        }
        .kingfar-wechat .link-h1-8-content{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        }
        `;
  }
}

export const h1_8 = new OneLevelH1To8();
