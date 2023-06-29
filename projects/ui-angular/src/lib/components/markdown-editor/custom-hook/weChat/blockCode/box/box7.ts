import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box7 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box7
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="block"><section class="box7-content border-color box-style1" >${htmlContent}</section></section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss() {
    return `
        .kingfar-wechat .box7-content {
            border: 4px solid #1890ff;
            padding: 10px;
            box-sizing: border-box;
        }
        `;
  }
}

export const box7 = new Box7();
