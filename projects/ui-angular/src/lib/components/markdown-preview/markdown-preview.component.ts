import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  copyList,
  IDropDownType,
  IOption,
  themeColorList,
  ThemeColorType,
} from '../markdown-editor/compontent/custom-navigation/custom-navigation.types';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  defaultMarkdownPreviewSetting,
  IMarkdownPreviewSetting,
  isMobile,
} from './markdown-preview-type';
import {
  copyContent,
  ergoLABwaterMarker,
  getArticleStyle,
  kingfarWaterMarker,
  previewPattern,
  removeStyleMarker,
} from '../markdown-editor/shared/util';
import * as juice from 'juice';
import 'tocbot/dist/tocbot.js';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IconChevronDown } from '@psylab/icons-path';
import { Mode } from '../markdown-editor/shared/markdown-editor';
import { themeStyle } from '../markdown-editor/custom-hook/weChat/css/theme';
import { vuePressBase } from '../markdown-editor/custom-hook/vuePress/css/util';

@Component({
  selector: 'kf-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.scss'],
})
export class MarkdownPreviewComponent implements OnInit, AfterViewInit {
  @Input() setting: IMarkdownPreviewSetting = defaultMarkdownPreviewSetting;
  private _htmlData: string = '';
  private _markdownData: string = '';
  isMobile: boolean = false;
  showToc: boolean = false;
  htmlContent: SafeHtml = '';
  //浏览器获取参数信息
  isHighlight: boolean = true;
  isWideScreen: boolean = true;
  isKingfar: boolean = true;
  themeType: ThemeColorType = ThemeColorType.Blue;
  themeColor: string = themeColorList[0].name;
  path = IconChevronDown;
  isDocs = this.setting.articleType === Mode.VuePress;

  get copyTypes(): IDropDownType[] {
    return copyList;
  }
  get themeColors(): IDropDownType[] {
    return themeColorList;
  }

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private _message: NzMessageService,
    private _route: Router
  ) {}

  ngOnInit() {
    this._htmlData = this.setting.html;
    this._markdownData = this.setting.markdown;
    this.route.queryParams.subscribe((params: Params) => {
      this.isHighlight = params['isHighlight'] === 'true';
      this.isWideScreen = params['isWideScreen'] === 'true';
      this.isKingfar = params['isKingfar'] === 'true';
      this.themeType = Number(params['themeColor']);
    });
    //初始化导航的模式
    this._initNavigation();
    // this._htmlData = this._getWeChatMarkdown();
    this.getWaterMarker(false);
    this._getEditorHtml();
    this.showToc = this.setting.showToc;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      //baseUrl:cdn/projects/${this.slug}/article-detail/${this.shortId}
      window['tocbot'].init({
        // Where to render the table of contents.
        tocSelector: '.js-toc',
        // Where to grab the headings to build the table of contents.
        contentSelector: '.aritcle-content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h1, h2, h3',
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: false,
        headingsOffset: 40,
        scrollSmoothOffset: -40,
        collapseDepth: 6,
        scrollSmooth: true,
        ignoreHiddenElements: true,
        basePath: this.setting.baseUrl,
        onClick: (e) => {
          const event: any = e;
          if (event) {
            const elementHref = event.target.href;
            if (!elementHref) return false;
          }
          return false;
        },
      });
    }, 0);
  }

  getJuiceCurrentHtml() {
    const currentJuice: any = juice;
    let currentHtml = '';
    //兼容打包外部使用
    if (currentJuice && currentJuice.default) {
      currentHtml = currentJuice.default(this._htmlData);
    } else {
      currentHtml = currentJuice(this._htmlData);
    }
    return currentHtml;
  }

  private _getEditorHtml() {
    //html根据类型不同加载不同样式
    if (this.setting.articleType === Mode.WeChat) {
      //这里需要单独处理因为复制的时候需要转化为juice模式
      this._htmlData =
        this._htmlData + `<style>${getArticleStyle() + themeStyle}</style>`;
    } else {
      this._htmlData = this._htmlData + `<style>${vuePressBase}</style>`;
    }
    //这么写是为了兼容 打包之后引入的组件输出的结构不同，一个是module模式一个是函数
    const currentHtml = this.getJuiceCurrentHtml();
    if (this._htmlData) {
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(currentHtml);
    }
  }

  getDarkOrHighlight(): void {
    this.isHighlight = !this.isHighlight;
  }

  getWideScreen(): void {
    if (isMobile()) {
      this.isWideScreen = false;
      this.isMobile = true;
    } else {
      this.isWideScreen = !this.isWideScreen;
      this.isMobile = false;
    }
  }

  /**
   * @param isClickChange 两次使用一次点击切换水印默认true 需要切换水印。另一次初始化的时候如果默认不是kingfar 需要将水印替换
   */
  getWaterMarker(isClickChange: boolean = true): void {
    if (isClickChange) this.isKingfar = !this.isKingfar;
    let re = new RegExp(previewPattern);
    const waterMarkerType = this.isKingfar
      ? kingfarWaterMarker
      : ergoLABwaterMarker;
    if (this._htmlData) {
      this._htmlData = this._htmlData.replace(
        re,
        (match: any, p1: any, p2, p3) => {
          return `${p1}${waterMarkerType}`;
        }
      );
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this._htmlData);
    }
  }

  getThemeColor(setting: IOption): void {
    const parrent = /style\=\"--theme-color:([\w|\#\w]+)\"/g;
    this.themeType = setting['value'];
    this._htmlData = this._htmlData.replace(parrent, (_, p1) => {
      p1 = `style="--theme-color:${themeColorList[this.themeType]['color']}"`;
      return p1;
    });
    const currentHtml = this.getJuiceCurrentHtml();
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(currentHtml);
  }

  getCopyContent(setting: IOption) {
    copyContent(this._getWeChatHtml()); //false是需要特殊的处理
    this._message.success('复制成功');
  }

  private _getWeChatHtml(): string {
    const currentHtml = this.getJuiceCurrentHtml();
    // const html = juice(this._htmlData);
    return removeStyleMarker(currentHtml);
  }

  private _getWeChatMarkdown(): string {
    let re = new RegExp(previewPattern);
    const waterMarkerType = this.isKingfar
      ? kingfarWaterMarker
      : ergoLABwaterMarker;
    let markdownResult = '';
    if (this._markdownData) {
      markdownResult = this._markdownData.replace(re, (match: any, p1: any) => {
        return `${p1}${waterMarkerType}`;
      });
    }
    return markdownResult;
  }

  private _initNavigation() {
    //初始化主题
    if (this.themeType) {
      this.themeColor = themeColorList[this.themeType].name;
      this.getThemeColor(themeColorList[this.themeType]);
    }
    //初始化预览方式，1、判断设备为先，2、判断参数
    if (isMobile()) {
      this.isMobile = true;
      this.isWideScreen = false;
    } else {
      this.isMobile = false;
    }

    //初始化水印
    if (!this.isKingfar) this.getWaterMarker(false);
  }

  //返回
  skipBack() {
    if (this.setting.backUrl) {
      this._route.navigate([this.setting.backUrl]);
    }
  }
}
