import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IButtonType,
  insertList,
  ISaveButtonSetting,
  Mode,
} from '../../shared/markdown-editor';
import {
  copyList,
  defaultNavigation,
  IDropDownType,
  INavigation,
  IOption,
  NavigationButtonType,
  themeColorList,
} from './custom-navigation.types';
@Component({
  selector: 'app-custom-navigation',
  templateUrl: './custom-navigation.component.html',
  styleUrls: ['./custom-navigation.component.scss'],
})
export class CustomNavigationComponent implements OnInit {
  /** 以下@Input()接收传入导航按钮的参数*/
  @Input() setting: INavigation = defaultNavigation;
  @Input() mode: Mode | undefined = Mode.WeChat;
  @Input() otherSetting: ISaveButtonSetting[] | undefined = undefined; //是否显示保存和上传插入功能,日后也可以扩展其他的功能
  /** 以下@Output() 导出用户选择的参数需要上报父级提交数据使用
   *  类型: {setting:INavigation, type:NavigationButtonType}
   */
  @Output() navigationSettingOuter = new EventEmitter();
  modeType = this.mode;
  get navigationButtonType() {
    return NavigationButtonType;
  }
  get themeColors(): IDropDownType[] {
    return themeColorList;
  }
  get copyTypes(): IDropDownType[] {
    return copyList;
  }
  get themeColorName(): string {
    return themeColorList[this.setting.themeColor].name;
  }
  get buttonType() {
    return IButtonType;
  }

  get insertList1() {
    return insertList;
  }

  constructor() {}

  ngOnInit() {}

  getDarkOrHighlight(): void {
    this.setting.isHighlight = !this.setting.isHighlight;
    this._submit(NavigationButtonType.DarkOrHighlight);
  }

  getWideScreen(): void {
    this.setting.isWideScreen = !this.setting.isWideScreen;
    this._submit(NavigationButtonType.Preview);
  }

  getWaterMarker(): void {
    this.setting.isKingfar = !this.setting.isKingfar;
    this._submit(NavigationButtonType.WaterMarker);
  }

  getThemeColor(option: IOption): void {
    this.setting.themeColor = option['value'];
    this._submit(NavigationButtonType.Theme);
  }

  getCopyContent(option: IOption, type: NavigationButtonType): void {
    this.setting.copyType = option['value'];
    this._submit(type);
  }

  getInsertContent(
    option: IOption,
    type: NavigationButtonType,
    setting: any
  ): void {
    this.setting.insertType = option['value'];
    this._submit(type, setting, option);
  }

  save(setting: any): void {
    this._submit(NavigationButtonType.Save, setting);
  }

  private _submit(
    type: NavigationButtonType,
    content?: any,
    drownOption?: any
  ): void {
    //content接收内容方便函数执行
    this.navigationSettingOuter.emit({
      setting: this.setting,
      type,
      content,
      drownOption,
    });
  }
}
