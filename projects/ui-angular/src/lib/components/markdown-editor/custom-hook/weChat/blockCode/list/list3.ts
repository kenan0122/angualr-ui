import { BlockCodeConfig, INavigationType } from "../../../customHook";

class List3 extends BlockCodeConfig {
    private _contentArray = ['1.中国人类工效学学会：成立于1989年...', '2.中国用户体验联盟：成立于2015年...'];
    preSetType: INavigationType = INavigationType.List;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`list3
1.中国人类工效学学会：成立于1989年...
2.中国用户体验联盟：成立于2015年...
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate(this._contentArray);
    }

    private _getHtmlTemplate(htmlArray: string[]) {
        let list3Html = '';
        if (htmlArray.length > 0) {
            list3Html = '<section class="list3 block"><section>';
            htmlArray.forEach(option => {
                if (option) {
                    const optionArray = option.split('.');
                    const newOption = optionArray.splice(1, optionArray.length).toString();
                    list3Html += `<section class="list3-option"><span class="list3-option-span border-color"></span><span class="list3-option-span-text">${newOption}</span></section>`;
                }
            });
            list3Html = list3Html + `</section></section>`;
        }
        return list3Html;
    }

    readonly render = (codeSrc: any, sign: any, engine: any) => {
        const htmlArray = codeSrc.split(/[\n]/);
        return this._getHtmlTemplate(htmlArray);
    }

    private _getCss() {
        return `
    .kingfar-wechat .list3-option{
        display: block;
        margin: 2px 0px;
        line-height: 20px;
    }
    .kingfar-wechat .list2-option{
        color: #007bff;
        margin-right: 10px;
        letter-spacing: 2px;
    }
    .kingfar-wechat .list3-option-span{
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        border: 2px solid #007bff;
        margin-right: 10px;
        opacity: 0.8;
    }
    .kingfar-wechat .list3-option-span-text{
        font-size: 0.875rem;
        letter-spacing: 0.544px;
        line-height: 28px;
    }
        `
    }
}

export const list3 = new List3()