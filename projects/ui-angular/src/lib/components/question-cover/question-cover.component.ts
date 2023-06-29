import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { notNullish } from '@psylab/utils';
import { AbstractValueAccessor, MakeProvider } from '../input/asbstract-value-accessor';
import { CoverQuestionType, createDefaultCoverContent, ICoverContentV1 } from './cover-content';

@Component({
  selector: 'kf-question-cover',
  templateUrl: './question-cover.component.html',
  styleUrls: ['./question-cover.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(QuestionCoverComponent)
})
export class QuestionCoverComponent extends AbstractValueAccessor {
  @Input() override _value: any;
  @Input() flexDirection: string = 'kf-justify-center';

  @Output() coverOuter = new EventEmitter();

  options = {
    '单选': CoverQuestionType.SingleChoice,
    '量表': CoverQuestionType.Scale
  };
  private _defaultCoverContent:ICoverContentV1 = createDefaultCoverContent() as ICoverContentV1;
  coverContentDto?: ICoverContentV1 ;
  private _fistLoad: boolean = true;

  override set value(val: any) {
    this._value = val;
    if (this._fistLoad) {
      this._initCoverData(val);
      this._fistLoad = false;
    }
    this.setErrorInfo(val);
    this.textOnChange(this._value);
  }


  constructor(private ref: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
      // 添加, 初始化组件dto;
      this.coverContentDto = this._defaultCoverContent;
  }

  textChanged() {
    this.value = JSON.stringify(this.coverContentDto);
    this.coverOuter.emit();
  }

  styleChanged() {
    if (this.coverContentDto) {
      this.coverContentDto.questions.map(item => {
        item.scale.value = -1;
        item.singleChoice.index = -1;
        return item;
      });
    }
    this.value = JSON.stringify(this.coverContentDto);
  }

  singleOptionChanged() {
    this.value = JSON.stringify(this.coverContentDto);
  }


  private _initCoverData(val: any) {
    if (val) {
      this.coverContentDto = JSON.parse(val);
      this.ref.markForCheck();
      this.ref.detectChanges();
    }
  }
}
