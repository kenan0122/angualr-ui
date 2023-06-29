import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To22 extends LinkConfig {
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
    return `[01](h1-22 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="link-h1-22 block" title="${currentText}" id="${id}">
      <section class="link-h1-22-box">
      <section  class="link-h1-22-content">
      <section class="link-h1-22-left border-color">
        <p class="link-h1-22-left-title margin-0 color">${title}</p>
      </section>
      <section class="link-h1-22-right"></section>
      <section class="link-h1-22-right-content border-color bg-color">
        <p class="link-h1-22-content-text margin-0">${currentText}</p></section></section></section>
  </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-22-box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
   }
   .kingfar-wechat .margin-0{
    margin:0;
   }
   .kingfar-wechat .link-h1-22-content{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .kingfar-wechat .link-h1-22-left{
    text-align: left;
    padding: 7px 3px 8px 9px;
    background: #ffffff;
    margin-right: -17.1px;
    border: 1px solid #A9BCD3;
    border-right: none;
    z-index: 1;
   }
   .kingfar-wechat .link-h1-22-left-title{
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color: #A9BCD3;
    line-height: 22px;
    letter-spacing: 1px;
   }
   .kingfar-wechat .link-h1-22-right{
    border-bottom: 7px solid #ffffff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    width: 0px;
    height: 0px;
    transform: rotate(90deg);
    margin-right: -41.1px;
    z-index: 1;
   }
   .kingfar-wechat .link-h1-22-right-content{
    text-align: left;
    padding: 8px 20px 7px 32px;
    border: 1px solid #A9BCD3;
    background: #A9BCD3;
   }
   .kingfar-wechat .link-h1-22-content-text{
    font-size: 16px;font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 22px;
    letter-spacing: 1px;
   }
     `;
  }
}

export const h1_22 = new OneLevelH1To22();
