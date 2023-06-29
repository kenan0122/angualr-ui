import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';

class OneLevelH1To4 extends LinkConfig {
  preSetType: INavigationType = INavigationType.OneLevel;
  css: string = this._getCss();

  readonly render = (
    leadingChar: string,
    text: string,
    link: string,
    title: string,
    ref: string,
    target: string
  ) => {
    return this._getHtmlTemplate(title, text);
  };

  createTemplate = (): string => {
    return `[01](h1-4 '标题内容')`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-4 block" id="${id}" title="${currentText}">
                <section class="link-h1-4-box">- ${currentText} -</section>
                <section class="link-h1-4-content">
                    <section class="link-flex-1">
                        <section class="link-h1-4-left-top-border bg-color"><br></section>
                            <section class="link-h1-4-left-bottom-border bg-color"><br></section>
                        </section>
                        <section class="link-h1-4-text">${text}</section>
                        <section class="link-flex-1">
                            <section class="link-h1-4-right-top-border bg-color"><br></section>
                            <section class="link-h1-4-right-bottom-border bg-color"><br></section>
                        </section>
                    </section>
            </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
        .kingfar-wechat .link-h1-4 {
            margin: 20px auto;
            text-align: center;
          }
          .kingfar-wechat .link-h1-4-box {
            font-size: 18px;
            letter-spacing: 1.5px;
            text-align: center;
            font-weight: bold;
            transform: skewX(-10deg);
          }
          .kingfar-wechat .link-h1-4-content {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .kingfar-wechat .link-h1-4-left-top-border {
            box-sizing: border-box;
            width: 40%;
            height: 1px;
            background-color: #1890ff;
            margin-left: 60%;
            overflow: hidden;
          }
          .kingfar-wechat .link-h1-4-left-bottom-border {
            box-sizing: border-box;
            width: 95%;
            height: 1px;
            background-color: #1890ff;
            margin-top: 4px;
            overflow: hidden;
          }
          .kingfar-wechat .link-h1-4-text {
            margin: 0px 6px;
            font-size: 16px;
            letter-spacing: 1.5px;
          }
          .kingfar-wechat .link-h1-4-right-top-border {
            box-sizing: border-box;
            width: 60%;
            height: 1px;
            background-color: #1890ff;
            overflow: hidden;
          }
          .kingfar-wechat .link-h1-4-right-bottom-border {
            box-sizing: border-box;
            width: 95%;
            height: 1px;
            background-color: #1890ff;
            margin-top: 4px;
            margin-left: 5%;
            overflow: hidden;
          }
         .kingfar-wechat .link-flex-1 {
            flex: 1;
          }
        `;
  }
}

export const h1_4 = new OneLevelH1To4();
