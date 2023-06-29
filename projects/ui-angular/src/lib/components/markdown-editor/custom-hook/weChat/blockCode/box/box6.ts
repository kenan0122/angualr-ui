import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box6 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box6
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="box6 block">
        <section class="box6-box">
            <section class="box6-content border-color">
                <section class="box6-content-text border-color">
                    <section class="box6-content-p box-style1">${htmlContent}</section>
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
        .kingfar-wechat .box6 {
            width: 100%;
          }
          .kingfar-wechat .box6-box {
            width: 100%;
            padding: 0 !important;
          }
          .kingfar-wechat .box6-content {
            border: 2px solid #1890ff;
            padding: 2px;
          }
          .kingfar-wechat .box6-content-text {
            border: 1px dashed #1890ff;
            text-align: left;
            padding: 10px;
          }
          .kingfar-wechat .box6-content-p {
            font-size: 14px;
            font-weight: bold;
            color: #7c7586;
            line-height: 22px;
            padding: 0;
            margin: 0;
          }
          .kingfar-wechat .box6 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
        `;
  }
}

export const box6 = new Box6();
