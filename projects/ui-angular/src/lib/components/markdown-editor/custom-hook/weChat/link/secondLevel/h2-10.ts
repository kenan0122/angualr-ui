import { INavigationType, LinkConfig } from '../../../customHook';
class OneLevelH2To10 extends LinkConfig {
  preSetType: INavigationType = INavigationType.SecondLevel;
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
    return `[标题内容](h2-10)`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('', '标题内容');
  };

  protected _getHtmlTemplate = (title: string, text: string): string => {
    const id = this.getHrefId(text);
    return ` <h3 class="link-h2-10"  title="${text}" id="${id}"><section class="link-h2-10-box border-left-color border-bottom-color"><section class="link-h2-10-box-content"><section class="link-h2-10-box-text color"><strong style="box-sizing: border-box;">${text}&nbsp; &nbsp;</strong></section></section><section class="link-h2-10-box-bg"><section class="link-h2-10-box-bg-color bg-color"><br></section></section></section></h3>`;
  };

  private _getCss(): string {
    return `
    .kingfar-wechat .link-h2-10 {
        margin: 10px 0px;
        line-height: 1.5;
        font-size: 14px;
    }
    .kingfar-wechat .link-h2-10-box {
        display: inline-block;
        vertical-align: bottom;
        width: auto;
        align-self: flex-end;
        flex: 0 0 auto;
        height: auto;
        box-sizing: border-box;
        padding-left: 6px;
        border-left: 1px solid #1890ff;
        border-bottom: 1px solid #1890ff;
    }
    .kingfar-wechat .link-h2-10-box-content {
        transform: translate3d(6px, 0px, 0px);
        margin-right: 0%;
        margin-bottom: -7px;
        margin-left: 0%;
        box-sizing: border-box;
    }
    .kingfar-wechat .link-h2-10-box-text {
        color: #1890ff;
        line-height: 1;
        letter-spacing: 1px;
        padding-right: 6px;
        padding-left: 6px;
        box-sizing: border-box;
    }
    .kingfar-wechat .link-h2-10-box-bg {
        text-align: center;
        font-size: 0px;
        margin-right: 0%;
        margin-bottom: 5px;
        margin-left: 0%;
        box-sizing: border-box;
    }
    .kingfar-wechat .link-h2-10-box-bg-color {
        display: inline-block;
        width: 100%;
        height: 12px;
        vertical-align: top;
        overflow: hidden;
        background-color: #1890ff;
        opacity: 0.4;
        box-sizing: border-box;
        line-height: 0;
    }
        `;
  }
}

export const h2_10 = new OneLevelH2To10();
