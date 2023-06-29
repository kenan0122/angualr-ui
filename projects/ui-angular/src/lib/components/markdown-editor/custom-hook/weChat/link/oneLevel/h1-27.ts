import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To27 extends LinkConfig {
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
    return `[01](h1-27 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="block" title="${currentText}" id="${id}">
      <section class="link-h1-27">
        <section class="link-h1-27-box">
          <p class="link-h1-27-p6 margin-0 color">
          <strong class="link-h1-27-strong">${title}</strong>
          </p>
          <section class="link-h1-27-text">
            <br class="link-h1-27-br"></section>
          </section>
          <section class="link-h1-27-title"><p class="link-h1-27-title-p color margin-0"><span class="link-h1-27-title-span"><strong>${currentText}</strong></span></p></section></section>
</h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-27{
    margin-top: 20px;
    outline: 0px;
    max-width: 100%;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
   }
   .kingfar-wechat .margin-0{
    margin:0;
   }
   .kingfar-wechat .link-h1-27-box{
    outline: 0px;max-width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
   }
   .kingfar-wechat .link-h1-27-p6{
    vertical-align:inherit;
    margin-right: 3px;
    margin-left: 3px;
    outline: 0px;
    max-width: 100%;
    font-size: 38px;
    letter-spacing: 1.5px;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
   }
   .kingfar-wechat .link-h1-27-strong{
    outline: 0px;max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;
   }

   .kingfar-wechat .link-h1-27-strong1{
    outline: 0px;max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;
   }

   .kingfar-wechat .link-h1-27-text{
    box-sizing:border-box;
    margin-bottom: -12px;
    margin-left: -42px;
    outline: 0px;
    max-width: 100%;
    width: 52px;
    height: 52px;
    background-image: linear-gradient(to right bottom, rgba(254, 254, 254, 0) 0%, rgba(254, 254, 254, 0) 49.3%, #00478b 49.3%, #00478b 50.7%, #ffffff 50.7%, #ffffff 100%);
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    overflow: hidden;
    overflow-wrap: break-word !important;
   }
   .kingfar-wechat .link-h1-27-br{
    outline: 0px;
    max-width: 100%;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
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
.kingfar-wechat .link-h1-27-title{
  margin-top:-10px;
  padding-right: 25px;
  padding-left: 25px;
  text-align: justify;
  line-height: 1.75em;
  letter-spacing: 1.5px;
  font-size: 14px;
}
.kingfar-wechat .link-h1-27-title-p{
  text-align:left;
  vertical-align:inherit;
  margin-right: 3px;
  margin-left: 3px；
}
.kingfar-wechat .link-h1-27-title-span{
 font-size: 20px;
 margin-left:10px;
}
     `;
  }
}

export const h1_27 = new OneLevelH1To27();
