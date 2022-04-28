import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../asbstract-value-accessor';

@Component({
  selector: 'kf-textarea',
  templateUrl: './textarea.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(TextareaComponent),
  styleUrls: ['./textarea.component.scss']
})

export class TextareaComponent extends AbstractValueAccessor {
  @Input() title: string = '';
  // 控件名字
  @Input() name: string = 'textarea';
  @Input() rows: number = 1;
  @Input() placeholder: string = '请输入文本';
  @Input() flexDirection: string = 'kf-justify-center';

  @Output() textareaOuter = new EventEmitter();

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

  textareaChange(text: string) {
    this.textareaOuter.emit(text);
  }
}
