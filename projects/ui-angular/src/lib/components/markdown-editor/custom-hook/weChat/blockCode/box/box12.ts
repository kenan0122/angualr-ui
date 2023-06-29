import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box12 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box12
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="block">
    <section class="box12 bg-color"></section>
    <section class="box12-box">
      <section  class="box12-box-container">
          <section class="box12-content border-color">
              <section class="box12-content-text border-color">
                  <section class="box12-content-p box-style1">${htmlContent}</section>
              </section>
          </section>
      </section>
    </section>
</section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .block{
          margin: 20px 0px;
        }
        .kingfar-wechat .box12{
          height: 25px;
          border-radius: 20px;
          position: relative;
        }
        .kingfar-wechat .box12-box{
          margin-top: -18px;
          position: relative;
          z-index: 999;
          width: 100%;
        }
        .kingfar-wechat .box12-box-container{
          width: 100%;
          padding: 0 !important;
        }
        .kingfar-wechat .box12-content{
          border: 2px solid #007bff;
          padding: 2px;
          background: #f2f9ff;
          margin: 0 auto;
          color:#000;
        }
        .kingfar-wechat .box12-content-text{
          border: 1px dashed #007bff;
          text-align: left;
          padding: 10px;
          margin: 0 auto;
        }
        .kingfar-wechat .box12-content-p{
          font-size: 14px;
          font-weight: bold;
          color: #7C7586;
          line-height: 22px;
          padding: 0;
          margin: 0;
        }
        `;
  }
}

export const box12 = new Box12();
