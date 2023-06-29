import { INavigationType, LinkConfig } from '../../../customHook';

class Link3 extends LinkConfig {
  preSetType: INavigationType = INavigationType.Link;
  css: string = this._getCss();

  readonly render = (
    leadingChar: string,
    text: string,
    link: string,
    title: string,
    ref: string,
    target: string
  ) => {
    return this._getHtmlTemplate(title, text);
  };

  createTemplate = (): string => {
    return `[下载](link_3 "https://cdn.ergolab.cn")`;
  };

  readonly getHtml = (): string => {
    return this._getHtmlTemplate('javascript:void(0)', '下载');
  };

  private _getHtmlTemplate(title: string, text: string): string {
    return `<section class="icon-download block bg-color"><a href=${title} target="_blank" download=${text} class="icon-download-alink"><svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" class="icon w-4 h-4"><g fill="none"><path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>${text}</a></section>`;
  }

  private _getCss(): string {
    return `
      .icon-download{
        display:flex;
        text-align: center;
        cursor: pointer;
        border-radius: .375rem;
        justify-content: center;
        align-items: center;
        column-gap: .5rem;
        padding: .375rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
        transition-property: all;
        transition-duration: .15s;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        display: inline-flex;
        background-color: #007bff;
        color:#fff;
      }
      .icon-download a{
        color:#fff !important;
        align-items: center;
      }
      .icon-download-alink{
        display:flex;
      }
      .icon-download-alink svg{
        margin-right:4px;
      }
      .icon-download:hover a{
        color:#fff;
        text-decoration: none !important;
      }
      .icon-download:hover {
        box-shadow:  0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;;
        background-color: #3c83f6;
      }
      .icon-download a:hover {
        background-color: var(--color-hover);
    }
    `;
  }
}

export const link_3 = new Link3();
