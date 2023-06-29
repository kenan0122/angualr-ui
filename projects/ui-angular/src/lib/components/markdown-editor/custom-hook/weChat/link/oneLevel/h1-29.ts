import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To29 extends LinkConfig {
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
    return `[01](h1-29 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="block link-h1-29 " title="${currentText}" id="${id}">
      ${currentText}
      <span class="link-h1-29-bottom border-color"></span>
      </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-29{
    font-size: 20px;
   }
   .kingfar-wechat .link-h1-29-bottom{
   border-bottom:4px solid #ebebeb;
   width: 5.882rem;
   height: 0.176rem;
   display:block;
   margin-top:8px;
   }
     `;
  }
}

export const h1_29 = new OneLevelH1To29();
