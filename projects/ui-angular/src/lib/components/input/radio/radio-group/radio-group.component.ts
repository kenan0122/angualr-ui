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
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { assignNullProps, notNullish } from '@psylab/utils';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../../asbstract-value-accessor';
import { getDefaultLayout, getRadioSetting } from '../../input-setting';

@Component({
  selector: 'kf-radio-group',
  templateUrl: './radio-group.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(RadioGroupComponent),
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent
  extends AbstractValueAccessor
  implements OnInit
{
  @Input() options?: object;
  @Input() setting: any = getRadioSetting();
  @Input() layout: any = getDefaultLayout('radio');

  @Output() radioOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  isArray: boolean = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    assignNullProps(this.setting, getRadioSetting());
    assignNullProps(this.layout, getDefaultLayout('radio'));
  }

  radioChange(param: any) {
    this.firstLoad = false;
    this.radioOuter.emit(param);
  }

  // But for angular 7 or above, you need to put an empty function to keep data unsorted.
  //change keyvalue's order, 不能删除
  unsorted() {return 0}

  /**
   * 实现自定义校验，写在组件类可介入入参
   * @param control AbstractControl
   */
  override validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
}
