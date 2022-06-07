import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'kf-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() path: any;
  @Input() style?: string;
  @Input() size: string | number = '1rem';
  /** 是否图标内部path撑满svg， 主要是方便对齐*/
  @Input() expandToFull = true;
  @Input() class: string = '';
  @Input() color: string = '';

  htmlStr: string =
    'Plain Text Example &amp; <strong>Bold Text Example</strong>';
  private readonly el?: HTMLElement;

  get viewBox() {
    return this.expandToFull ? '2 2 20 20' : '0 0 24 24';
  }

  constructor(elementRef: ElementRef, public readonly renderer: Renderer2) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit(): void {
    const dom = this.el?.querySelector('svg') as unknown as HTMLParagraphElement;
    dom.innerHTML = this.path;
  }
}
