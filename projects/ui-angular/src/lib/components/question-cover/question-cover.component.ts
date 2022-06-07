import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../input/asbstract-value-accessor';
import { createDefaultCoverContent, ICoverContentV1 } from './cover-content';

@Component({
  selector: 'kf-question-cover',
  templateUrl: './question-cover.component.html',
  styleUrls: ['./question-cover.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(QuestionCoverComponent)
})
export class QuestionCoverComponent extends AbstractValueAccessor implements AfterViewInit {
  @Input() flexDirection: string = 'kf-justify-center';

  @Output() coverOuter = new EventEmitter();

  coverContentDto: ICoverContentV1 = {
    version: 1,
    instruction: '',
    questions: []
  };


  override set value(val: any) {
    console.log(777, val)
    this._value = val;
    this.setErrorInfo(val);
    this.textOnChange(this._value);
  }

  ngAfterViewInit(){
    console.log(777888, this._value)
  }

  constructor() {
    super();
  }

  ngOnInit() {
    console.log(666, this._value)
    // 编辑
    if (this.value) {
      this.coverContentDto = JSON.parse(this.value);
    } else {
      // 添加, 初始化组件dto;
      this.coverContentDto = createDefaultCoverContent() as ICoverContentV1;
    }
  }

  textChange() {
    this.value = JSON.stringify(this.coverContentDto);
    this.coverOuter.emit();
  }
}
