import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../asbstract-value-accessor';

@Component({
  selector: 'kf-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  host: {
   // '[class]': `flexDirection`,
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(InputTextComponent)
})

export  class InputTextComponent extends AbstractValueAccessor {
  @Input() size: NzSizeLDSType = 'large';
  @Input() title: string = '';
  // 控件名字
  @Input() name: string = 'text';
  @Input() placeholder: string = '请输入要搜索的文本';
  @Input() maxLength: number = 10;
  @Input() flexDirection: string = 'kf-justify-center';

  @Input()
  textTemplate!: TemplateRef<any>;
  @Output() textOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  constructor() {
    super();
  }

  textChange(text: any) {
    this.textOuter.emit(text);
  }
}
