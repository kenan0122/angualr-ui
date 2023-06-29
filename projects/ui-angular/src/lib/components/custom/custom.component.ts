import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { ComponentInstance } from '../form/form-page/form-page';
import { AbstractValueAccessor, MakeProvider } from '../input/asbstract-value-accessor';

@Component({
  selector: 'kf-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: MakeProvider(CustomComponent),
})
export class CustomComponent extends AbstractValueAccessor implements OnInit, OnDestroy {
  @ViewChild('virtualContainer', { read: ViewContainerRef, static: true })
  virtualContainer?: ViewContainerRef;
  @Input() component: Component | any;
  @Input() params: any;
  @Input() outer: string = '';


  curParam: any;
  componentRef?: ComponentRef<any>;

  constructor(@Optional() private parent: ComponentInstance) {
    super();
  }

  ngOnInit() {
    this.curParam = { ...this.params };
    this._createNewComponent();
  }

  private _createNewComponent() {
    if (this.virtualContainer) {

      // 创建组件之前, 清空容器
      //this.virtualContainer.clear();
      this.componentRef = this.virtualContainer.createComponent<any>(
        this.component
      );

      if (this.componentRef) {
        // 传递参数
        for (const key of Object.keys(this.curParam)) {
          this.componentRef.instance[key] = this.curParam[key];
        }

        // 接收上报的数据
        // componentRef.instance[this.outer].subscribe((res: any) => {
        //   this._preSave(res);
        // })
        this.parent.instanceChanged(this.componentRef.instance)
      }

    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
