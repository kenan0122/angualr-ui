import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconXCircleFill } from '@psylab/icons-path';
import { assignNullProps } from '@psylab/utils';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../asbstract-value-accessor';
import { isValidFile } from '../file-input/file';
import { getDefaultLayout, getFileSetting } from '../input-setting';

@Component({
  selector: 'kf-file-input-array',
  templateUrl: './file-input-array.component.html',
  styleUrls: ['./file-input-array.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(FileInputArrayComponent),
})
export class FileInputArrayComponent
  extends AbstractValueAccessor
  implements OnInit
{
  @Input() height: string = '6.25rem';
  @Input() width: string = '6.25rem';
  @Input() setting: any = getFileSetting();
  @Input() layout: any = getDefaultLayout('fileArray');

  @Output() fileArrayOuter = new EventEmitter();
  @ViewChild('inputEl') inputChild: any;

  private _fileBlobs: any[] = [];
  private _fileUrls: string[] = [];
  fileValues: any[] = [];

  get RemoveIcon() {
    return IconXCircleFill;
  }

  constructor(
    private sanitizer: DomSanitizer,
    private message: NzMessageService
  ) {
    super();
  }

  override set value(val: any) {
    this._value = val;
    this.setErrorInfo(val);
    const includeBlob = val.some((item: any) => item instanceof Blob);
    if (!includeBlob) {
      this._fileBlobs = val;
      this.fileValues = val.slice(0);
    }

    this.textOnChange(this._value);
  }

  override setErrorInfo(val: any) {
    const invalid = this.verifyValueInvalid(val);
    const error = this._required && invalid && !this.firstLoad;
    // 显示错误提示消息
    this.error$.next(error);
  }

  ngOnInit() {
    assignNullProps(this.setting, getFileSetting());
    assignNullProps(this.layout, getDefaultLayout('fileArray'));
  }

  fileChanged() {
    this.fileArrayOuter.emit();
  }

  onRemove(index: number) {
    this.fileValues.splice(index, 1);
    this._fileBlobs.splice(index, 1);
    this._fileUrls.splice(index, 1);
    this.fileValues = this.fileValues;
    this._fileBlobs = this._fileBlobs;
    this._fileUrls = this._fileUrls;

    this.fileArrayOuter.emit({
      type: 'thumbnail',
      index: index,
      content: { isLocal: true, url: this._fileBlobs },
    });
  }

  save() {
    const result = { isLocal: true, url: this._fileBlobs };
    return { type: 'thumbnail', content: result };
  }

  onClick() {
    this.inputChild.nativeElement.click();
  }

  onFileSelected() {
    const inputEl = this.inputChild.nativeElement;

    if (inputEl.files && inputEl.files.length > 0) {
      for (let index = 0; index < inputEl.files.length; index++) {
        const file = inputEl.files[index];

        if (this.fileValues.length >= this.setting.maxLength) break;

        const validFile = isValidFile(
          file,
          this.setting.fileType,
          this.setting.fileSize
        );
        if (validFile.success) {
          if (this._fileBlobs[index] && this._fileUrls[index]) {
            URL.revokeObjectURL(this._fileUrls[index]);
          }

          this._fileBlobs.push(file);

          const binaryData: BlobPart[] = [file as BlobPart];
          const blobUrl = URL.createObjectURL(new Blob(binaryData));
          this._fileUrls.push(blobUrl);
          this.fileValues.push(blobUrl);
        } else {
          this.message.error(validFile.msg);
        }
      }

      this.value = this._fileBlobs;

      this.fileArrayOuter.emit({
        type: 'thumbnail',
        content: { isLocal: true, url: this._fileBlobs },
      });
    }
    this.inputChild.nativeElement.value = '';
  }
}
