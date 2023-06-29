import { INavigationType, LinkConfig } from '../../../customHook';

class Em8 extends LinkConfig {
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
    return `[标题4](em-8)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '标题4');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<h4 class="link-em-8">${text}</h4>`;
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-em-8 {
        font-size: 16px;
        margin:10px 0;
        display:inline-block
      }
   `;
  }
}

export const em_8 = new Em8();
