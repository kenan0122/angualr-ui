import { INavigationType, LinkConfig } from '../../../customHook';

class Em1 extends LinkConfig {
  preSetType: INavigationType = INavigationType.Text;
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
    return `[字体2](em-1)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '字体2');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<span class="link-em-1 color">${text}</span>`;
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-em-1 {
        color: #1890ff;
        margin:10px 0;
      }
   `;
  }
}

export const em_1 = new Em1();
