import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { assignNullProps } from '@psylab/utils';
import * as juice from 'juice';
import {
  CopyType,
  defaultNavigation,
  InputFileType,
  getThemeColor,
  IInsertSetting,
  INavigation,
  NavigationButtonType,
  themeColorList,
} from './compontent/custom-navigation/custom-navigation.types';
import {
  getVuepressMarkdownRenderer,
  getWeChatMarkdownRenderer,
} from './custom-hook/weChat/blockCode/blockCode';
import { getMarkdownSetting } from './custom-hook/weChat/link/link';
import {
  getDefaultSetting,
  IMdEditorSetting,
  Mode,
  IStyleOption,
  defaultEditorStyle,
  themeId,
  vuepressId,
  kfWeChatId,
  kingfarEditor,
  kingfarVuepress,
  docsContentId,
  IUpdateTemplate,
  getToc,
  textLength,
} from './shared/markdown-editor';
import { themeStyle } from './custom-hook/weChat/css/theme';
import { vuePressBase as docsBase } from './custom-hook/vuePress/css/util';
import {
  calWechatStyleAndTemplates,
  copyContent,
  ergoLABwaterMarker,
  ergoLABwaterMarker as ergoLabWaterMarker,
  getArticleStyle,
  kingfarWaterMarker,
  localPattern,
  patternLink,
  previewPattern,
  referencesPattern,
  removeStyleMarker,
} from './shared/util';
import * as docsBlockHook from './custom-hook/vuePress/blockCode';
import { NzMessageService } from 'ng-zorro-antd/message';
import { imgHook } from './custom-hook/weChat/img/img';
declare let Cherry: any; //这样引用没有type 没用按es6调用是调用报错
@Component({
  selector: 'kf-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent implements OnInit {
  @ViewChild('markdownEditor') markdownEditor: any; // ViewChild 装饰器里面是ui界面元素
  @Output() settingOuter = new EventEmitter(); //为了上报所有外部应用的内容上报包括类型type,和content:内容
  @Input() articleInfo?: INavigation; //默认navParams的参数 主要是导航栏中自定义的内容
  @Input() setting: IMdEditorSetting = getDefaultSetting(); //外部传入的setting配置主要控制editor的初始值

  private readonly _customEditorColor: string = '#1a2835'; //editor 编辑器的默认颜色
  private _themeColor: string = '#38b2ac'; //默认的主题颜色
  private _editorParentSelecotr: any; //编辑器的父级，方便设置主题颜色
  private _markdownData: string | undefined = '';
  isWeChat: boolean = true;
  editorStyle: IStyleOption = defaultEditorStyle;
  navParamsObj: INavigation = defaultNavigation;
  editorContent: any;
  get modeWeChat() {
    //使用get是因为类似私有变量只能获取不能设置
    return Mode.WeChat;
  }

  callbacks = {
    fileUpload: async (file: any, callback: any) => {
      const result = await this.setting.pasteMoalCallback(file);
      callback(result);
    },
  };

  constructor(private _message: NzMessageService) {}

  ngOnInit() {
    //合并setting
    assignNullProps(this.setting, getDefaultSetting());
    //第一次渲染navParamsObj中必然不会传递数据，所以需要使用默认值 类型使用初始editor中setting的数据，第二次就是用保存的数据
    this.navParamsObj = this.articleInfo
      ? JSON.parse(JSON.stringify(this.articleInfo))
      : JSON.parse(JSON.stringify(defaultNavigation));
    this.isWeChat = this.setting.mode === Mode.WeChat;
    //初始编辑器的样式
    this.editorStyle = this.setting.style
      ? this.setting.style
      : defaultEditorStyle;
  }

  ngAfterViewInit(): void {
    if (this.markdownEditor.nativeElement) {
      this._initEditor();
      if (this.editorContent && this.setting.markdown) {
        //需要先对水印进行处理
        const waterMarker = this.navParamsObj.isKingfar
          ? kingfarWaterMarker
          : ergoLABwaterMarker;
        this.setting.markdown = this._getWaterMarkerResult(
          this.setting.markdown,
          previewPattern,
          waterMarker
        );

        try {
          this.editorContent.insert(this.setting.markdown, false, false, false);
          this.editorContent.engine.makeHtml(this.setting.markdown);
        } catch (error) {}
      }
      /**isSelect=true选中刚插入的内容 anchor=false [1,0]在第2行第4个字符处插入内容*/
      this._editorParentSelecotr = this.markdownEditor.nativeElement.parentNode;
      this._editorParentSelecotr.style?.setProperty(
        '--editor-theme-color',
        this.setting.editorColor
          ? this.setting.editorColor
          : this._customEditorColor
      );
      this._initCss();
      if (this.navParamsObj) {
        this._editorParentSelecotr.style?.setProperty(
          '--theme-color',
          themeColorList[this.navParamsObj.themeColor]['color']
        );
        this._setDarkOrHighlight(this.navParamsObj);
        this._setPreviewStyle(this.navParamsObj);
      }
    }
  }

  //获取docs的样式
  getDocsStyle(): string {
    return docsBase;
  }

  getArticleStyle(): string {
    //根据不同类型添加不同的样式
    return getArticleStyle() + themeStyle;
  }

  /**1）、保存html和markdown中的有水印的图片进行处理。水印在p/ 路径中保存默认替换为?w=1;
   * 2)、保存需要单独处理删除的文件fileShortIds，确定在artical和blog中的内容需要全部上传,方便后台对比进行删除无用的素材
   */
  save() {
    const htmlContent = this._getSaveHtml();
    const html = this._getWaterMarkerResult(
      htmlContent,
      previewPattern,
      kingfarWaterMarker
    );
    const markdown = this._getWaterMarkerResult(
      this.editorContent.getMarkdown(),
      previewPattern,
      kingfarWaterMarker
    );
    const oddParams = this.articleInfo ? this.articleInfo : defaultNavigation;
    let isChangedContent: boolean = false;
    if (
      this.setting.markdown !== markdown ||
      oddParams.themeColor != this.navParamsObj.themeColor ||
      oddParams.isKingfar != this.navParamsObj.isKingfar ||
      oddParams.isHighlight != this.navParamsObj.isKingfar ||
      this.setting.isImport
    ) {
      isChangedContent = true;
    }
    //提交预估时间
    const selector = this.markdownEditor.nativeElement.querySelector(
      '.cherry-previewer'
    ) as HTMLElement;
    const edirorTextLength = selector.innerText.length;
    //如果大于300 就是300个一分钟转换 如果有文字小于300 那就是1 否则就是0
    this.navParamsObj.estimatedTime =
      edirorTextLength && edirorTextLength >= textLength
        ? edirorTextLength / textLength
        : edirorTextLength || html
        ? 1
        : 0;
    const result: IUpdateTemplate = {
      isBodyChange: isChangedContent, //md是否发生变化
      html: isChangedContent ? html : '',
      md: isChangedContent ? markdown : '',
      other: this.navParamsObj, //相关的参数信息 例如主题 使用:INavigation
      toc: getToc(this.setting.id, this.setting.mode),
      fileNames: isChangedContent ? this._getFileNames(markdown) : [],
      //fileNames: isChangedContent ? this._getFileNames(markdown) : undefined, //存放文章中本地上传的图片，后台用来对比是否是否需要删除
      //fileReferences: this._getFileReferences(markdown), //资源项目引用
    };

    this.settingOuter.emit({
      type: NavigationButtonType.Save,
      content: result,
    });
    return { type: 'markdown', content: result }; //这里的type是cdn使用的
  }

  insertMarkdown(md: string, source: string = '') {
    let newMarkdown = '';
    const markdown = this.editorContent.getMarkdown();
    source = source.replaceAll('\r', '');
    md = md.replaceAll('\r', '');
    newMarkdown = markdown.replaceAll(source, md);
    this.editorContent.setMarkdown('');
    this.editorContent.insert(newMarkdown);
  }

  insert(setting: IInsertSetting) {
    let waterMarkerFlag = '';
    const waterMarkerType = this.navParamsObj.isKingfar
      ? kingfarWaterMarker
      : ergoLabWaterMarker;
    if (setting.hasWaterMarker) {
      waterMarkerFlag = waterMarkerType;
    }
    //重写原因是1弹框,2要对markdown重写
    let markdown = '';
    switch (setting.type) {
      case InputFileType.Image:
        //增加水印
        markdown = `![${setting.displayText}](${setting.url}${waterMarkerFlag})`;
        break;
      case InputFileType.Audio:
        markdown = `!audio[${setting.displayText}](${setting.url})`;
        break;
      case InputFileType.Video:
        markdown = `!video[${setting.displayText}](${setting.url})`;
        break;
      case InputFileType.Link:
        markdown = `[${setting.displayText ?? '内容区域'}](${setting.url})`;
        break;
      case InputFileType.Installer:
        markdown = `[${setting.displayText ? setting.displayText : '下载'}](link_3 "${setting.url}")`;
        break;
      default:
        console.warn('所选类型不在可控范围内');
    }
    // await setting.
    this.editorContent.insert(markdown, false, false, true);
  }

  //#endregion
  /**根据navigation的setting */
  changedNavigationSetting(value: {
    setting: INavigation;
    type: NavigationButtonType;
    content: any;
    drownOption: any;
  }) {
    const { setting, type, content, drownOption } = value;
    switch (type) {
      case NavigationButtonType.DarkOrHighlight:
        this._setDarkOrHighlight(setting);
        break;
      case NavigationButtonType.Preview:
        this._setPreviewStyle(setting);
        break;
      case NavigationButtonType.Theme:
        this._setTheme(setting);
        break;
      case NavigationButtonType.Copy:
        this._getContent(setting);
        break;
      case NavigationButtonType.Save:
        this.save();
        break;
      case NavigationButtonType.Insert:
        this._insert(setting, content, drownOption);
        break;
      case NavigationButtonType.WaterMarker:
        this._changeWaterMarker(setting);
        break;
    }
  }

  /**点击左侧markdown导航分类进行展示对应的html内容 */
  getTemplateMarkdown(content: { content: any }) {
    let markdown = '';
    if (this.setting.mode === Mode.WeChat) {
      markdown = content.content.createTemplate();
      /**isSelect=true选中刚插入的内容 anchor=false [1,0]在第2行第4个字符处插入内容*/
    } else {
      markdown = content.content;
    }
    this.editorContent.insert(markdown, false, false, true);
  }

  getJuiceCurrentHtml(htmlData: string): string {
    const currentJuice: any = juice;
    let currentHtml = '';
    //兼容打包外部使用
    if (currentJuice && currentJuice.default) {
      currentHtml = currentJuice.default(htmlData);
    } else {
      currentHtml = currentJuice(htmlData);
    }
    return currentHtml;
  }

  //#region 私有方法使用
  private _initEditor(): void {
    const self = this;
    self.editorContent = new Cherry({
      id: self.setting.id,
      value: '',
      engine: {
        global: {
          urlProcessor(url: string, srcType: any) {
            return url;
          },
        },
        customSyntax: {
          imgHook: {
            syntaxClass: imgHook(Cherry),
            // 有同名hook则强制覆盖
            force: true,
            // 在处理图片的hook之前调用
            before: 'autoLink',
          },
          CustomHook: {
            syntaxClass: getMarkdownSetting(Cherry),
            force: true,
            before: 'autoLink',
          },
        },
        syntax: {
          mathBlock: {
            engine: 'MathJax', // katex或MathJax
            //https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js
            src: 'https://i.kingfar.cn/tex-svg.js', // 如果使用MathJax plugins，则需要使用该url通过script标签引入
          },
          codeBlock: {
            theme: 'custom', // 默认为深色主题
            lineNumber: self.isWeChat ? false : true,
            customRenderer: self.isWeChat
              ? getWeChatMarkdownRenderer()
              : getVuepressMarkdownRenderer(),
          },
          header: {
            //默认不适用锚点连接,自动生成toc 在新的页面中会根据toc的属性加载内容
            anchorStyle: self.isWeChat ? 'none' : 'default',
          },
        },
      },
      toolbars: {
        toolbar: self.setting.toolbars,
        //可扩展的右侧导航栏，减少外部传参所以改版后将其功能去除
        // sidebar: self.setting.sidebar,
        customMenu: {},
      },
      editor: {
        height: '100%',
      },
      fileUpload: self.callbacks.fileUpload,
    });
  }

  private _getWaterMarkerType(
    content: string,
    isClickChange: boolean = false
  ): string {
    let re = new RegExp(previewPattern);
    let waterMarkerType = '';
    //看是否点击切换,还是上传直接替换
    if (isClickChange) {
      waterMarkerType = this.navParamsObj.isKingfar
        ? ergoLabWaterMarker
        : kingfarWaterMarker;
    } else {
      waterMarkerType = this.navParamsObj.isKingfar
        ? kingfarWaterMarker
        : ergoLabWaterMarker;
    }

    let m = content.replace(re, (match: any, p1: any) => {
      return `${p1}${waterMarkerType}`;
    });
    return '';
    // return waterMarkerType;
  }

  private _setPreviewStyle(setting: INavigation): void {
    const editorSelector = this.markdownEditor.nativeElement.querySelector(
      '.cherry-editor'
    ) as HTMLElement;
    const previewSelector = this.markdownEditor.nativeElement.querySelector(
      '.cherry-previewer'
    ) as HTMLElement;
    //有编辑也有预览模式的情况下改变网页和手机预览模式
    if (previewSelector) {
      //切换宽屏
      const halfWidth = '50%'; //一半的宽度
      const fullWidth = '100%'; //100%的宽度
      const smallWidth = '420px'; //固定的手机预览宽度
      if (!setting.isHighlight) {
        previewSelector.classList.add('isDark');
      }
      if (setting.isWideScreen) {
        if (editorSelector) {
          editorSelector.style.width = halfWidth;
          previewSelector.style.width = halfWidth;
        } else {
          previewSelector.style.width = fullWidth;
        }
      } else {
        //切换到不是宽屏的模式
        previewSelector.style.width = smallWidth;
        if (editorSelector) {
          editorSelector.style.width = `calc(${fullWidth} - ${smallWidth})`;
        }
      }
    }
  }

  private _setTheme(setting: INavigation): void {
    const editorSelector = document.querySelector(
      '#' + this.setting.id
    ) as HTMLElement;
    //设置主题需要动态设置加载样式theme 文件夹里面的样式 例如green/blue
    this._themeColor = getThemeColor(setting.themeColor);

    //设置theme
    if (this._editorParentSelecotr) {
      this._editorParentSelecotr.style.setProperty(
        '--theme-color',
        this._themeColor
      );
    }

    if (editorSelector) {
      editorSelector.style.setProperty('--theme-color', this._themeColor);
    }
  }

  private _setDarkOrHighlight(setting: INavigation): void {
    const withe: string = '#fff';
    const blackBg: string = 'rgb(25, 25, 25)';
    const blackText: string = 'rgb(0, 0, 0)';
    this.navParamsObj.isHighlight = setting.isHighlight;

    const selector = this.markdownEditor.nativeElement.querySelector(
      '.cherry-previewer'
    ) as HTMLElement;
    if (selector) {
      selector.style.background = setting.isHighlight ? withe : blackBg;
      selector.style.color = setting.isHighlight ? blackText : withe;
      if (!setting.isHighlight) {
        selector.classList.add('isDark');
      }
    }
  }

  private _getContent(setting: INavigation) {
    switch (setting.copyType) {
      case CopyType.Markdown:
        //复制markdown
        copyContent(this.editorContent.getMarkdown());
        this._message.success('复制成功');
        break;
      case CopyType.WeChat:
        copyContent(this._getSaveHtml(false, setting)); //false是需要特殊的处理
        this._message.success('复制成功');
        break;
    }
  }

  private _getSaveHtml(isSave: boolean = true, setting?: INavigation) {
    const html: string = this.editorContent.getHtml();

    const weChatContent = document.querySelector('#' + kfWeChatId)?.innerHTML; //获取wechatStyle 单独提取是因为可能是undefined;
    const weChatStyle = weChatContent ? weChatContent : '';
    //根据不同类型添加不同的样式
    const className = this.isWeChat ? kingfarEditor : kingfarVuepress;
    const baseStyle = this.isWeChat
      ? weChatStyle + this._getThemeStyle(isSave, setting)
      : docsBase;

    let resultContent: string = '';
    if (isSave) {
      // resultContent = `<div class="${className}">${html}</div><style>${baseStyle}</style>`;
      resultContent = `<div class="${className}" style="--theme-color:${this._themeColor}">${html}</div>`;
    } else {
      //复制到微信需要特殊处理
      resultContent = this.getJuiceCurrentHtml(
        `<div class="${className}">${html}<style>${baseStyle}</style></div>`
      );
      resultContent = removeStyleMarker(resultContent);
    }
    return resultContent;
  }

  //复制到微信需要二次处理 将内置的变量颜色替换
  private _getThemeStyle(isSave: boolean, setting?: INavigation) {
    let currentThemeStyle = themeStyle;
    if (!isSave) {
      //替换原有的样式 改为最新的文字颜色
      const parrent = /(var\(--theme-color\, \#[\w-]+\))/g;
      const newStyle = currentThemeStyle.replace(
        parrent,
        (_match: any, p1: any) => {
          p1 = this._themeColor;
          return p1;
        }
      );
      return newStyle;
    }
    return currentThemeStyle;
  }

  private _initCss() {
    /*设置themeId解决多个editor的时候不需要多次加载样式,
    确保不管是几个editor页面中只需要增加一次样式即可,初始化了基础样式.
    */
    if (this.isWeChat) {
      if (this._hasThemeStyle(themeId)) return;
      this._createStyle(themeId, themeStyle);
    } else {
      if (this._hasThemeStyle(vuepressId)) return;
      this._createStyle(vuepressId, docsBase);
      //如果是docs模式 需要将docs的样式加入到内容中
      const docsBlockHookKeys = Object.keys(docsBlockHook);
      const docsStyle = calWechatStyleAndTemplates(
        docsBlockHookKeys,
        docsBlockHook
      );
      this._setHeaderStyle(docsStyle);
    }
  }

  private _setHeaderStyle(style: string) {
    const node = document.createElement('style');
    node.innerHTML = style;
    node.setAttribute('id', docsContentId);
    if (this._hasThemeStyle(docsContentId)) return;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  private _hasThemeStyle(id: string): boolean {
    const currentId = document.querySelector('#' + id);
    if (currentId) return true;
    return false;
  }

  private _createStyle(id: string, content: string) {
    const node = document.createElement('style');
    node.innerHTML = content;
    node.setAttribute('id', id);
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  private _insert(setting: INavigation, content: any, drownOption: any) {
    if (content && content.fn) {
      content.fn(setting.insertType, this);
    }
    this.settingOuter.emit({
      type: NavigationButtonType.Insert,
      content: setting.insertType,
    });
  }

  private _changeWaterMarker(setting: INavigation) {
    this.navParamsObj.isKingfar = setting.isKingfar;
    //切换的时候将水印直接替换
    const markdown = this.editorContent.getMarkdown();
    /**
     * 详细匹配 let resultRegex = /!\[.*]\(.+preview.+(?!.*\/)/g;
     * 切换的时候直接将markdown中的?sw=1 或者?sw=2进行了切换
     */
    this._getWaterMarkerType(markdown, true);
    let re = new RegExp(previewPattern);
    const waterMarkerType = setting.isKingfar
      ? kingfarWaterMarker
      : ergoLabWaterMarker;
    //https://developer.mozilla.org/en-US/docs/Web/EXSLT/regexp/replace 后面可以接收一个方法
    let m = markdown.replace(re, (match: any, p1: any, p2: any) => {
      p2 = waterMarkerType;
      return p1 + p2;
    });
    this.editorContent.setMarkdown(m);
  }

  //获取markdown和html保存处理waterMarker水印的内容
  private _getWaterMarkerResult(
    content: any,
    pattern: string | RegExp,
    waterMarkerType: any
  ): string {
    let re = new RegExp(pattern);
    let m = content.replace(re, (match: any, p1: any) => {
      return `${p1}${waterMarkerType}`;
    });

    return m;
  }

  private _getFileNames(content: string) {
    //需要提交当前文章中所有的连接地址 包括本地上传和资源引用的路径
    const results: string[] = [];
    // const fileNamesPattern = localReferencesPattern;
    const fileReferencesPattern = referencesPattern;
    const filelocalPattern = localPattern;
    const patternLinkPattern = patternLink;

    content.replace(fileReferencesPattern, (_match: any, p1: any) => {
      results.push(p1);
      return '';
    });
    content.replace(filelocalPattern, (_match: any, p1: any, p2: any) => {
      results.push(p1);
      return '';
    });

    content.replace(patternLinkPattern, (_match: any, p1: any, p2: any) => {
      results.push(p1);
      return '';
    });
    return results;
  }
  //#endregion
}
