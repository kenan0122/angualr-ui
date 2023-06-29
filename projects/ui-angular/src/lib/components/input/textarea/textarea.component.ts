import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../asbstract-value-accessor';
import { getDefaultLayout, getDefaultSetting } from '../input-setting';
import { assignNullProps } from '@psylab/utils';

@Component({
  selector: 'kf-textarea',
  templateUrl: './textarea.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(TextareaComponent),
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends AbstractValueAccessor implements OnInit {
  @Input() rows: number = 10;
  @Input() setting: any = getDefaultSetting();
  @Input() layout: any = getDefaultLayout('textarea');

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

  ngOnInit(): void {
    assignNullProps(this.setting, getDefaultSetting());
    assignNullProps(this.layout, getDefaultLayout('textarea'));
  }

  textareaChange(text: string) {
    this.textareaOuter.emit(text);
  }
}
