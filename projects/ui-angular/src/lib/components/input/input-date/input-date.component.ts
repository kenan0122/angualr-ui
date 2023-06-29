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
import { assignNullProps } from '@psylab/utils';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../asbstract-value-accessor';
import { getDefaultLayout, getDefaultSetting } from '../input-setting';

@Component({
  selector: 'kf-input-date',
  templateUrl: './input-date.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(InputDateComponent),
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent extends AbstractValueAccessor implements OnInit {
  @Input() setting: any = getDefaultSetting();
  @Input() layout: any = getDefaultLayout('date');
  @Input() dateTemplate!: TemplateRef<any>;
  @Output() dateOuter = new EventEmitter();

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

  ngOnInit() {
    assignNullProps(this.setting, getDefaultSetting());
    assignNullProps(this.layout, getDefaultLayout('input'));
  }

  dateChange(date: Date) {
    this.dateOuter.emit(date);
  }
}
