import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  public content?: string;
  public mode: string = 'editor';

  constructor() {
  }

  ngOnInit() {
  }


}
