import { BlockCodeConfig, INavigationType } from '../../../customHook';
class List9 extends BlockCodeConfig {
  private _contentArray = [
    '1.中国人类工效学学会：成立于1989年...',
    '2.中国用户体验联盟：成立于2015年...',
  ];
  preSetType: INavigationType = INavigationType.List;
  //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
  css: string = this._getCss();

  //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
  createTemplate = (): string => {
    return `
\`\`\`list9
1.人类工效学学会：成立于...
2.用户体验联盟：成立于...
\`\`\``;
  };

  getHtml = () => {
    return this._getHtmlTemplate(this._contentArray);
  };

  private _getHtmlTemplate(htmlArray: string[]) {
    let list1Content = `<section class="list9-size-block">                        
        <section class="list9-sizing-border">
            <section class="list9">
                <section class="list9-box"><section>
            </section>
        </section>
        <section class="list9-icon border-color">
            <section><svg viewBox="0 0 1 1" class="list9-svg"></svg></section>
        </section>
        <section class="list9-content">
            <section class="list9-content-output box-style1">
           `;
    htmlArray.forEach((option) => {
      if (option) {
        const optionArray = option.split('.');
        const newOption = optionArray.splice(2, optionArray.length).toString();
        list1Content += `<section class="list1-option "><span class="list1-option-span bg-color">${optionArray[0]}</span><span class="list1-font-weight">${optionArray[1]}</span><span class="list1-option-content">${newOption}</span></section>
                                  `;
      }
    });
    list1Content = list1Content + '</section><section>';

    list1Content += `</section></section></section>
        </section>
    </section>`;
    list1Content += '<section class="list1 block"><section>';

    return list1Content;
  }

  readonly render = (codeSrc: any, sign: any, engine: any) => {
    const htmlArray = codeSrc.split(/[\n]/);
    return this._getHtmlTemplate(htmlArray);
  };

  private _getCss() {
    return `
    .kingfar-wechat .list1-option {
        display: block;
        margin: 10px 0px;
      }
      .kingfar-wechat .list1-option-span{
        background-color: #007bff;
        font-weight: bold;
        font-size: 0.8rem;
        color: #fff;
        padding: 0 4px;
        margin-right: 10px;
      }
      .kingfar-wechat .list1-font-weight{
        font-weight:bold;
      }
      .kingfar-wechat .list1-option-content{
        font-size: 0.75rem;
      }
    .kingfar-wechat .list9-size-block {
        margin: 40px 10px;
      }
      .kingfar-wechat .box-sizing-border {
        box-sizing: border-box;
      }
      .kingfar-wechat .list9 {
        display: flex;
        flex-flow: row nowrap;
        margin: 20px 0%;
        box-sizing: border-box;
      }
      .kingfar-wechat .list9-box {
        display: inline-block;
        vertical-align: top;
        align-self: stretch;
        width: auto;
        flex: 3 3 0%;
        background-color: #000;
        height: auto;
        box-sizing: border-box;
      }
      .kingfar-wechat .list9-icon {
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
      .kingfar .list9-svg {
        float: left;
        line-height: 0;
        width: 0;
        vertical-align: top;
      }
      .kingfar-wechat .list9-content {
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
      .kingfar-wechat .list9-content-output {
        font-size: 14px;
        color: #fff;
        letter-spacing: 0px;
        box-sizing: border-box;
      }
        `;
  }
}

export const list9 = new List9();
