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
import { assignNullProps } from '@psylab/utils';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import {
  AbstractValueAccessor,
  MakeProvider,
} from '../asbstract-value-accessor';
import { getDefaultLayout, getDefaultSetting } from '../input-setting';

@Component({
  selector: 'kf-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(InputNumberComponent),
})
export class InputNumberComponent extends AbstractValueAccessor implements OnInit {
  /** 验证的正则 */
  @Input() rex: string = '^[0-9]*$';
  /** 验证错误提示消息 */
  @Input() rexErrorInfo:string = '请输入正数';
  @Input() isClear: boolean = true;
  @Input() setting: any = getDefaultSetting();
  @Input() layout: any = getDefaultLayout('number');

  @Input()
  numberTemplate!: TemplateRef<any>;
  @Output() numberOuter = new EventEmitter();

  @Input()
  get required() {
    return this._required;
  }

  set required(v: boolean) {
    this._required = v;
  }

  errorTip: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    assignNullProps(this.setting, getDefaultSetting());
    assignNullProps(this.layout, getDefaultLayout('input'));
    this.errorTip = this.setting.title + '不能为空';
  }

  /**
  * 实现自定义校验，写在组件类可介入入参
  * @param control AbstractControl
  */
  override validate(control: AbstractControl): ValidationErrors | null {
    if (control.dirty) {
      if (this._required) {
        if (control.value) {
          if (this.rex) {
            // 不为空的情况下,验证正则
            const reg = new RegExp(this.rex);
            const allowable = reg.test(control.value);
            if (!allowable) {
              this.error$.next(!allowable);
              this.errorTip = this.rexErrorInfo;
            }

            return allowable ? null : { invalid: true };
          }
        } else {
          this.errorTip = this.setting.title + '不能为空';
          return { invalid: true };
        }
      } else {
        if (this.rex && control.value) {
          const reg = new RegExp(this.rex);
          const allowable = reg.test(control.value);
          if (!allowable) {
            this.error$.next(!allowable);
            this.errorTip = this.rexErrorInfo;
          }

          return allowable ? null : { invalid: true };
        }
      }
    }

    return null;
  }


  numberChange(text: number) {
    this.numberOuter.emit(text);
  }

  clear() {
    this.value = ''
  }
}
