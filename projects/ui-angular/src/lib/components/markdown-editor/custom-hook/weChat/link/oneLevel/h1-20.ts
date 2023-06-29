import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To20 extends LinkConfig {
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
    return `[01](h1-20 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="link-h1-20 block" title="${currentText}" id="${id}"><section class="link-h1-20-icon"><section><section class="link-h1-icon-text"><section class="link-h1-icon-text-content"><section class="link-h1-icon-bg bg-color"><p class="link-h1-20-icon-min-height" ><span class="link-h1-20-icon-spacing">${title}</span></p></section><section class="link-h1-20-icon-border border-color"><section class="link-h1-20-icon-last"></section></section></section></section></section></section><section class="link-h1-20-text color">${currentText}</section></h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-20-text{
    text-align:center;
    font-weight:bold;
    font-size:1rem;
   }
   .kingfar-wechat .link-h1-20-icon{
    color: rgb(51, 51, 51); 
    font-size: 17px; 
    letter-spacing: 0.544px; 
    line-height: 27.2px; 
    text-align: justify; 
   }
   .kingfar-wechat .link-h1-20-icon-min-height{
    clear: both; min-height: 1em;
   }
   .kingfar-wechat .link-h1-20-icon-spacing{
    letter-spacing: 0px;
   }
   .kingfar-wechat .link-h1-20-icon-border{
    margin-top: -2.3em; margin-right: auto; margin-left: auto; width: 3.6em; transform: rotate(-45deg); 
    transform-origin: right top 0px; border-top: 1px solid rgb(44, 102, 46);
   }

   .kingfar-wechat .link-h1-icon-text{
    text-align: center; font-size: 11px;
   }
   .kingfar-wechat .link-h1-icon-text-content{
    padding-bottom: 1.3em; display: inline-block; vertical-align: top;
   }
   .kingfar-wechat .link-h1-icon-bg{
    margin: auto; border-radius: 100%; 
    width: 2em; height: 2em; 
    border-style: solid;
    border-width: 2px; 
    font-size: 15px; 
    line-height: 1.8em; 
    color: rgb(255, 255, 255); 
   }
   .kingfar-wechat .link-h1-20-icon-last{
    margin: auto; 
    width: 0px; 
    border-top: 1.5em solid rgb(255, 255, 255); 
    border-left: 1.5em solid transparent; 
    border-right: 1.5em solid transparent;
   }
     `;
  }
}

export const h1_20 = new OneLevelH1To20();
