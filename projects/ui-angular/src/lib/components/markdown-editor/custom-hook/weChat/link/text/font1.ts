import { BlockCodeConfig, INavigationType } from '../../../customHook';

class Font1 extends BlockCodeConfig {
  private _content = `基础字体`;
  preSetType: INavigationType = INavigationType.Text;
  //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
  css: string = this._getCss();

  //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
  createTemplate = (): string => {
    return `
\`\`\`font1
${this._content}
\`\`\``;
  };

  readonly getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section clss="font-base-size-box bg-transperent"><section class="font-base-size-box">${htmlContent}</section></section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss() {
    return `
            .kingfar-wechat .font-base-size-box{
                font-size: 14px;
                line-height: 2;
            }
            .kingfar-wechat .bg-transperent{
                background: transparent;
                border: none;
            }
        `;
  }
}

export const font1 = new Font1();
