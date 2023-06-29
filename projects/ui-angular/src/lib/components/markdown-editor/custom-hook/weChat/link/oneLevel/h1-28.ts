import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To28 extends LinkConfig {
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
    return `[01](h1-28 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="block" title="${currentText}" id="${id}">
      <section class="link-h1-28">
        <section class="link-h1-28-box">
          <p class="link-h1-28-p margin-0">${title}</p>
        </section>
        <section class="link-h1-28-text">
          <p class="link-h1-28-text-p margin-0 color">${currentText}</p>
        </section>
        <section class="link-h1-28-border">
          <section class="link-h1-28-border1"></section>
          <section class="link-h1-28-border2"></section></section></section>
</h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-28{
    display: flex;
    display:inline-block;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
   }
   .kingfar-wechat .margin-0{
    margin:0;
   }
   .kingfar-wechat .link-h1-28-box{
    align-self: flex-start;
    margin-bottom: -28px;
   }
   .kingfar-wechat .link-h1-28-p{
    font-size: 30px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color: #E7ECFF;
    line-height: 42px;
    letter-spacing: 1px;
   }
   .kingfar-wechat .link-h1-28-text{
    text-align: center;
    padding: 0px 18px 2px 14px;
   }
   .kingfar-wechat .link-h1-28-text-p{
    font-size: 16px;font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: 1px;
   }
   .kingfar-wechat .link-h1-28-border{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;z-index: 1;
   }
   .kingfar-wechat .link-h1-28-border1{
    width: 100%;
    height: 1px;
    margin-bottom: 2px;
    background: linear-gradient(297deg, rgba(18, 66, 180, 0) 0%, #0A42CA 100%);
   }
   .kingfar-wechat .link-h1-28-border2{
    height: 1px;width: 100%;background: linear-gradient(297deg, rgba(18, 66, 180, 0) 0%, #0A42CA 100%);
   }
     `;
  }
}

export const h1_28 = new OneLevelH1To28();
