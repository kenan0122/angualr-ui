import { INavigationType, LinkConfig } from '../../../customHook';

class Em6 extends LinkConfig {
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
    return `[标题2](em-6)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '标题2');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<h2 class="link-em-6">${text}</h2>`;
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-em-6 {
        font-size: 24px;
        margin:10px 0;
        display:inline-block
      }
   `;
  }
}

export const em_6 = new Em6();
