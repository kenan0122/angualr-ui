import { Component, OnInit } from '@angular/core';
import { IconFolder } from '@psylab/icons-path';
import { IThumbnail } from 'projects/ui-angular/src/lib/components/thumbnail/thumbnail.component.type';

@Component({
  selector: 'app-thumbnail-test',
  templateUrl: './thumbnail-test.component.html',
  styleUrls: ['./thumbnail-test.component.css'],
})
export class ThumbnailTestComponent implements OnInit {
  thumbnial: IThumbnail = {
    webpUrl:
      'https://cdnapi.psylab.com.cn/api/cdn/PsyLAB/file/p/83.png?s=64&f=.webp"',
    imgUrl: 'https://cdnapi.psylab.com.cn/api/cdn/PsyLAB/file/p/83.png?s=64'
  };
  iconUrl: string = IconFolder;
  constructor() {}

  ngOnInit() {}
}
