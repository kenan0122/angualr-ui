import { BlockCodeConfig, INavigationType } from "../../../customHook";

class Hr4 extends BlockCodeConfig {
    preSetType: INavigationType = INavigationType.Hr;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`hr4
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate();
    }

    private _getHtmlTemplate() {
        return `<section class="hr4 bg-hr4"></section>`;
    }

    readonly render = (codeSrc: any, sign: any, engine: any) => {
        return this._getHtmlTemplate()
    }

    private _getCss() {
        return `
            .kingfar-wechat .hr4 {
                width: 80%;
                height: 2px;
                margin: 10px auto;
                background: linear-gradient(to right, transparent, #000000, transparent);
            }
        `
    }
}

export const hr4 = new Hr4()