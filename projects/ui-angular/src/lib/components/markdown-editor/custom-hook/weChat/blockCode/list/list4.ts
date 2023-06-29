import { BlockCodeConfig, INavigationType } from "../../../customHook";

class List4 extends BlockCodeConfig {
    private _contentArray = ['1.中国人类工效学学会：成立于1989年...', '2.中国用户体验联盟：成立于2015年...'];
    preSetType: INavigationType = INavigationType.List;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`list4
1.中国人类工效学学会：成立于1989年...
2.中国用户体验联盟：成立于2015年...
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate(this._contentArray);
    }

    private _getHtmlTemplate(htmlArray: string[]) {
        let list4Html = '';
        const currentIcon = `<svg t="1617342442191"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1150" width="14" height="14" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M789.333333 113.066667c8.533333 0 14.933333 2.133333 23.466667 4.266666 10.666667 4.266667 21.333333 12.8 27.733333 21.333334 6.4 10.666667 10.666667 21.333333 10.666667 32v682.666666c0 12.8-4.266667 23.466667-10.666667 32-6.4 10.666667-17.066667 17.066667-27.733333 21.333334-6.4 2.133333-14.933333 4.266667-23.466667 4.266666-17.066667 0-32-6.4-44.8-17.066666L512 669.866667 279.466667 893.866667c-12.8 10.666667-27.733333 17.066667-44.8 17.066666-8.533333 0-14.933333-2.133333-23.466667-4.266666-10.666667-4.266667-21.333333-12.8-27.733333-21.333334-6.4-10.666667-10.666667-21.333333-10.666667-32V170.666667c0-12.8 4.266667-23.466667 10.666667-32 6.4-10.666667 17.066667-17.066667 27.733333-21.333334 6.4-4.266667 14.933333-4.266667 23.466667-4.266666h554.666666z" p-id="1151" fill="#888888"></path></svg>`;
        if (htmlArray.length > 0) {
            list4Html =
                '<section class="block"><section>';
            htmlArray.forEach((option, index) => {
                if (option) {
                    const optionArray = option.split('.');
                    const newOption = optionArray.splice(1, optionArray.length).toString();
                    list4Html += `<section class="list4-option"><span class="list4-icon">${currentIcon}</span><span class="font-Size">[${index + 1
                        }]${newOption}</span></section>`;
                }
            });
            list4Html = list4Html + `</section></section>`;
        }
        return list4Html;
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

export const list4 = new List4()