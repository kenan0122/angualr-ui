import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  INavigationType,
  preSetTypeToName,
  preSetTypeToNameVuePress,
} from '../../custom-hook/customHook';
import { Mode, kfWeChatId } from '../../shared/markdown-editor';
import * as blockHook from '../../custom-hook/weChat/blockCode';
import * as linkHook from '../../custom-hook/weChat/link';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { resourceCenterTemplate } from '../../custom-hook/vuePress/blockCode/styleTemplate';

@Component({
  selector: 'kingfar-style-template',
  templateUrl: './style-template.component.html',
  styleUrls: ['../../markdown-editor.component.scss'],
})
export class StyleTemplateComponent implements OnInit {
  @Input() mode: any;
  @Input() readonly: boolean = true;
  @Output() templateOuter = new EventEmitter(); //上报选中模板的内容
  //选中左侧的导航index
  menuSelectIndex: number = 0;
  //所有的模板内容
  templateMap = new Map();
  //当前展示模板的内容
  templateContents: any;
  //一级导航
  menus: any;
  weChatStyle: string = '';
  htmlContent: SafeHtml = '';

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this._init();
  }

  selectTemplateStyle(content: any, mode: Mode = Mode.WeChat): void {
    if (this.readonly) return;
    if (mode === Mode.WeChat) {
      this.templateOuter.emit({ content });
    } else {
      this.templateOuter.emit({ content: content.md });
    }
  }

  //切换一级导航标签
  templateContent(item: any, index: number): void {
    this.menuSelectIndex = index;
    this.templateContents = this.templateMap.get(item);
  }

  //根据类型解析导航名称
  preSetTypeToName(type: INavigationType): string {
    return preSetTypeToName(type);
  }

  preSetTypeToNameVuePress(type: INavigationType): string {
    return preSetTypeToNameVuePress(type);
  }

  getHtml(content: { getHtml: () => string }) {
    //增加样式不能直接使用content.getHtml();因为如果是svg图标不显示
    return content.getHtml();
  }

  //#region 私有方法
  private _init() {
    //这里没有将两个变量进行合并原因是因为Module引入的时候无法合并所以分别循环了两次。这里可能存在的潜在问题是列表在ui上排序问题
    if (this.mode === Mode.WeChat) {
      const blockHookKeys = Object.keys(blockHook);
      const linkHookKeys = Object.keys(linkHook);
      this._addWechatStyleAndTemplates(blockHookKeys, blockHook);
      this._addWechatStyleAndTemplates(linkHookKeys, linkHook);
      this.menus = [...this.templateMap.keys()]; //map的数据keys或者values 拿到的是{} 但是angular渲染不了
      this.templateContents = [...this.templateMap.values()][0];
      this._setHeaderStyle();
    } else {
      this.menus = [0]; //这里展示资源中心 所以写了0
      this.templateContents = resourceCenterTemplate;
    }
  }
  private _addWechatStyleAndTemplates(targetKeys: string[], target: any) {
    for (const hookKey of targetKeys) {
      //使用两个hookKey获取是因为头部导入数据格式原因
      const currentKey = target[hookKey][hookKey];
      this.weChatStyle += currentKey.css;
      //整理最终的数据，导航类型为key 内容是Module
      const resultKey = this.templateMap.get(currentKey.preSetType);
      if (resultKey && resultKey.length > 0) {
        resultKey.push(currentKey);
      } else {
        this.templateMap.set(currentKey.preSetType, [currentKey]);
      }
    }
  }

  private _setHeaderStyle() {
    const node = document.createElement('style');
    node.innerHTML = this.weChatStyle;
    node.setAttribute('id', kfWeChatId);
    if (this._hasThemeStyle(kfWeChatId)) return;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  private _hasThemeStyle(id: string): boolean {
    const currentId = document.querySelector('#' + id);
    if (currentId) return true;
    return false;
  }
  //#endregion
}
