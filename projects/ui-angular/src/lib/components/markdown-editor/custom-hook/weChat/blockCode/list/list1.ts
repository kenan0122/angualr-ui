import { BlockCodeConfig, INavigationType } from "../../../customHook";
class List1 extends BlockCodeConfig {
    private _contentArray = ['1.中国人类工效学学会：成立于1989年...', '2.中国用户体验联盟：成立于2015年...'];
    preSetType: INavigationType = INavigationType.List;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`list1
1.中国人类工效学学会：成立于1989年...
2.中国用户体验联盟：成立于2015年...
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate(this._contentArray);
    }

    private _getHtmlTemplate(htmlArray: string[]) {
        let list1Content =
            '<section class="list1 block"><section>'
        htmlArray.forEach(option => {
            if (option) {
                const optionArray = option.split('.');
                const newOption = optionArray.splice(2, optionArray.length).toString();
                list1Content += `<section class="list1-option "><span class="list1-option-span bg-color">${optionArray[0]}</span><span class="list1-font-weight">${optionArray[1]
                    }</span><span class="list1-option-content">${newOption}</span></section>
                            `
            }
        })
        list1Content = list1Content + '</section><section>'
        return list1Content;
    }

    readonly render = (codeSrc: any, sign: any, engine: any) => {
        const htmlArray = codeSrc.split(/[\n]/);
        return this._getHtmlTemplate(htmlArray);
    }

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
        `
    }
}

export const list1 = new List1()