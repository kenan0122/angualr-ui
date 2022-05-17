# Overview
用于渲染tab下的表单的,主要用到的地方是数据的添加/编辑, 组件名称: 'kf-form-page'

## Param
### Input

#### forms
类型: any
作用: 渲染表单组件的结构
默认: null

#### inputDto
类型: any
作用: 渲染表单数据的机构
默认: null

#### visibleBtn
类型: FormBtn
作用: 控制显示表单中的取消/保存按钮
默认:  {
    cancel: true,
    promise: true
  }

### Output
#### formPageOuter
作用: 不管是点击取消还是保存, 都会把数据上报到父组件, 在父组件中接收上报的事件
返回: {modal: boolean}. true表示保存数据, false表示取消数据

# Sample
```
// html中
  <kf-form-page
    [forms]="jsonData"
    [inputDto]="inputDto"
    (formPageOuter)="saveForm($event)">
  </kf-form-page>
```
```
// ts中
export class AppComponent {
   saveForm(param: any) {
    if(param.modal) {
      this.handleOk();
    } else {
      this.handleCancel();
    }
  }
}

```
