import { Component, OnInit } from '@angular/core';
import {
  defaultMarkdownPreviewSetting,
  IMarkdownPreviewSetting,
} from 'projects/ui-angular/src/lib/components/markdown-preview/markdown-preview-type';
import { testHtml } from '../../../assets/text';
import { articaleStyle } from './testArticale';
@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.scss'],
})
export class MarkdownPreviewComponent implements OnInit {
  setting: IMarkdownPreviewSetting = defaultMarkdownPreviewSetting;
  private _htmlData: string = '';
  constructor() {}

  ngOnInit() {
    this.setting.html = testHtml;
  }

  adjustIframe() {
    let ifm: any = document.getElementById('inlineFrameExample');
    ifm.height = document.documentElement.clientHeight;
    ifm.width = document.documentElement.clientWidth;
  }
}
