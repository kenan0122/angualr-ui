import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box13 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box13
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return ` <section>
    <section class="box13-title"><span></span> 
    <section class="box13 border-color"> </section>
    </section>
   
    <section class="box13-content box-style1">
    ${htmlContent}
    </section>
  </section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .box13-title{
          height: 25px;
          border-radius: 20px;
          font-size:20px;
          position: relative;
          width:40%;
          
        }
        .kingfar-wechat .box13-title span{
          width:40%;
          display:inline-block;
        }
        .kingfar-wechat .box13{
          border-bottom: 10px solid #007bff;
          margin-top: -10px
        }
        .kingfar-wechat .box13-content{
          background: #E4E2E2;
          padding: 10px;
        }
        `;
  }
}

export const box13 = new Box13();
