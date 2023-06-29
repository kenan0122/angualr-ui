import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To5 extends LinkConfig {
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
    return `[01 标题内容](h2-5)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标题内容', '01');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    const id = this.getHrefId(text);
    return `<h3 class="link-h2-5 color"  title="${text}" id="${id}">//&nbsp;<span>${text}</span>&nbsp;//</h3>`;
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .link-h2-5 {
            margin: 10px 0%;
            color: #1890ff;
            font-weight: bold;
            font-size: 14px;
        }
        `;
  }
}

export const h2_5 = new OneLevelH2To5();
