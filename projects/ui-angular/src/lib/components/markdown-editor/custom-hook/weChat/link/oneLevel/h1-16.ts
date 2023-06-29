import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To16 extends LinkConfig {
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
    return `[01](h1-16 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-16 block" title="${currentText}" id="${id}">
        <section class="link-h1-16-border border-color color">${currentText}</section>
    </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
    .kingfar-wechat .link-h1-16 {
        color: #1890ff;
        margin-bottom: 20px;
      }
      .kingfar-wechat .link-h1-16-border {
        border-bottom: 2px solid #1890ff;
        position: flex;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 2px;
      }
        `;
  }
}

export const h1_16 = new OneLevelH1To16();
