import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To15 extends LinkConfig {
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
    return `[01](h1-15 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 id=${id} title="${currentText}"><section class="link-h1-15 block border-color"><section class="link-h1-15-title bg-color">${currentText}</section></section></h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-h1-15 {
        border-bottom: 2px solid #1890ff;
        position: flex;
      }
      .kingfar-wechat .link-h1-15-title {
        font-size: 16px;
        font-weight: bolid;
        background: #1890ff;
        display: inline-block;
        padding: 2px 4px;
        color: #fff;
        box-shadow: 2px 0 2px #999;
      }
        `;
  }
}

export const h1_15 = new OneLevelH1To15();
