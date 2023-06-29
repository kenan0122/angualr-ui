import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'kf-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() file?:string;

  url?:string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }

}
