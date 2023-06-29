import { BlockCodeConfig, INavigationType } from "../../../customHook";

class Hr1 extends BlockCodeConfig {
    preSetType: INavigationType = INavigationType.Hr;
    //😂😂注意:样式最后会全局使用再新添加样式的时候需要注意不能和使用中的命名相同。
    css: string = this._getCss();

    //😂😂这里的return的内容不能删除偶！因为输出调用markdown的时候不能有空格
    createTemplate = (): string => {
        return `
\`\`\`hr1
\`\`\``
    }

    getHtml = () => {
        return this._getHtmlTemplate();
    }

    private _getHtmlTemplate() {
        return `<section class="hr1">
        <section class="hr1-left border-color"></section>
        <section class="hr-border bg-color"></section>
        <section class="hr1-left border-color"></section>
    </section>`;
    }

    readonly render = (codeSrc: any, sign: any, engine: any) => {
        return this._getHtmlTemplate()
    }

    private _getCss() {
        return `
            .kingfar-wechat .hr1 {
                display: flex;
                justify-content: space-around;
            }
            .kingfar-wechat .hr1-left {
                width: 45%;
                height: 1px;
                border-bottom: 1px solid #000;
                opacity: 0.4;
            }
            .kingfar-wechat .hr-border{
                border-radius: 3px;
                width: 6px;
                height: 6px;
                margin-top: -2px;
            }
        `
    }
}

export const hr1 = new Hr1()