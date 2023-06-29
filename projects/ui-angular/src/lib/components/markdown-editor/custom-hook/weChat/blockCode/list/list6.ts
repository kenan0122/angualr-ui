import { BlockCodeConfig, INavigationType } from "../../../customHook";

class List6 extends BlockCodeConfig {
    private _contentArray = ['1.中国人类工效学学会：成立于1989年...', '2.中国用户体验联盟：成立于2015年...'];
    preSetType: INavigationType = INavigationType.List;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`list6
1.中国人类工效学学会：成立于1989年...
2.中国用户体验联盟：成立于2015年...
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate(this._contentArray);
    }

    private _getHtmlTemplate(htmlArray: string[]) {
        let list5Html = '';
        const currentIcon = `<svg xmlns="http://www.w3.org/2000/svg" style="margin-top:4px"  width="14" height="10.83" viewBox="0 0 14 10.83"><defs><style>.cls-1{fill:#ccc;}.cls-2{fill:#a5a5a5;}</style></defs><title>样式3</title><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><g id="图层_2-2" data-name="图层 2"><g id="图层_1-2-2" data-name="图层 1-2"><rect class="cls-1" width="10.194" height="10.194"/><rect class="cls-2" x="7.822" y="4.652" width="6.178" height="6.178"/></g></g></g></g></svg>`;
        if (htmlArray.length > 0) {
            list5Html =
                '<section class="block"><section>';
            htmlArray.forEach((option, index) => {
                if (option) {
                    const optionArray = option.split('.');
                    const newOption = optionArray.splice(1, optionArray.length).toString();
                    list5Html += `<section class="list4-option"><span class="list4-icon">${currentIcon}</span><span class="font-Size">[${index + 1
                        }]${newOption}</span></section>`;
                }
            });
            list5Html = list5Html + `</section></section>`;
        }
        return list5Html;
    }

    readonly render = (codeSrc: any, sign: any, engine: any) => {
        const htmlArray = codeSrc.split(/[\n]/);
        return this._getHtmlTemplate(htmlArray);
    }

    private _getCss() {
        return `
    .kingfar-wechat .list4-option{
        display: flex;
        margin-top: 6px;
    }

    .kingfar-wechat .list4-icon{
        margin-right: 6px;
        width: 14px;
        height: 14px;
        flex-shrink: 0;
    }

    .kingfar-wechat .font-size{
        font-size: 12px;
        color: #888888;
    }
        `
    }
}

export const list6 = new List6()