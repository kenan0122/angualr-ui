import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box11 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box11
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `  <section class="box11 block">
    <section  class="box11-top">
      <section class="box11-top-first  bg-color"></section>
      <section class="box11-top-first  bg-color"></section>
    </section>
    <section style="padding: 10px" class="box-style1">
      ${htmlContent}
      </section>
      <section class="box11-top">
      <section class="box11-top-last bg-color"></section>
      <section class="box11-top-last bg-color"></section>
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
          margin:20px 0;
        }
        .kingfar-wechat .box11-top{
          border-top: 1px solid #000;
          height: 8px
        }
        .kingfar-wechat .box11-top-first{
          width: 3px;
          height: 16px;
          margin-top: -8px;
          float: right;
          margin-right: 4px;
        }
        .kingfar-wechat .box11-top-last{
          width: 3px;
          height: 16px;
          margin-top:  -8px;
          margin-left: 4px;
          float: left;
        }
        `;
  }
}

export const box11 = new Box11();
