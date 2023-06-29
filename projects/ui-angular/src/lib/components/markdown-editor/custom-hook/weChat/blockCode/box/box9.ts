import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box9 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box9
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="box5 border-color">
        <section class="flex-style">
        <section class="box6-border bg-color"></section>
            <section class="box5-text">tip</section>
            <section class="box5-border bg-color"></section>
        </section>
        <section class="padding10">
            <sectionclass="box-style1">${htmlContent}</sectionclass=>
        </section>
    </section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss(): string {
    return `
        .kingfar-wechat .box5 {
            border: 1px solid #1890ff;
            box-sizing: border-box;
            margin-top: 40px;
            font-size: 14px;
            border-top: none;
          }
          .kingfar-wechat .flex-style {
            display: flex;
          }
          .kingfar-wechat .box5-border {
            flex: 1;
            height: 1px;
            background: #1890ff;
          }
          .kingfar-wechat .box5-text {
            margin-top: -12px;
            padding: 0 5px;
          }
          .kingfar-wechat .padding10{
            padding:10px;
          } 
        `;
  }
}

export const box9 = new Box9();
