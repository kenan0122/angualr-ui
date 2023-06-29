import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To5 extends LinkConfig {
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
    return `[01](h1-5 '标题内容')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-5 block" title="${currentText}" id="${id}">
                <section class="link-h1-5-icon bg-color">
                    <section class="link-h1-5-icon-text"><span class="link-h1-5-icon-span">${text}</span></section>
                </section>
                <section>
                    <section lclass="link-h1-5-title"><p class="link-h1-5-title-p">${currentText}</p></section>
                    <section class="link-h1-5-border">
                        <section class="link-h1-5-border-left"></section>
                        <section class="link-h1-5-border-right bg-color"></section>
                    </section>
                </section>
        </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
        .kingfar-wechat .link-h1-5 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px auto;
          }
          .kingfar-wechat .link-h1-5-icon {
            background: #1890ff;
            width: 32px;
            height: 32px;
            border-radius: 16px;
            max-width: 100%;
            box-sizing: border-box;
            word-wrap: break-word;
            word-break: normal;
            margin: 0;
          }
        
          .kingfar-wechat .link-h1-5-icon-text {
            width: 32px;
            height: 32px;
            border-radius: 16px;
            border: 1px solid #333333;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(-2px, -2px);
          }
          .kingfar-wechat .link-h1-5-icon-span {
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            line-height: 22px;
            letter-spacing: 2px;
          }
          .kingfar-wechat .link-h1-5-title-p {
            font-size: 16px;
            font-weight: bold;
            color: #333333;
            line-height: 17px;
            margin: 0;
          }
          .kingfar-wechat .link-h1-5-title {
            padding: 0 12px 0 8px;
            margin: 0;
          }
          .kingfar-wechat .link-h1-5-border-left {
            width: 100%;
            height: 1px;
            background: #333333;
            margin: 0;
          }
          .kingfar-wechat .link-h1-5-border {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
          }
          .kingfar-wechat .link-h1-5-border-right {
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background: #1890ff;
            margin: 0;
          }
        `;
  }
}

export const h1_5 = new OneLevelH1To5();
