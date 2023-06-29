import { INavigationType, LinkConfig } from '../../../customHook';

class Em3 extends LinkConfig {
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
    return `[字体4](em-3)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '字体4');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<span class="link-em-3" >${text}</span>`;
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-em-3 {
        font-weight: bold;
        margin:10px 0;
      }
   `;
  }
}

export const em_3 = new Em3();
