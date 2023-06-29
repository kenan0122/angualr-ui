import { BlockCodeConfig, INavigationType } from '../../../customHook';

class Box1 extends BlockCodeConfig {
  private _content = `遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！`;
  preSetType: INavigationType = INavigationType.Border;
  //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
  css: string = this._getCss();

  //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
  createTemplate = (): string => {
    return `
\`\`\`box1
${this._content}
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._content);
  };

  private _getHtmlTemplate(htmlContent: string) {
    return `<section class="block">
        <section class="box1">
            <section class="box1-left">
                <section class="box1-left-content">
                    <section class="box1-left-content-top bg-color"><br></section>
                    <section class="box1-left-content-bottom bg-color"><br></section>
                </section>
            </section>
            <section class="box1-box">
                <section class="box1-box-content">
                    <section class="box1-box-overflow-hidden"><br></section>
                    <section class="box-style1">
                        ${htmlContent}
                    </section>
                    <section  class="box1-box-overflow-hidden"><br>
                    </section>
                </section>
            </section>
            <section class="box1-right">
                <section class="box1-right-box">
                    <section class="box1-right-top bg-color"><br></section>
                    <section class="box1-right-bottom bg-color"><br></section>
                </section>
            </section>
        </section>
    </section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss() {
    return `
            .kingfar-wechat .box1 {
            margin: 10px 5px;
            }
            .kingfar-wechat .box1-left {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            }
            .kingfar-wechat .box1-left-content {
            margin-bottom: -36px;
            margin-left: -2px;
            }
            .kingfar-wechat .box1-left-content-top {
            box-sizing: border-box;
            width: 25px;
            height: 12px;
            overflow: hidden;
            }
            .kingfar-wechat .box1-left-content-bottom {
            box-sizing: border-box;
            width: 6px;
            height: 30px;
            overflow: hidden;
            }
            .kingfar-wechat .box1-box {
            border-color: rgb(235, 238, 237);
            border-style: solid;
            border-width: 2px;
            box-sizing: border-box;
            }
            .kingfar-wechat .box1-box-content {
            text-align: justify;
            line-height: 1.75em;
            letter-spacing: 1.5px;
            font-size: 14px;
            padding: 10px;
            box-sizing: border-box;
            }
            .kingfar-wechat .box1-box-overflow-hidden {
            height: 0px;
            overflow: hidden;
            }
            .kingfar-wechat .box1-right {
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            }
            .kingfar-wechat .box1-right-box {
            margin-top: -31px;
            margin-right: -2px;
            }
            .kingfar-wechat .box1-right-top {
            box-sizing: border-box;
            width: 6px;
            height: 30px;
            margin-left: 19px;
            overflow: hidden;
            }
            .kingfar-wechat .box1-right-bottom {
            box-sizing: border-box;
            width: 25px;
            height: 12px;
            margin-top: -6px;
            overflow: hidden;
            }
        `;
  }
}

export const box1 = new Box1();
