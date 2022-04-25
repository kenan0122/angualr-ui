import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { InputDateComponent } from './input-date.component';

// 导入需要使用的 Angular 语言包
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

// 配置 ng-zorro-antd 国际化
import { NZ_I18N, zh_CN  } from 'ng-zorro-antd/i18n';
import { ErrorModule } from '../../error/error.module';

@NgModule({
  declarations: [InputDateComponent],
  exports: [InputDateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule,
    NzDatePickerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
})
export class InputDateModule { }
