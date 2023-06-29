import { BlockCodeConfig, INavigationType } from "../../../customHook";

class List2 extends BlockCodeConfig {
    private _contentArray = ['1.中国人类工效学学会：成立于1989年...', '2.中国用户体验联盟：成立于2015年...'];
    preSetType: INavigationType = INavigationType.List;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`list2
1.中国人类工效学学会：成立于1989年...
2.中国用户体验联盟：成立于2015年...
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate(this._contentArray);
    }

    private _getHtmlTemplate(htmlArray: string[]) {
        let list2Html = '';
        if (htmlArray.length > 0) {
            list2Html =
                '<section class="list2 border-color color block"><section>'
            htmlArray.forEach(option => {
                if (option) {
                    const optionArray = option.split('.');
                    const newOption = optionArray.splice(1, optionArray.length).toString();
                    list2Html += `<section class="list2-option"><span class="list2-option-span color">${optionArray[0]
                        }</span><span class="list2-option-text">${newOption}</span></section>`;
                }
            });
            list2Html = list2Html + `</section></section>`;
        }
        return list2Html;
    }

    readonly render = (codeSrc: any, sign: any, engine: any) => {
        const htmlArray = codeSrc.split(/[\n]/);
        return this._getHtmlTemplate(htmlArray);
    }

    private _getCss() {
        return `
    .kingfar-wechat  .list2{
        border-left: 4px solid #007bff;
        font-size: 0.785rem;
        color: #007bff;
        letter-spacing: 2px;
        padding-right: 10px;
        padding-left: 10px
      }
    .kingfar-wechat .list2-option{
        display: block;
        margin: 10px 0px;
    }
    .kingfar-wechat .list2-option-span{
        color: #007bff;
        margin-right: 10px;
        letter-spacing: 2px;
    }
    .kingfar-wechat .list2-option-text{
        font-size: 0.875rem;
        color: #333;
    }
        `
    }
}

export const list2 = new List2()