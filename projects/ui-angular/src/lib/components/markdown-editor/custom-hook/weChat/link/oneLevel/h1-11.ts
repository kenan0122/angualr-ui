import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To11 extends LinkConfig {
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
    return `[01](h1-11 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-11 block" id="${id}" title="${currentText}">
    <section class="link-h1-11-box">
        <section class="link-h1-11-icon bg-color">
            <section style="text-align: justify;box-sizing: border-box;">
                <p style="white-space: normal;margin: 0px;height:30px;padding: 0px;box-sizing: border-box;"></p>
            </section>
        </section>
    </section>
    <section class="link-h1-11-content">
        <section class="link-h1-11-text">
            <section class="link-h1-11-text-color">
                <strong>${currentText}</strong></p>
            </section>
        </section>
    </section>
</h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-h1-11 {
          display: inline-block;
          min-width: 10%;
          max-width: 100%;
          vertical-align: top;
          padding: 0px 0px 0px 30px;
          box-sizing: border-box;
          line-height: 1.5;
          font-size: 14px;
        }
        .kingfar-wechat .link-h1-11-box {
          transform: translate3d(-30px, 0px, 0px);
          margin: 0px 0% -30px;
          box-sizing: border-box;
        }
        .kingfar-wechat .link-h1-11-icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          vertical-align: top;
          overflow: hidden;
          border-width: 0px;
          border-radius: 100%;
          border-style: none;
          background-color: #1890ff;
          opacity: 0.5;
          box-sizing: border-box;
        }
        .kingfar-wechat .link-h1-11-content {
          transform: translate3d(-15px, 0px, 0px);
          box-sizing: border-box;
        }
        .kingfar-wechat .link-h1-11-text {
          display: inline-block;
          min-width: 10%;
          max-width: 100%;
          vertical-align: top;
          padding: 3px 0px;
          box-sizing: border-box;
        }
        `;
  }
}

export const h1_11 = new OneLevelH1To11();
