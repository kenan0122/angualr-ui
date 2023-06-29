import { BlockCodeConfig, INavigationType } from "../../../customHook";

class List8 extends BlockCodeConfig {
    private _contentArray = ['1.中国人类工效学学会：成立于1989年...', '2.中国用户体验联盟：成立于2015年...'];
    preSetType: INavigationType = INavigationType.List;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`list8
1.中国人类工效学学会：成立于1989年...
2.中国用户体验联盟：成立于2015年...
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate(this._contentArray);
    }

    private _getHtmlTemplate(htmlArray: string[]) {
        let list8Html = '';
        if (htmlArray.length > 0) {
            list8Html = '<section><section>';
            htmlArray.forEach(option => {
                if (option) {
                    const optionArray = option.split('.');
                    const newOption = optionArray.splice(2, optionArray.length).toString();
                    list8Html += `<section class="list8-option"><span class="list8-option-span">${optionArray[0]}</span><span>${optionArray[1]}</span><span class="list8-option-content">${newOption}</span></section>`;
                }
            });
            list8Html = list8Html + `</section></section>`;
        }
        return list8Html;
    }

    readonly render = (codeSrc: any, sign: any, engine: any) => {
        const htmlArray = codeSrc.split(/[\n]/);
        return this._getHtmlTemplate(htmlArray);
    }

    private _getCss() {
        return `
    .kingfar-wechat .list8-option{
        display: block;
        margin: 10px 0px;
    }
    .kingfar-wechat .list8-option-content{
        font-size: 0.75rem;
    }
    .kingfar-wechat .list8-option-span{
        border: 1px solid #000;
        font-size: 0.8rem;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 8px;
        text-align: center;
        border-radius: 8px;
        line-height: 14px;
    }
        `
    }
}

export const list8 = new List8()