import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To2 extends LinkConfig {
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
    return `[01](h1-2 '标题内容')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-2" title="${currentText}" id=${id}><section class="link-h1-2-box"><span class="warp-box"><span class="warp-box-first color">${text}</span><span class="warp-box-second">${text}</span> <span class="link-h1-2-content">${currentText}</span></span><span class="link-h1-2-border bg-color"></span></section></h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
        .kingfar-wechat .link-h1-2 {
            margin: 20px 0;
            text-align: center;
          }
        
          .kingfar-wechat .link-h1-2-box {
            display: inline-block;
          }
          .kingfar-wechat .warp-box{
            font-size: 28px;
            margin-left: -16px;
            margin-right: 0px;
          }
          .kingfar-wechat .warp-box-first{
            line-height: 24px;
            letter-spacing: 1px;
            margin-right: -38px;
            margin-top: 0px;
            transform: translate3d(0px, 4px, 0px);
            box-sizing: border-box;
            text-shadow: none;
            display: inline-block;
            font-size: 28px;
          } 
          .kingfar-wechat .warp-box-second{
            transform: translate3d(1px, 2px, 0px);
            color: #FFFFFF;
            line-height: 24px;
            letter-spacing: 1px;
            text-shadow:
            2px 1px 0px #333, 1px 0px 0px #333, -1px 0px 0px #333, 0px -1px 0px #333, 0px 1px 0px #333, -1px -1px 0px #333, -1px 1px 0px #333, 1px -1px 0px #333;
            box-sizing: border-box;
            display: inline-block;
            font-size: 28px;
          }
          .kingfar-wechat .link-h1-2-content{
            font-size: 1rem;
            color: #fff;
            line-height: 22px;
            letter-spacing: 1px;
            text-shadow:
            2px 1px 0px #333,1px 0px 0px #333, -1px 0px 0px #333, 0px -1px 0px #333, 0px 1px 0px #333, -1px -1px 0px #333, -1px 1px 0px #333, 1px -1px 0px #333;;
            margin: 0;
            margin-left: 5px;
          }
          .kingfar-wechat .link-h1-2-border{
            ine-height: 1.5;
            font-size: 14px;
            height: 0.4rem;
            width: 40%;
            background: #2196f3;
            text-align: right;
            display: inline-block;
            float: right;
            border-radius: 0.3rem;
            margin-top: -8px;
          }
        `;
  }
}

export const h1_2 = new OneLevelH1To2();
