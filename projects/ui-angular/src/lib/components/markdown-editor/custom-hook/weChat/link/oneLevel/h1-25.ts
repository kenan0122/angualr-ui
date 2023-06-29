import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To25 extends LinkConfig {
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
    return this._getHtmlTemplate(text, title);
  };

  createTemplate = (): string => {
    return `[01](h1-25 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="block" title="${currentText}" id="${id}">
      <section class="link-h1-25">
      <section class="link-h1-25-left">
        <section class="link-25-left-content">
          <p class="link-25-left-p margin-0">${title}</p>
        </section>
        <section class="link-25-right bg-color">
        <p class="link-25-right-p margin-0">${currentText}</p></section></section></section>
</h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-25{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
   }
   .kingfar-wechat .margin-0{
    margin:0;
   }
   .kingfar-wechat .link-h1-25-left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
   }

   .kingfar-wechat .link-25-left-content{
    text-align: center;align-self: flex-start;
    margin-bottom: -28.1px;
    margin-left: 6px;
    padding: 7px 9px;
    background: #FFFFFF;
    border-radius: 19px;
    border: 1px solid #617B9A;
    z-index: 1;
   }
.kingfar-wechat .link-25-left-p{
  font-size: 16px;font-family: PingFangSC-Semibold, PingFang SC;font-weight: bold;color: #617B9A;line-height: 22px;letter-spacing: 1px;
}

   .kingfar-wechat .link-25-right{
    text-align: left;
    padding: 7px 17px 7px 50px;
    background: #A9BCD3;
    border-radius: 2px;
   }

   .kingfar-wechat .link-25-right-p{
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 22px;
    letter-spacing: 1px;
   }
     `;
  }
}

export const h1_25 = new OneLevelH1To25();
