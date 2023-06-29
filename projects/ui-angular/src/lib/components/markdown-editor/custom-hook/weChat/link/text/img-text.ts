import { INavigationType, LinkConfig } from "../../../customHook";

class ImgText extends LinkConfig {
  preSetType: INavigationType = INavigationType.Text;
  css: string = this._getCss();

  readonly render = (leadingChar: string, text: string, link: string, title: string, ref: string, target: string) => {
    return this._getHtmlTemplate(title, text)
  };

  createTemplate = (): string => {
    return `[标题3](img-text)`
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '标题3');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<section class="link-img-text block">${text}</section>`
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-img-text{
        text-align: center;
        font-size: 12px;
        color: #888;
      }
   `
  }
}

export const img_text = new ImgText();