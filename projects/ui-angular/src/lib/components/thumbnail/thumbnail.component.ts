import { Component, Input, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { assignNullProps } from '@psylab/utils';
import {
  defaultIconSetting,
  IconSetting,
  IThumbnail,
} from './thumbnail.component.type';

@Component({
  selector: 'kf-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css'],
})
export class ThumbnailComponent implements OnInit {
  @Input() thumbnail: IThumbnail | undefined;
  @Input() iconUrl: string = '';
  @Input() size: number | undefined = 64;
  //为了兼容内部的kingfar-icon的组件可空
  @Input() iconSetting: IconSetting = defaultIconSetting;

  disabledImg: boolean = false;

  constructor(private _ngZone: NgZone, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this._initIconSetting();
  }

  onLoadError() {
    this.disabledImg = true;
    this.thumbnail = undefined;
    //console.error('图片无法加载', this.iconUrl);
  }

  private _initIconSetting() {
    if (this.iconSetting) {
      //外部如果只传某个参数可以进行合并生成默认值
      assignNullProps(this.iconSetting, defaultIconSetting);
    }
  }
}
