import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box14 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box14
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="box14 border-color">
    <section class="box14-left-content">
        <section class="box14-left-content-top bg-color"><br></section>
        <section class="box14-left-content-bottom bg-color"><br></section>
    </section>
    <section class="box14-content box-style1">
    ${htmlContent}
    </section>
    <section class="box14-bg">
      <section class="box14-right-bottom-small"></section>
      <section class="box14-right-bottom-big"></section>
    </section>
  </section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .box14{
          border:1px solid #38b2ac;
          margin:20px 0;
        }
        .kingfar-wechat .box14-left-content {
          margin-bottom: -36px;
          margin-left: -2px;
        }
        .kingfar-wechat .box14-left-content p {
          margin:0;
        }
        .kingfar-wechat .box14-left-content-top {
          box-sizing: border-box;
          width: 30px;
          height: 6px;
          overflow: hidden;
          margin-top:-4px;
      }
      .kingfar-wechat .box14-content{
        padding:30px 10px 0 10px;
      }
      .kingfar-wechat .box14-left-content-bottom {
        box-sizing: border-box;
        width: 6px;
        height: 30px;
        overflow: hidden;
        margin-left: -2px;
        margin-top: -6px;
    }
    .kingfar-wechat .box14-right-bottom-small{
     width:8px;
     border-radius: 4px;
     height:8px;
     background:#F39500;
     text-align:right;
     display: inline-block;
     margin-top:-10px;
    }
    .kingfar-wechat .box14-bg{
      text-align:right;
      overflow:hidden;
    }
    .kingfar-wechat .box14-right-bottom-big{
      width:36px;
      height:36px;
      border-radius:18px;
      background:#f39500;
      text-align:right;
      display:inline-block;
      margin-right:-15px;
      margin-bottom:-15px;
    }
        `;
  }
}

export const box14 = new Box14();
