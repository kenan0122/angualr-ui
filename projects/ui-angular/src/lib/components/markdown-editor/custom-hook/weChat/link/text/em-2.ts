import { INavigationType, LinkConfig } from '../../../customHook';

class Em2 extends LinkConfig {
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
    return `[字体3](em-2)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '字体3');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<span class="link-em-2 bg-color">${text}</span>`;
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-em-2 {
        background: #1890ff;
        color: #fff;
        padding: 1px 4px;
        margin:10px 0;
      }
   `;
  }
}

export const em_2 = new Em2();
