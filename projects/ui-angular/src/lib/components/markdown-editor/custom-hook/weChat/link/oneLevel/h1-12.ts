import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To12 extends LinkConfig {
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
    return `[01](h1-12 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="block" id="${id}" title="${currentText}" ><section class="link-h1-12-box border-top-color"><section class="link-h1-12-content border-color"><section class="link-h1-12-text border-color"><section class="link-h1-12-title bg-color"><span>${currentText}</span></section><section class="link-h1-12-icon border-top-color"><br></section></section></section></section></h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-h1-12-box {
          border-top: 2.5px solid #1890ff;
          color: rgb(254, 254, 254);
          line-height: 1.4em;
          font-size: 14px;
        }
      .kingfar-wechat .link-h1-11-text-color {
        text-align: justify;
        color: #666;
        box-sizing: border-box;
      }
      .kingfar-wechat .link-h1-12-content {
        margin-top: 2px;
        border-width: 0px;
        border-style: initial;
        border-color: #1890ff;
        overflow: hidden;
        color: inherit;
      }
      .kingfar-wechat .link-h1-12-text {
        display: inline-block;
        border-color: themeColor;
      }
      .kingfar-wechat .link-h1-12-title {
        padding: 6px 10px;
        display: inline-block;
        line-height: 1.4em;
        vertical-align: top;
        font-weight: bold;
        border-color: rgb(79, 13, 7);
        background: #1890ff;
      }
      .kingfar-wechat .link-h1-12-icon {
        font-size: 1em;
        display: inline-block;
        vertical-align: top;
        width: 0px;
        height: 0px;
        border-top: 32px solid #1890ff;
        border-right: 32px solid transparent;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 2px;
      }
        `;
  }
}

export const h1_12 = new OneLevelH1To12();
