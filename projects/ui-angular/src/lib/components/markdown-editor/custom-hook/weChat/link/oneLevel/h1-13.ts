import { deleteFirst } from '../../../../shared/util';
import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH1To13 extends LinkConfig {
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
    return `[01](h1-13 '标题内容')`;
  };

  getHtml = (): string => {
    return this._getHtmlTemplate('标标题内容内', '01');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    if (title) {
      let currentText = deleteFirst(title);
      const id = this.getHrefId(title);
      return `<h2 class="link-h1-13 block border-left-color" id="${id}" title="${currentText}">
        <section class="link-h1-13-box bg-color">
            <section class="link-h1-13-content">
                <p style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;"><strong style="box-sizing: border-box;">${currentText}</strong></p>
            </section>
        </section>
    </h2>`;
    }
    return '';
  }

  private _getCss(): string {
    return `
      .kingfar-wechat .link-h1-13 {
        display: inline-block;
        width: 100%;
        vertical-align: top;
        border-left: 12px solid #1890ff;
        border-bottom-left-radius: 0px;
        padding: 0px 0px 0px 10px;
        box-sizing: border-box;
      }
      .kingfar-wechat .link-h1-13-box {
        display: inline-block;
        width: 100%;
        vertical-align: top;
        background-color: #1890ff;
        opacity: 0.7;
        padding: 10px;
        box-sizing: border-box;
      }
      .kingfar-wechat .link-h1-13-content {
        font-size: 16px;
        box-sizing: border-box;
      }
        `;
  }
}

export const h1_13 = new OneLevelH1To13();
