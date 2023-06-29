import { async } from '@angular/core/testing';
import { assignNullProps, deepClone } from '@psylab/utils';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { isValidFile } from './file';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../asbstract-value-accessor';
import { IconDocument } from '@psylab/icons-path';
import { getDefaultLayout, getFileSetting } from '../input-setting';

@Component({
  selector: 'kf-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(FileInputComponent),
})
export class FileInputComponent
  extends AbstractValueAccessor
  implements OnInit, OnDestroy
{
  @Input() isDisableImg: boolean = false;
  @Input() width: string = '6.5rem';
  @Input() height: string = '6.5rem';
  @Input() hasValue: boolean = false;
  @Input() fileObj: {name: string, isImg: boolean} = {name: '', isImg: true};

  @Input() setting: any = getFileSetting();
  @Input() layout: any = getDefaultLayout('file');

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  @ViewChild('inputEl') inputChild: any;
  @Output() fileOuter = new EventEmitter();

  private _fileBlob?: Blob;
  private _fileUrl?: string;
  fileValue?: string;
  isImg: boolean = true;
  fileIcon = IconDocument;
  fileName:string = '';

  constructor(
    private message: NzMessageService
  ) {
    super();
  }

  override set value(val: any) {
    this._value = val;
    this.setErrorInfo(val);
    if (!(val instanceof Blob)) {
      this.fileValue = val;
    }
    this.textOnChange(this._value);
  }

  ngOnInit() {
    if (this._value) {
      this.fileValue = this.value;
    }

    assignNullProps(this.setting, getFileSetting());
    assignNullProps(this.layout, getDefaultLayout('file'));
  }

  async fetch(url: string) {
    return await fetch(url).then(r => r.blob());
  }

  onClick() {
    this.inputChild.nativeElement.click();
  }

  onFileSelected = async () => {
    //const file = this.inputChild.nativeElement.files[0];
    const files = this.inputChild.nativeElement.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const index = file.type.indexOf('image');
      this.fileObj.isImg = index > 0 || index === 0;
      this.fileObj.name = file.name;

      const validFile = isValidFile(file, this.setting.fileType, this.setting.fileSize);
      if (validFile.success) {
        if (this._fileBlob && this._fileUrl) {
          window.URL.revokeObjectURL(this._fileUrl);
        }

        this._fileBlob = file;
       // const binaryData: BlobPart[] = [this._fileBlob as BlobPart];
        this._fileUrl = window.URL.createObjectURL(file);

        // 生成blobUrl的时候前面会带unsafe, 这里需要把unsafe去掉, 图片才能正常显示
        this.fileValue =  this._fileUrl;

        this.hasValue = true;
        //this.value = file;
        this.fileOuter.emit({
          type: 'thumbnail',
          content: { isLocal: true, url: this._fileBlob },
        });
      } else {
        this.hasValue = false;
        this.message.error(validFile.msg);
      }
    }

    this.inputChild.nativeElement.value = '';
  };

  save() {
    const result = { isLocal: true, url: this._fileBlob };
    return { type: 'thumbnail', content: result };
  }

  ngOnDestroy(): void {
    if (this._fileBlob && this._fileUrl) {
      window.URL.revokeObjectURL(this._fileUrl);
    }

    this._fileBlob = undefined;
    this._fileUrl = undefined;
  }
}
