import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box10 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box10
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return ` <section class="box10">
    <section class="box-style1">${htmlContent}</section>
  </section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .box10 {
            background: #f2f9ff;
            padding: 10px;
            margin: 10px 0;
            color:#000;
          }
        `;
  }
}

export const box10 = new Box10();
