import { Component, OnInit } from '@angular/core';
import { MdEditorOption, UploadResult } from 'projects/ui-angular/src/lib/components/markdown/markdown.types';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  public options: MdEditorOption = {
    showPreviewPanel: false,
    enablePreviewContentClick: false,
    resizable: true,
    markedjsOpt: undefined,
    customRender: {
      image: (href: string, title: string, text: string) => {
        let out = `<img style="max-width: 100%; border: 20px solid red;" src="${href}" alt="${text}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += (<any>this.options).xhtml ? "/>" : ">";
        return out;
      }
    }
  };
  public content?: string;
  public mode: string = 'editor';

  constructor() {
  }

  ngOnInit() {
  }


}
