import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile, NzUploadListType } from 'ng-zorro-antd/upload';
import { Observable, Observer, Subscription } from 'rxjs';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../input/asbstract-value-accessor';

@Component({
  selector: 'kf-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(UploadComponent),
})
export class UploadComponent extends AbstractValueAccessor implements OnInit {
  @Input() title: string = '';
  @Input() uploadTitle: string = '上传';
  @Input() isEnableUpload: boolean = false;
  /** audio/*; video/*;  image/*; */
  @Input() fileType: string = '';
  /** 以兆为单位 */
  @Input() fileSize: number = 2;
  @Input() flexDirection: string = 'kf-justify-center';
  @Input() uploadFileNum: number = 1;
  @Input() multiple: boolean = false;
  @Input() listType: NzUploadListType = 'picture-card';
  @Input() uploadClass: string = '';
  @Input() upload?: (options: any, input: any) => void;

  @Output() fileOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  avatarUrl?: string;
  fileArray: any = [];
  showUploadList = {
    showPreviewIcon: false,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true,
  };
  previewImage: string | undefined;
  previewVisible: boolean = false;

  constructor(private message: NzMessageService) {
    super();
  }

  override set value(val: any) {
    this._value = val;
    this.setErrorInfo(val);
    this.fileArray = val;
    this.textOnChange(this._value);
  }

  ngOnInit() {
  }

  fetch(options: any) {
    // options.onSuccess 文件上传成功之后的回调函数
    if (this.upload) {
      this.upload(options, this.fileArray);
    }
  }

  //#region 上传图片方法
  // 图片上传
  doImgUpload = (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    //this.fileArray = [file];
    this.fileArray = [file];
    this.fetch(options);
    return new Subscription();
  };

  beforeUpload = (file: NzUploadFile) => {
    return new Observable((observer: Observer<boolean>) => {
      const size = file.size ? file.size : 0;
      const isLimit = size / 1024 / 1024 < this.fileSize;

      if (!isLimit) {
        this.message.create('error', `文件超过${this.fileSize}MB, 请重新上传!`);
        observer.complete();
        return;
      }

      observer.next(isLimit);
      observer.complete();
    });
  };

  handleChange(info: { file: NzUploadFile }) {
    // 状态选择
    switch (info.file.status) {
      case 'done': // 上传完成
        // 获取服务端返回的信息
        if (info.file.response) {
          if (info.file.response.success) {
          }
        }
        break;
      case 'error': // 上传错误
        this.message.create('error', '上传失败');
        break;
    }
  }

  handlePreview = (file: NzUploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  removeFile = (file: NzUploadFile) => {
    this.fileOuter.emit({ file, type: 'remove', fileArray: this.fileArray });
    return true;
  };

  //#endregion
}
