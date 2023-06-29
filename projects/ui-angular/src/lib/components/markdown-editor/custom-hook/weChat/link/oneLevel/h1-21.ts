import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To21 extends LinkConfig {
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
    return `[01](h1-21 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('01', '标标题内容内');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (text) {
      let currentText = deleteFirst(text);
      const id = this.getHrefId(text);
      return `<h2 class="link-h1-21 block" title="${currentText}" id="${id}">
      <section class="link-h1-21-box">
      <section class="link-h1-21-box-content bg-color"></section>
      <section class="link-h1-21-first"></section>	
      <section class="link-h1-21-second  bg-color"></section>	
      <section class="link-h1-21-third"></section>	
      <section class="link-h1-21-fourth bg-color"></section>	
      <section class="link-h1-21-fifth"></section>	
      <section class="link-h1-21-sixth bg-color">${currentText}</section>	
      <section class="link-h1-21-seventh"></section>	
      <section class="link-h1-21-fourth  bg-color"></section>	
      <section class="link-h1-21-ninth"></section>	
      <section class="link-h1-21-second  bg-color"></section>	
      <section class="link-h1-21-eleventh"></section>	
      <section class="link-h1-21-box-content bg-color"></section>
      </section>
  </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
   .kingfar-wechat .link-h1-21{
    text-align:center;
    font-weight:bold;
    font-size:1rem;
   }
   .kingfar-wechat .link-h1-21-box{
    display: -webkit-box;    
    display: -webkit-flex;    
    display: flex;    
    margin:10px 20px;
   }
   .kingfar-wechat .link-h1-21-box-content{
    height:40px;		
    width:4px;	
   }
   .kingfar-wechat .link-h1-21-first{
    height:40px;		
    width:8px;	
   }
   .kingfar-wechat .link-h1-21-second{
    height:40px;		
    width:6px;	
   }
   .kignfar-editor .link-h1-21-third{
    height:40px;		
    width:6px;
   }
   .kingfar-wechat .link-h1-21-fourth{
    height:40px;		
    width:10px;
   }
   .kingfar-wechat .link-h1-21-fifth{
    height:40px;
    width:4px;
   }
   .kingfar-wechat .link-h1-21-sixth{		
    height:40px;		
    text-align: center;		
    color:#fff;		
    line-height: 40px;		
    font-size: 18px;        
    flex:1;        
    -webkit-flex:1;        
    -webkit-box-flex:1;	
   }
   .kingfar-wechat .link-h1-21-seventh{
    height:40px;		width:4px;
   }

   .kingfar-wechat .link-h1-21-ningth{
	
    height:40px;
    width:6px;
   }
   .kingfar-wechat .link-h1-21-tenth{
    background-color: #80DEEA;		
    height:40px;		
    width:6px;
   }
   .kingfar-wechat .link-h1-21-eleventh{
    height:40px;		
    width:8px;
   }
   .kingfar-wechat .link-h1-21-twelfth{
    background-color: #80DEEA;		
    height:40px;		
    width:4px;
   }
     `;
  }
}

export const h1_21 = new OneLevelH1To21();
