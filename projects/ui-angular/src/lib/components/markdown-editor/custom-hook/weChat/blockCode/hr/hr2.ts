import { BlockCodeConfig, INavigationType } from '../../../customHook';

class Hr2 extends BlockCodeConfig {
  preSetType: INavigationType = INavigationType.Hr;
  //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
  css: string = this._getCss();

  //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
  createTemplate = (): string => {
    return `
\`\`\`hr2
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate();
  };

  private _getHtmlTemplate() {
    return `<section class="hr2"><span class="hr2-box">- End -</span></section>`;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    return this._getHtmlTemplate();
  };

  private _getCss() {
    return `
            .kingfar-wechat .hr2 {
                padding-right: 0em; 
                margin:10px 0;
                padding-left: 0em; 
                position: relative; 
                clear: both; 
                min-height: 1em; 
                color: rgb(62, 62, 62); 
                font-size: 16px; 
                list-style-type: none; 
                -webkit-padding-start: 0px; 
                -webkit-margin-before: 0px; 
                -webkit-margin-after: 0px; 
                line-height: 25.6px; 
                text-align: center;
            }
            .kingfar-wechat .hr2-box {
                margin: 0px;
                padding: 0px; 
                font-size: 14px;
            }
        `;
  }
}

export const hr2 = new Hr2();
