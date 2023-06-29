import { BlockCodeConfig, INavigationType } from '../../../customHook';
class Box4 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\`box4
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return ` <section class="box4-size-block">                        
        <section class="box-sizing-border">
            <section class="box4">
                <section class="box4-box"><section>
            </section>
        </section>
        <section class="box4-icon border-color">
            <section><svg viewBox="0 0 1 1" class="box4-svg"></svg></section>
        </section>
        <section class="box4-content">
            <section class="box4-content-output box-style1">
            ${htmlContent}
            </section></section></section>
        </section>
    </section>`;
  }

  private _getCss() {
    return `
        .kingfar-wechat .box4-size-block {
            margin: 40px 10px;
          }
          .kingfar-wechat .box-sizing-border {
            box-sizing: border-box;
          }
          .kingfar-wechat .box4 {
            display: flex;
            flex-flow: row nowrap;
            margin: 20px 0%;
            box-sizing: border-box;
          }
          .kingfar-wechat .box4-box {
            display: inline-block;
            vertical-align: top;
            align-self: stretch;
            width: auto;
            flex: 3 3 0%;
            background-color: #000;
            height: auto;
            box-sizing: border-box;
          }
          .kingfar-wechat .box4-icon {
            display: inline-block;
            width: 80px;
            vertical-align: top;
            border-style: solid;
            border-width: 3px;
            flex: 0 0 auto;
            align-self: stretch;
            height: auto;
            margin-top: -15px;
            margin-right: -77px;
            margin-bottom: -15px;
            box-sizing: border-box;
          }
          .kingfar .box4-svg {
            float: left;
            line-height: 0;
            width: 0;
            vertical-align: top;
          }
          .kingfar-wechat .box4-content {
            display: inline-block;
            width: auto;
            vertical-align: top;
            background-color: rgb(0, 0, 0);
            flex: 100 100 0%;
            align-self: stretch;
            border-width: 0px;
            height: auto;
            box-sizing: border-box;
            padding: 20px 10px;
          }
          .kingfar-wechat .box4-content-output {
            font-size: 14px;
            color: #fff;
            letter-spacing: 0px;
            box-sizing: border-box;
          }
        `;
  }
}

export const box4 = new Box4();
