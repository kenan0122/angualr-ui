### 获取 svelte 中例如 bind:this 的 dome 的元素

[参考链接地址](https://blog.csdn.net/yunchong_zhao/article/details/106258813)

### 相关方案

- 方案一:使用[cherry](https://github.com/Tencent/cherry-markdown)
- 方案二:使用[@toast-ui](https://github.com/nhn/tui.editor)

微信 inline 转化

- https://automattic.github.io/juice/
-

#### 采用方案一来做:难点调研

- link 和 blockCode 的重写(测验完成)
- 主题颜色和样式的设置 目前不使用 style 行内样式。使用外部 style 通过 class 进行设置。通过 juce 进行解析成行内样式，只有微信模式在单独处理。变为行内样式。
- 复制放到 angular 中会有问题(需要自己使用复制功能) 自己内部保存直接只用 toHtml 和保存自己的样式 参考自定义主题来进行测试

### 是否需要扩展 ui 方面

- toolbars 可以设置主题颜色(明暗色) 觉得是有必要的因为不同网站的时候可能使用的颜色不一样(也可以强制更改主题的样式)
- 编辑器可以设置主题颜色(需要导入主题文件)
- 内部书写样式的时候尽量使用唯一标识 别把其余的默认样式改了

- editor 需要有 5 个选择
  主题(vuePress,WeChat)，
  主题色(以前三种)，
  明暗
  是否手机
  水印

在路由上有一个 auto 的属性 可以使用 query 来区分

#### 访问地址

http://localhost:4500/app/markdown-preview

#### 需要修改 h1-11 比以前多了个 null

```
[null](h1-11 '标题内容')
[](h1-11 '标题内容')

[null](h1-12 '标题内容')
[](h1-12 '标题内容')

[null](h1-13 '标题内容')
[](h1-13 '标题内容')

[null](h1-14 '标题内容')
[](h1-14 '标题内容')

[null](h1-15 '标题内容')
[](h1-15 '标题内容')
```

#### 优化内容

- 页面中使用 class 不需要使用 style 行内样式 这样代码看起来更加干净
- 编辑器支持主题颜色的更换
- 左侧样式支持 跟随主题色 [方案完成]
- 导航设置
  - 主题颜色切换

#### vuepress 和 wechat 的切换

- 当 vuepress 和 wechat 进行切换的时候 将内容进行
- 手机屏幕使用 420px 和以前的 cdn 一样

#### 2022-6-21

- 左侧点击插入内容 [完成]
- 右侧切换主题颜色 [完成]
- 复制到 Article 复制到 Wechat 复制到 Markdown 功能
- 纯预览只能加载对应的预览内容 无需边界界面的东西 只需要更改 html 即可 改变对应的样式 **\*\*\*\***
- 是否需要增加一个 loading 的功能

### 需要优化的三个小问题

- 复制的时候如何获本地静态文件 实现复制的功能 [已解决]
  使用 ts 加载 css 然后放到 document 中的 style 中 [已解决]
- 点击添加的时候会有两个 br 看着很丑
- ` ` box3-h1

### 需求

在添加图片的时候需要在 html 中手动的添加或删除其中的水印文件 ?w=1 ?w=2
在保存的时候明确规定只有在 article/preview 中进行提交

#### 所有的 url 的可能性

本地:
{projectName}/article/{articleShortId}/preview/1.png //有水印
{projectName}/article/{articleShortId}/download/1.png //无水印
{projectName}/article/{articleShortId}/download/1.mp3 //音频

//单独在 ergolab 上进行处理 1 名称
//或者 blog/1/xxx.png

素材库:
{projectName}/file/{shortId}.png
{projectName}/file/{shortId}.MP4?s=64&f=webp

unicId 上传的时候使用的 id 相当于命名

[null,null,null](img-1 "https://cdnapi.ergolab.cn/api/cdn/files/Teams/Picture/1/2670fff8-2119-c821-d2e6-3a04b72ac556/jsjuHxumPt4yKPRtVfR.png")
[null,null,null](img-1 "https://cdnapi.ergolab.cn/api/cdn/files/Teams/Picture/0/2670fff8-2119-c821-d2e6-3a04b72ac556/jsjuHxumPt4yLavx4gv.png")
[null,null,null](img-1 "https://cdnapi.ergolab.cn/api/cdn/files/MaterialLibrary/Picture/0/3761f21b-3016-dadd-6198-3a0569770f55/jsjuHxukkZDtF879nQB.jpg")

[](audio-1 "https://cdnapi.ergolab.cn/api/cdn/files/Teams/Audio/0/2670fff8-2119-c821-d2e6-3a04b72ac556/jsjuHxumPt4zfnkYB6m.ogg")
[](audio-1 "https://cdnapi.ergolab.cn/api/cdn/files/MaterialLibrary/Audio/0/44b29ef1-e567-e1a4-49c6-3a0545afd2f4/jsjuHidHpFagk8AbHt7.mp3")

[](video-1 "https://cdnapi.ergolab.cn/api/cdn/files/Teams/Video/0/2670fff8-2119-c821-d2e6-3a04b72ac556/jsjuHxumPt4zfnoXzSB.ogg")
[](video-1 "https://cdnapi.ergolab.cn/api/cdn/files/MaterialLibrary/Video/0/ac35f3ad-4cbb-da07-e510-39fd24ba71b5/jseEvLjEA4JXbybZQse.mp4")`,

#### 匹配所有图片

(\[._\]\(audio-1 ._\))|(\[._\]\(img-1 ._\))|(\[\]\(video-1 .\*\))

#### 匹配 h1 替换内容[](xxx) [null](xxx)

(\[\]\(h1-._ ._\))

### 文章移动的写法

- 读取链接 获取文件名称和 markdown view=true
- 创建调用新的创建 api 传入名称 类型 wechat
- 掉用旧接口 1、p-slug short-id Mdcontent
  //h1-null


#### 微信参考链接地址
https://www.kdocs.cn/l/cbmtaQUdES2Q