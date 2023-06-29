import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To11 extends LinkConfig {
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
    return `[01](h2-11 '标题内容')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(text);
      return `<h3 class="link-h2-11" title="${currentText}" id="${id}"><section class="link-h2-11-box"><section class="link-h2-11-left-bg bg-color"></section><section class="link-h2-11-text"><p class="link-h2-11-text-font margin-0">${currentText}</p></section><section class="link-h2-11-right-bg bg-color"></section></section></h3>`;
    }
    return '';
  };

  private _getCss(): string {
    return `
    .kingfar-wechat .link-h2-11 {
        margin: 10px 0px;
    }
    .kingfar-wechat .margin-0{
      margin:0;
    }
    .kingfar-wechat .link-h2-11-box{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .kingfar-wechat .link-h2-11-left-bg{
      width: 10px;
      height: 10px;
      background: #17209C;
      opacity: 0.35;
      border-radius: 25px;
    }
    .kingfar-wechat .link-h2-11-text{
      text-align: center;
      margin: 0px 16px;
    }
    .kingfar-wechat .link-h2-11-text-font{
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;font-weight: bold;
      color: #3B3B3B;
      line-height: 22px;
      letter-spacing: 2px;
    }
    .kingfar-wechat .link-h2-11-right-bg{
      width: 10px;
      height: 10px;
      background: #17209C;
      opacity: 0.35;
      border-radius: 25px;
    }

        `;
  }
}

export const h2_11 = new OneLevelH2To11();
