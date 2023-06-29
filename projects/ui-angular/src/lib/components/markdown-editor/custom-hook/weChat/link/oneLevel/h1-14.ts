import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To14 extends LinkConfig {
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
    return `[01](h1-14 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-14 block border-color" id="${id}" title="${currentText}"><section class="link-h1-14-box border-color"><strong class="link-h1-14-box-text">${currentText}</strong></section></h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
    .kingfar-wechat .link-h1-14 {
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: 100%;
        box-sizing: border-box;
        border-bottom-width: 4px;
        border-bottom-style: solid;
        border-bottom-color: #1890ff;
        text-align: left;
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
      }
      .kingfar-wechat .link-h1-14-box {
        margin-bottom: -5px;
        max-width: 100%;
        box-sizing: border-box;
        border-bottom-width: 8px;
        border-bottom-style: solid;
        border-bottom-color: #1890ff;
        font-size: 14px;
        line-height: 20px;
        display: inline-block;
        color: inherit;
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
      }
      .kingfar-wechat .link-h1-14-box-text {
        max-width: 100%;
        border-color: rgb(229, 185, 183);
        color: inherit;
        font-size: 16px;
        box-sizing: border-box !important;
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
      }
        `;
  }
}

export const h1_14 = new OneLevelH1To14();
