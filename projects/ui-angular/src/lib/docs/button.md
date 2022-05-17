# Overview
可以用在任意组件中, 并提供点击事件, 组件名称: 'kf-button'

## Param
### Input

#### type
类型: string
作用: 定义button的类型
默认: 'button'

#### data
类型: any
作用: 需要按钮向外传递的数据, 对于点击事件有用
默认: null

#### style
类型: string
作用: 对button定义行内样式
默认: ''

#### class
类型: string
作用: 在button.scss中已经定义好的几个类,分别是:success, danger, primary, warning
默认: 'primary'

#### disabled
类型: boolean
作用: 是否禁用button, 禁用按钮不可点击
默认: false

### Output
#### btnOuter
作用: 指令的方法绑定, 主要用于外部组件调用button的时候, 接收点击事件, 并在调用者中实现点击事件
返回: data

# Sample
```
// html中
    <kf-button
      class="primary"
      style="width: 100px;"
      [disabled]="false"
      [data]="btnData"
      (btnOuter)="click($event)"
    >
      保存
    </kf-button>
```
```
// ts中
export class AppComponent {
  btnData = {
    name: 'kf',
    age: '25'
  };

  click(param: object) {
    console.log('点击我', param.name)
  }
}

```
