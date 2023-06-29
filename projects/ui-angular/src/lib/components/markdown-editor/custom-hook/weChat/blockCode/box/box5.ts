import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box5 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box5
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="box5 border-color">
        <section class="flex-style">
            <section class="box5-border bg-color"></section>
            <section class="box5-border bg-color"></section>
        </section>
        <section class="padding10">
            <section class="box-style1">${htmlContent}</section>
        </section>
    </section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss() {
    return `
        .kingfar-wechat .box5 {
        box-sizing: border-box;
        margin: 20px 0;
        font-size: 14px;
        border-top: none;
        }
        .kingfar-wechat .flex-style {
        display: flex;
        }
        .kingfar-wechat .box5-border {
        flex: 1;
        height: 1px;
        }
        .kingfar-wechat .box5-text {
        margin-top: -12px;
        padding: 0 5px;
        }
        .padding10{
            padding:10px;
        }
        `;
  }
}

export const box5 = new Box5();
