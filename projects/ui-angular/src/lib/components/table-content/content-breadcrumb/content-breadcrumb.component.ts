import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BreadcrumbConfig } from '../table-content';

@Component({
  selector: 'content-breadcrumb',
  templateUrl: './content-breadcrumb.component.html',
  styleUrls: ['./content-breadcrumb.component.scss'],
    // 视图封装模式: None: 任何样式都能进来，组件的样式也都能出去
    encapsulation: ViewEncapsulation.None,
    // 输入属性检测机制, 输入属性变化,在进行检测
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentBreadcrumbComponent implements OnChanges {
  @Input() breadcrumbs: BreadcrumbConfig[] = [];

  breadcrumbLen: number = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['breadcrumbs']) {
      this.breadcrumbLen = this.breadcrumbs.length;
    }
  }
}
