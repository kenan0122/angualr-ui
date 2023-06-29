import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To9 extends LinkConfig {
  preSetType: INavigationType = INavigationType.SecondLevel;
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
    return `[01](h2-9 '标题内容')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(text);
      return `<h3 class="link-h2-9"  title="${text}" id="${id}"><section style="font-weight:bold"><span class="link-h2-9-icon color">${text}</span>${currentText}</section><section class="link-h2-9-content"><span class="link-h2-9-first-block bg-color"></span><span class="link-h2-9-second-block bg-color"></span><span class="link-h2-9-three-block"></span></section></h3>`;
    }
    return '';
  };

  private _getCss(): string {
    return `
    .kingfar-wechat .link-h2-9 {
        margin: 10px 0px;
        line-height: 1.5;
        font-size: 14px;
    }
    .kingfar-wechat .link-h2-9-icon {
        font-size: 20px;
        font-weight: bold;
        color: themeColor;
    }
    .kingfar-wechat .link-h2-9-content {
        display: flex;
        height: 8px;
        width: 100%;
    }
    .kingfar-wechat .link-h2-9-first-block {
        display: inline-flex;
        background: #1890ff;
        width: 8px;
        height: 100%;
    }
    .kingfar-wechat .link-h2-9-second-block {
        display: inline-flex;
        background: #1890ff;
        height: 100%;
        width: 8px;
        opacity: 0.4;
    }
    .kingfar-wechat .link-h2-9-three-block {
        background: rgb(160, 160, 160);
        width: 100%;
        height: 100%;
    }
        `;
  }
}

export const h2_9 = new OneLevelH2To9();
