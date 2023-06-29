import { BlockCodeConfig, INavigationType } from "../../../customHook";

class List5 extends BlockCodeConfig {
    private _contentArray = ['1.中国人类工效学学会：成立于1989年...', '2.中国用户体验联盟：成立于2015年...'];
    preSetType: INavigationType = INavigationType.List;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`list5
1.中国人类工效学学会：成立于1989年...
2.中国用户体验联盟：成立于2015年...
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate(this._contentArray);
    }

    private _getHtmlTemplate(htmlArray: string[]) {
        let list5Html = '';
        const currentIcon = `<svg t="1617344441909" style="transform: rotateY(180deg);" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1153" width="14" height="14" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M858.978462 531.692308l-368.64-356.824616h-354.461539v315.076923l381.636923 369.821539a63.015385 63.015385 0 0 0 86.252308 0l255.606154-248.123077a57.501538 57.501538 0 0 0 0-83.101539zM288.689231 380.061538a58.289231 58.289231 0 1 1 60.258461-58.28923 59.076923 59.076923 0 0 1-60.258461 58.28923z" fill="#888888" p-id="1154"></path></svg>`;
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

export const list5 = new List5()