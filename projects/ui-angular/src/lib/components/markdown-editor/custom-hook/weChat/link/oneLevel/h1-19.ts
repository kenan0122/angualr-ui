import { deleteFirst, deleteLast } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To19 extends LinkConfig {
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
    return `[01](h1-19 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-19" title="${currentText}" id="${id}">
<section class="link-h1-19-box"></section>
</h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
    .kingfar-wechat .link-h1-19{
     display: flex;
     font-size:1rem;
     align-items: center;
      width: 100%;
      justify-content: flex-start;
      padding-left: 18px;
    }
    .kingfar-wechat .link-h1-19-box{
      display: flex;
      justify-content: center;
      align-items: center;
    }
     `;
  }
}

export const h1_19 = new OneLevelH1To19();
