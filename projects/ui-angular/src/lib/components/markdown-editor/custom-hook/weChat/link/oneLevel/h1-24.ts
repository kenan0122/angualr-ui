import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To24 extends LinkConfig {
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
    return `[01](h1-24 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="block" title="${currentText}" id="${id}">
      <section class="link-h1-24">
        <section class="link-h1-24-left bg-color">
          <p class="link-h1-24-text margin-0">${title}</p>
        </section>
        <section class="link-h1-24-right border-color">
          <p class="link-h1-24-p margin-0 color">${currentText}</p> 
        </section>
      </section>
  </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-24{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .kingfar-wechat .margin-0{
    margin:0;
   }
   .kingfar-wechat .link-h1-24-left{
    text-align: center;
    padding: 8px 11px;
    border-radius: 50%;
    margin-right: -23.1px;
    z-index: 1;
   }

   .kingfar-wechat .link-h1-24-text{
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;font-weight: bold;
    color: #FFFFFF;
    line-height: 22px;
    letter-spacing: 1px;
   }
   .kingfar-wechat .link-h1-24-right{
    text-align: left;
    padding: 8px 17px 6px 27px;
    border-radius: 0px 19px 19px 0px;
    border: 1px solid #9CB8CA;
   }

   .kingfar-wechat .link-h1-24-p{
    font-size: 16px;font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: 1px;
   }
     `;
  }
}

export const h1_24 = new OneLevelH1To24();
