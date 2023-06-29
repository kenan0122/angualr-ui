import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To17 extends LinkConfig {
  preSetType: INavigationType = INavigationType.OneLevel;
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
    return `[01](h1-17 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-17" title="${currentText}" id="${id}">
      <section class="link-h1-17-text color">${text}</section>
      <section class="link-h1-17-content bg-color"></section>
      <section class="link-h1-17-bottom"></section>
      <section class="link-h1-17-border"></section>
      <span class="link-h1-17-text-content">${currentText}</span>
    </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
    .kingfar-wechat .link-h1-17 {
      margin-bottom: 20px;
      display: flex;
      align-items: flex-end;
    }
    .kingfar-wechat .link-h1-17-text{
      font-size: 30px;
      height: 36px;
      transform: rotate(10deg);
      line-height: 1.5;
    }
    .kingfar-wechat  .link-h1-17-content{
      height: 10px;
      width: 3px;
      transform: rotate(10deg)
    }
    .kingfar-wechat .link-h1-17-bottom{
      width: 2px;
      transform: rotate(10deg);
      height: 8px;
      background: #b1c3e5;
      margin-left: 2px;
    }
    .kingfar-wechat .link-h1-17-border{
      width: 40px;
      height: 1px;
      background: #b1c3e5;
    }
    .link-h1-17-text-content{
      font-size:18px;
    }
     `;
  }
}

export const h1_17 = new OneLevelH1To17();
