import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To26 extends LinkConfig {
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
    return `[01](h1-26 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="block" title="${currentText}" id="${id}">
      <section class="link-h1-26">
        <section class="link-h1-26-content">
        <section class="link-h1-26-bg link-h1-26-public bg-color"></section>
        <section class="link-h1-26-text link-h1-26-public bg-color"></section>
        <section class="link-h1-26-borderb border-color">
          <p class="link-h1-26-p margin-0 color">${currentText}</p>
        </section>
        <section class="link-h1-26-right link-h1-26-public bg-color"></section>
        <section class="link-h1-26-circle link-h1-26-public bg-color"></section>
        </section>
        </section>
</h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-26{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 6px;
   }
   .kingfar-wechat .margin-0{
    margin:0;
   }
   .kingfar-wechat .link-h1-26-content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
   }
   .kingfar-wechat .link-h1-26-public{
    width: 4px;
    height: 4px;
    border-radius: 50%;
    z-index: 1;
   }
   .kingfar-wechat .link-h1-26-bg{
    align-self: flex-start;
    margin-left: -6.1px;
    margin-bottom: -4px;
   }

   .kingfar-wechat .link-h1-26-text{
    align-self: flex-end;
    margin-right: -6.1px;
    margin-bottom: -2px;
   }
   .kingfar-wechat .link-h1-26-borderb{
    text-align: left;
    padding: 10px 12px 8px 14px;
    border-top: 1px dotted #475aed;
    border-bottom: 1px dotted #475aed;
   }
  .kingfar-wechat .link-h1-26-p{
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: 1px;
  }
  .kingfar-wechat .link-h1-26-right{
    align-self: flex-start;
    margin-left: -6.1px;
    margin-top: -2px;
  }
.kingfar-wechat .link-h1-26-circle{
  align-self: flex-end;
  margin-right: -6.1px;
  margin-top: -4px;
}
     `;
  }
}

export const h1_26 = new OneLevelH1To26();
