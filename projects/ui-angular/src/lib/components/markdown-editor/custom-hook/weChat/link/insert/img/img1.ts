import { INavigationType, LinkConfig } from "../../../../customHook";

class Img1 extends LinkConfig {
    preSetType: INavigationType = INavigationType.Insert;
    css: string = '';
    //测试地址后期需替换
    private _testImg = 'https://cdnapi.ergolab.cn/api/cdn/files/Teams/Picture/0/b9061806-35fb-306f-374b-3a00edb7d6d7/jsjuHi7cq24uv6fLFcx.jpg';

    readonly render = (leadingChar: string, text: string, link: string, title: string, ref: string, target: string) => {
        return this._getHtmlTemplate(title, text)
    };
   createTemplate = () => {
        return `[null,1,2](img-1 ${this._testImg})`
    };
    readonly getHtml = () => {
        return this._getHtmlTemplate(this._testImg, 'null,1,2');
    };
    private _getHtmlTemplate(title: string, text: string) {
        let textArray = text.split(',');
        return `
        <section class="img1-box">
        <img src="${title}" class="img1 border-color"  style="max-width:${textArray[0]};border-width:${textArray[1]}px;max-height:${textArray[2]}px" loading="lazy" alt="" crossorigin="anonymous">
</section>
        `
    }
}

export const img1 = new Img1();