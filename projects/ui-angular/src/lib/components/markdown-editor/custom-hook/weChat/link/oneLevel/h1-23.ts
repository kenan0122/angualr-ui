import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To23 extends LinkConfig {
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
    return `[01](h1-23 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="block" title="${currentText}" id="${id}">
      <section class="link-h1-23">
        <section class="link-h1-23-content">
        <section class="link-h1-23-text">
        <section class="link-h1-23-text-font">
          <p class="link-h1-23-text-p margin-0">${title}</p>
        </section>
        <section class="link-h1-23-right"></section>
      </section>
      <section class="link-h1-23-right-content bg-color">
        <p class="link-h1-23-right-p margin-0">${currentText}</p></section></section></section>
  </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-23{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
   }

   .kingfar-wechat .margin-0{
    margin:0;
   }
   .kingfar-wechat .link-h1-23-content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
   }
   .kingfar-wechat .link-h1-23-text{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    align-self: flex-start;
    margin-left: -18.1px;
    margin-bottom: -40.1px;
    z-index: 1;
   }
   .kingfar-wechat .link-h1-23-text-font{
    text-align: center;
    margin-bottom: -32.1px;
    z-index: 1;
   }
   .kingfar-wechat .link-h1-23-text-p{
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color: #333333;
    line-height: 25px;
    letter-spacing: 1px;
   }
   .kingfar-wechat .link-h1-23-right{
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 25px;
    border: 1px solid #333333;
    border-radius: 50%;
   }
   .kingfar-wechat .link-h1-23-right-content{
    text-align: left;
    padding: 9px 18px 7px 27px;
    background: rgba(235, 217, 212, 0.71);
    border: 1px solid #333333;
   }
   .kingfar-wechat .link-h1-23-right-p{
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    color:#fff;
    line-height: 22px;
    letter-spacing: 1px;
   }
     `;
  }
}

export const h1_23 = new OneLevelH1To23();
