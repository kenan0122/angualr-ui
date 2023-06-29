import { deleteFirst, deleteLast } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To18 extends LinkConfig {
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
    return this._getHtmlTemplate(text, title);
  };

  createTemplate = (): string => {
    return `[01](h1-18 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      // currentText = deleteLast(currentText);
      return `<h2 class="link-h1-18" title="${currentText}" id="${id}"><span class="link-h1-18-outline-border border-color"><span class="link-h1-8-bg bg-color">${currentText}</span></span><section class="link-h1-18-border border-color"></section></h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
    .kingfar-wechat .link-h1-18{
      font-size:1rem;
      text-align:center;
      margin:40px 0;
    }
    .kingfar-wechat .link-h1-18-border{
      border-top:1px solid #38b2ac;
      margin-top:-12px;
    }
    .kingfar-wechat .link-h1-18-outline-border{
      border:1px solid #38b2ac;
      padding:10px 8px;
    }
    .kingfar-wechat .link-h1-8-bg{
      background:#38b2ac;
      padding:6px;
      font-size: 16px;
      color:#fff;
      font-weight:bold;
    }
     `;
  }
}

export const h1_18 = new OneLevelH1To18();
