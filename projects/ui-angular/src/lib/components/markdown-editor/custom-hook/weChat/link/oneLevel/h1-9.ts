import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To9 extends LinkConfig {
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
    return `[01](h1-9 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-9 block" title="${currentText}" id="${id}">
    <section class="link-h1-9-content">
        <section class="link-h1-9-left">
            <span class="link-h1-9-left-border bg-transparent-right-color"></span>
            <span class="link-h1-9-left-icon bg-color"></span>
        </section>
        <section class="link-h1-9-right">
            <span class="link-h1-9-left-icon  bg-color"></span>
            <span class="link-h1-9-right-border  bg-transparent-left-color"></span>
        </section>  
        <section class="link-h1-9-text color">${text}${currentText}</section>
    </section>
</h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-h1-9 {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90%;
          margin: 20px auto;
        }
        .kingfar-wechat .link-h1-9-content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        }
        .kingfar-wechat .link-h1-9-left {
          width: 65px;
          height: 29px;
          align-self: flex-start;
          margin-bottom: -29.1px;
          margin-left: -65px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .kingfar-wechat .link-h1-9-left-border {
          display: inline-block;
          width: 50px;
          height: 2px;
          background: linear-gradient(to right, transparent, #1890ff);
        }
        .kingfar-wechat .link-h1-9-left-icon {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #1890ff;
          transform: rotate(60deg);
        }
        .kingfar-wechat .link-h1-9-right {
          width: 65px;
          height: 29px;
          margin-right: -65px;
          align-self: flex-end;
          margin-bottom: -29.1px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .kingfar-wechat .link-h1-9-right-border {
          display: inline-block;
          width: 50px;
          height: 2px;
          background: linear-gradient(to left, transparent, #1890ff);
        }
        .kingfar-wechat .link-h1-9-text {
          text-align: left;
          margin-top: 2px;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 1px;
          color: #1890ff;
          font-weight: bold;
        }
        `;
  }
}

export const h1_9 = new OneLevelH1To9();
