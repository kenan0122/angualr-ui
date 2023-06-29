import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kf-drop-down-button',
  templateUrl: './drop-down-button.component.html',
  styleUrls: ['./drop-down-button.component.scss']
})
export class DropDownButtonComponent implements OnInit {
  //当前选中的默认值
  @Input() value: string = '';
  //文本框是否显示value的值，例如主题颜色选择value值会变化实时展示 复制按钮不会变化(复制的时候直接完成复制内容即可)
  @Input() showSelectValue: boolean = true;
  //下拉list内容
  @Input() options: any[] = [];
  //导出选中的数据
  @Output() selectOuter = new EventEmitter();

  customStyle: string = 'background:transparent;border:none;'

  constructor() {
  }

  ngOnInit() {
  }

  /**选中当前具体数据 */
  selectDropDown(option: any) {
    if (this.showSelectValue) {
      this.value = option.name;
    }
    this.selectOuter.emit(option);
  }

}
