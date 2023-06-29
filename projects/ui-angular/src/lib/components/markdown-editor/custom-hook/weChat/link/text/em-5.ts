import { INavigationType, LinkConfig } from '../../../customHook';

class Em5 extends LinkConfig {
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
    return `[标题1](em-5)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '标题1');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<h1 class="link-em-5">${text}</h1>`;
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-em-5 {
        margin:10px 0;
        font-size: 28px;
        display:inline-block;
      }
   `;
  }
}

export const em_5 = new Em5();
