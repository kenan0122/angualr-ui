import { BlockCodeConfig, INavigationType } from '../../../customHook';
export class Box2 extends BlockCodeConfig {
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();
  private _content = `彩页（Direct mail,缩写DM），意为快讯商品广告，通常由8开或16开广告纸正反面彩色印刷而成。DM可以直接将广告信息传送给真正的受众，而其它广告媒体形式只能将广告信息笼统地传递给所有受众，而不管受众是否是广告信息的真正受众`;

  createTemplate = () => {
    return `
\`\`\` box2
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  render = (codeSrc: string, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="box2 shadow-color"><section class="box2-box box-style1">${htmlContent}</section></section>`;
  }

  private _getCss() {
    return `
            .kingfar-wechat .box2 {
                margin: 20px 4px;
                margin-top: 1pem;
                border: 1px solid #ebeeed;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                font-size: 14px;
            }
            .kingfar-wechat .box2-box {
                padding: 10px;
            }
          `;
  }
}
export const box2 = new Box2();
