import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To3 extends LinkConfig {
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
    return `[01](h1-3 '标题内容')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="margin-bottom-20 block" title="${currentText}" id="${id}">
        <p class="link-h1-3-number">
            <span class="link-h1-3-border color">${text}</span>
        </p>
        <p class="link-h1-3-content">${currentText}</p>
    </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
        .kingfar-wechat .link-h1-3-number {
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: -2px;
            margin: 0;
          }
          .kingfar-wechat .link-h1-3-border {
            font-size: 38px;
            line-height: 38px;
            border-bottom: 3px solid #ebebeb;
            padding-right: 1rem;
            color: #1890ff;
          }
          .kingfar-wechat .link-h1-3-content {
            font-size: 1rem;
            margin: 8px 0;
            letter-spacing: 0.544px;
          }
        `;
  }
}

export const h1_3 = new OneLevelH1To3();
