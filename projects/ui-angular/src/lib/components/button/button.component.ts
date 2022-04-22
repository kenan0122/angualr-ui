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
    class: 'kf-button'
    // '[class.btn]': 'btn',
    // '[class.success]': 'success$.value',
    // '[class.fail]': 'fail$.value',
    // '[class.primary]': 'primary$.value',
    // '[class.warning]': 'warning$.value',
    // '[class.disabled-button]': 'disabled'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() promise?: Promise<any>;
  @Input() type: string = 'button';
  /** 需要通过按钮向外传递的数据 */
  @Input() data: any;
  @Input() style: string = '';

  @Input()
  @CoerceBooleanProperty()
  disabled = false;

  @ViewChild('btn')
  btn!: ElementRef;

  @Output() btnOuter = new EventEmitter();

  constructor(private render: Renderer2) {}

  // onClick() {
  //  this.render.setStyle(this.btn.nativeElement , 'color' , this.getRandomColor());
  // }

  btnClick() {
    this.btnOuter.emit(this.data);
  }

  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.disabled) {
      event.stopPropagation();
      event.preventDefault();

      return false;
    }

    return true;
  }
}
