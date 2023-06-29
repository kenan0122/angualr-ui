import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, ComponentRef } from '@angular/core';
import { CustomComponentDirective } from './custom.component.directive';

@Component({
  selector: 'kf-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {
  @ViewChild(CustomComponentDirective,{ static: true }) componentHost: CustomComponentDirective  | undefined;
  @Input() component: Component | any;
  @Input() param: any;

  curParam: any;
  componentRef?: ComponentRef<any>;

  constructor() { }

  ngOnInit() {
    this.curParam = { ...this.param };
    this.createNewComponent();
  }

  createNewComponent() {
    if (this.componentHost) {
      /** 获取到模板元素, 因为用viewchild获取dom时定义的 undefined 所以需要手动 as 定义一下类型 */
      const viewContainerRef = (this.componentHost as CustomComponentDirective).viewContainerRef;
      /** 将模板上的元素清空 */
      viewContainerRef.clear();
      /** 创建组件 */
      this.componentRef = viewContainerRef.createComponent<any>(this.component);
         // 传递参数
      // (componentRef?.instance)["param"] = this.param;

      //TODO componentRef 判空
      for (const key of Object.keys(this.componentRef.instance)) {
        (this.componentRef.instance)[key] = this.curParam[key];
      }
    }
  }

  // 保存之前调方法的一个functon, 把最后一次值返回


  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
