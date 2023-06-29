import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CoerceBooleanProperty } from '../../utils/coerce/coerce-boolean';

@Component({
  selector: 'kf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    class: 'kf-button',
    // '[class.btn]': 'btn',
    // '[class.success]': 'success$.value',
    // '[class.fail]': 'fail$.value',
    // '[class.primary]': 'primary$.value',
    // '[class.warning]': 'warning$.value',
    '[class.disabled-button]': 'disabled'
  },
  // 视图封装模式: None: 任何样式都能进来，组件的样式也都能出去
  encapsulation: ViewEncapsulation.None,
  // 输入属性检测机制, 输入属性变化,在进行检测
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() style: string = '';
  @Input() class: string = 'primary';
  @Input() loading: boolean = false;

  @Input()
  @CoerceBooleanProperty()
  disabled: boolean = false;

  @ViewChild('btn')
  btn!: ElementRef;

  @Output() btnOuter = new EventEmitter();

  constructor(private render: Renderer2) {}

  // onClick() {
  //  this.render.setStyle(this.btn.nativeElement , 'color' , this.getRandomColor());
  // }

  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    event.stopPropagation()

    if (this.disabled || this.loading) {
      return false;
    }

    return true;
  }
}
