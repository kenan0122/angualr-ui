import { BlockCodeConfig, INavigationType } from '../../../customHook';

export class Box3 extends BlockCodeConfig {
  private _content = `插入图片的大小以百分比为单位，指文章横向宽度的百分比，图片高会等比例缩放，以免发生变形！`;
  preSetType: INavigationType = INavigationType.Border;
  css: string = this._getCss();

  createTemplate = (): string => {
    return `
\`\`\` box3
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="box3 block">
        <section style="display:flex;">
        <section class="box3-box color">
        “
        </section>
        </section>
        <section style="padding:0 10px;" class="box-style1">${htmlContent}</section>
    </section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss() {
    return `
        .kingfar-wechat .box3 {
            display:flex;
            margin-left: 5px;
            padding: 10px 0px;
            border-width: 2px;
            border-style: solid;
            border-color: rgb(62, 62, 64);
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 14px;
        }
        .kingfar-wechat .box3-box {
            font-size:80px;
            margin-top: -10px;
            margin-left: -0.2em;
            float: left;
            line-height: 1em;
            height:48px;
        }
        .kingfar-wechat .info-title {
            font-weight: bold;
            font-size: 1rem;
            margin-top: 5px;
        }
        .kingfar-wechat .cls1 {
            fill: #1890ff;
        }
    `;
  }
}

export const box3 = new Box3();
