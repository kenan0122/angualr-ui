import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To7 extends LinkConfig {
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
    return `[01](h2-7 '标题内容')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(text);
      return `<h3 class="link-h2-7"  title="${text}" id="${id}"><section class="link-h2-7-box"> <section class="link-h2-7-icon border-color"><span class="link-h2-7-title">${text}</span></section></section><section class="link-h2-7-content border-bottom-color"><section class="link-h2-7-content-text">${currentText}</section><section class="link-h2-7-border bg-color"></section></section></h3>`;
    }
    return '';
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .link-h2-7 {
            margin: 10px 0;
            display: flex;
            align-items: center;
        }
        .kingfar-wechat .link-h2-7-box {
            width: 24px;
            height: 23px;
            background: rgba(226, 198, 183, 0.5);
        }
        .kingfar-wechat .link-h2-7-icon {
            transform: translate(-3px, -3px);
            width: 24px;
            height: 23px;
            border: 1px solid #1890ff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .kingfar-wechat .link-h2-7-title {
            transform: translateY(1px);
            font-size: 12px;
            font-weight: bold;
            line-height: 22px;
            letter-spacing: 1px;
        }
        .kingfar-wechat .link-h2-7-content {
            border-bottom: 1px solid #1890ff;
            margin-left: 9px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            flex-direction: column;
        }
        .kingfar-wechat .link-h2-7-content-text {
            font-size: 14px;
            font-weight: bold;
            line-height: 22px;
        }
        .kingfar-wechat .link-h2-7-border {
            margin-bottom: 2px;
            width: 46px;
            height: 1px;
            background: #1890ff;
        }
        `;
  }
}

export const h2_7 = new OneLevelH2To7();
