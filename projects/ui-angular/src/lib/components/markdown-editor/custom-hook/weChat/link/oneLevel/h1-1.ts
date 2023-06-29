import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';

class OneLevelH1To1 extends LinkConfig {
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
    return `[标题内容](h1-1 '01')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('0010', '标题内容');
  };

  protected _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      const currentTitle = deleteFirst(title);
      const id = this.getHrefId(text);
      return `<h2 class="link-h1-1 block color" id="${id}" title="${currentTitle}"><section class="link-h1-1-title color">${currentTitle}</section><div class="link-h1-1-border bg-color"></div><div class="link-h1-1-content">${text}</div></h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
       .link-h1-1 {
            color: #1890ff;
            margin-bottom: 20px;
            text-align: center;
            line-height: 1.5;
            font-size: 14px;
          }
          .link-h1-1-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
         .link-h1-1-title {
            font-weight: bold;
            color: #1890ff;
            font-size: 60px;
            line-height: 40px;
          }
         .link-h1-1-border {
            width: 25%;
            height: 1px;
            background: #1890ff;
            margin-top: -22px;
            overflow: hidden;
            margin: 0 auto;
          }
          .link-h1-1-content {
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1.5px;
            padding: 8px;
            text-align: center;
          }
        `;
  }
}

export const h1_1 = new OneLevelH1To1();
