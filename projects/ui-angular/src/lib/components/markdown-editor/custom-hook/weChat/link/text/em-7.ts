import { INavigationType, LinkConfig } from '../../../customHook';

class Em7 extends LinkConfig {
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
    return `[标题3](em-7)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '标题3');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<h3 class="link-em-7">${text}</h3>`;
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-em-7 {
        font-size: 20px;
        margin:10px 0;
        display:inline-block
      }
   `;
  }
}

export const em_7 = new Em7();
