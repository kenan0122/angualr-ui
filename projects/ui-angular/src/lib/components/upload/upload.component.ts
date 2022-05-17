import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer, Subscription } from 'rxjs';
import { AbstractValueAccessor, MakeProvider } from '../input/asbstract-value-accessor';

export enum FileType {
  Image,
  File
}
@Component({
  selector: 'kf-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(UploadComponent)
})
export class UploadComponent extends AbstractValueAccessor implements OnInit {
  @Input() title: string = '';
  @Input() isEnableUpload:boolean = false;
  @Input() fileType:FileType = FileType.Image
  @Input() typeList: Array<string> = ['.png', '.jpg', '.gif', '.svg', '.jfif'];
  /** 以兆为单位 */
  @Input() fileSize: number = 2;
  @Input() flexDirection: string = 'kf-justify-center';

  @Output() fileOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  fileArray:any = [];
  showUploadList = {
    showPreviewIcon: false,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  previewImage: string | undefined;
  previewVisible:boolean = false;

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
    const formData = new FormData();
    for (const file of this.fileArray) {
     // file.uid = new Date().getTime().toString();
      formData.append('files', file);
    }
    // options.onSuccess 文件上传成功之后的回调函数
    this.fileOuter.emit({status: options.onSuccess,formData, type: 'fetch'})
  }

  //#region 上传图片方法
    // 图片上传
    doImgUpload = (options: any) => {
      const { onSuccess, onError, file, onProgress } = options;
      this.fileArray = [file];

     this.fetch(options);
      return new Subscription();
    }

    beforeUpload = (file: NzUploadFile) => {
      return new Observable((observer: Observer<boolean>) => {
        const picType = this.typeList.indexOf(file.name.substring(file.name.lastIndexOf('.')));

        if (picType < 0) {
          this.message.create('error', `包含文件格式不正确，只支持 ${picType} 格式!`);
          observer.complete();
          return;
        }

       const size= file.size ? file.size : 0;
        const isLimit = size / 1024 / 1024 < this.fileSize;

        if (!isLimit) {
          this.message.create('error', `文件超过${this.fileSize}MB, 请重新上传!`);
          observer.complete();
          return;
        }
        observer.next((picType >= 0 ) && isLimit);
        observer.complete();

      });
    }

    handleChange(info: { file: NzUploadFile }) {
      // 状态选择
      switch (info.file.status) {
        case 'done': // 上传完成
          // 获取服务端返回的信息
          if (info.file.response.success) {
          }
          break;
        case 'error': // 上传错误
          this.message.create('error', '上传失败')
          break;
      }
    }

    handlePreview = (file: NzUploadFile) => {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    }

    removeFile = (file: NzUploadFile) => {
      // this.fileOuter.emit({
      //   upload: false,
      //   file: null,
      //   type: this.uploadFileType
      // });
      this.fileOuter.emit({file, type: 'remove'})
      return true;
    }

    change(param:any) {
      // console.log(88888, param)
    }

  //#endregion

}
