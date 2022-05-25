import { Component, Input, OnInit } from '@angular/core';
import { createDefaultCoverContent, ICoverContentV1 } from './cover-content';

@Component({
  selector: 'app-question-cover',
  templateUrl: './question-cover.component.html',
  styleUrls: ['./question-cover.component.scss']
})
export class QuestionCoverComponent implements OnInit {
  @Input() content?: string;
  @Input() flexDirection: string = 'kf-justify-center';

  coverContentDto?: ICoverContentV1;
  constructor() { }

  ngOnInit() {
    // 编辑
    if (this.content) {
      this.coverContentDto = JSON.parse(this.content);
    } else {
      // 添加, 初始化组件dto;
      this.coverContentDto = createDefaultCoverContent() as ICoverContentV1;
    }
  }

}
