import { BlockCodeConfig, INavigationType } from "../../../customHook";

class Hr3 extends BlockCodeConfig {
    preSetType: INavigationType = INavigationType.Hr;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`hr3
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate();
    }

    private _getHtmlTemplate() {
        return `<section class="hr3">----------&nbsp;&nbsp;未完待续&nbsp;&nbsp;----------</section>`;
    }

    readonly render = (codeSrc: any, sign: any, engine: any) => {
        return this._getHtmlTemplate()
    }

    private _getCss() {
        return `
            .kingfar-wechat .hr3 {
                display:flex;
                justify-content:center;
                margin:10px 0;
            }
        `
    }
}

export const hr3 = new Hr3()