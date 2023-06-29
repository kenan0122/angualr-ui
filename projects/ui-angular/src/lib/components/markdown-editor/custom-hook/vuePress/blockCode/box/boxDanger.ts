import { BlockCodeConfig, INavigationType } from '../../../customHook';

class BoxDanger extends BlockCodeConfig {
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
    return `
    <div class="box-danger">
        ${htmlContent}
    </div>
    `;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const html = engine.makeHtml(codeSrc);
    return this._getHtmlTemplate(html);
  };

  private _getCss() {
    return `
    .kingfar-docs .box-danger{
      border-left-width: 8px;
      border-color:rgb(239 68 68);
      color:#202020;
      background:rgba(239, 68, 68,0.1);
      padding:0.5rem 1rem;
      margin:2rem 0;
    }`;
  }
}

export const boxDanger = new BoxDanger();
