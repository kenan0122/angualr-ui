import {
  Component,
  HostListener,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  copyList,
  InputFileType,
  IDropDownType,
  IInsertSetting,
  NavigationButtonType,
  ThemeColorType,
} from 'projects/ui-angular/src/lib/components/markdown-editor/compontent/custom-navigation/custom-navigation.types';
import { MarkdownEditorComponent } from 'projects/ui-angular/src/lib/components/markdown-editor/markdown-editor.component';
import {
  defaultEditorModelToobar,
  IButtonType,
  IMdEditorSetting,
  insertList,
  Mode,
} from 'projects/ui-angular/src/lib/components/markdown-editor/shared/markdown-editor';
import { RequestService } from 'src/app/ui-config/service/request.service';

enum FileType {
  Misc = 0,
  Image = 1,
  Video = 2,
  Audio = 3,
  Pdf = 4,
}

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent1 extends RequestService implements OnInit {
  @ViewChild('markdownEditor') markdownEditor:
    | MarkdownEditorComponent
    | undefined; // ViewChild 装饰器里面是ui界面元素
  @ViewChild('markdows') markdows: any; // ViewChild 装饰器里面是ui界面元素
  _callback?: any;

  mockSetting: any = {
    id: 'markdown',
    markdown: '',
    mode: Mode.VuePress,
    articleType: 0,
    readonly: false,
    pasteCallback: (blob: File, callback: any) => {
      // 弹框: 是否添加水印
      // 在进行uploadFile上传
      let isVisibleModal = true;

      this._callback = callback;

      return 'url';
    },
  };

  insertMaterial = () => {
    alert('点击');
  };

  expression = () => {
    // if (this.markdownEditor) {
    //   console.log(this.markdownEditor.save(), '测试提交数据');
    // }
  };
  test = `
    ![](https://i.kingfar.cn/blob/img/cont/6ebff0db-9136-2996-aee2-3a07918f59d9/body/BWizGYGw.png?w=1)

  `;

  // test = '';
  // test = `
  // [01](h1-1 '标题内容')
  // [01](h1-2 '标题内容')
  // [01](h1-3 '标题内容')
  // [01](h1-4 '标题内容')
  // [01](h1-5 '标题内容')
  // `
  mockSetting2: IMdEditorSetting | undefined;

  delay(sec: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000));
  }

  navParams1: string = JSON.stringify({
    isWeChat: false,
    isHighlight: true,
    isWideScreen: true,
    isKingfar: false,
    themeColor: ThemeColorType.Blue,
  });

  navParams2: any = {
    isWeChat: true,
    isHighlight: true,
    isWideScreen: false,
    isKingfar: false,
    themeColor: ThemeColorType.Red,
  };
  callbackFunction: any;
  fileUpload: any;

  copyTypes: IDropDownType[] = copyList;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    //重写监听事件,为了捕获粘贴的功能进行添加路径
    // document.addEventListener('paste', (event) => {
    //   const clipboardData = event.clipboardData;
    //   const type = clipboardData?.items[0].type;
    //   if (type?.match(/image/)) {
    //     let blob: any = clipboardData?.items[0].getAsFile();
    //     let file = new FileReader();
    //     file.readAsDataURL(blob);
    //   }
    //   event.preventDefault();
    //   // this.markdownEditor.setPasteUrlCallback(
    //   //   'http://192.168.1.250:8045/api/cdn/psylabpsylab/article/4/body/d/BM1g2OTY.png?w=1'
    //   // );
    // });
    this.getMarkdownData();
  }

  //如果插入发生变化
  onSettingChange(setting: {
    type: NavigationButtonType;
    content: InputFileType;
  }) {
    if (setting.type === NavigationButtonType.Insert) {
      //插入的内容进行弹框,然后执行相应的内容
      let result: IInsertSetting = {
        type: InputFileType.Image,
        url: '',
        displayText: '',
        hasWaterMarker: false,
      };
      switch (setting.content) {
        case InputFileType.Video:
          result = {
            url: 'https://cdnapi.ergolab.cn/api/cdn/files/MaterialLibrary/Video/0/c68d9892-66d1-eaad-71d7-3a03a98b46c6/jsjuGNkQoPGM6FjDCQZ.mp4',
            displayText: '测试音频',
            type: InputFileType.Video,
            hasWaterMarker: false,
          };
          break;
        case InputFileType.Image:
          result = {
            //url: 'https://cdnapi.ergolab.cn/api/cdn/files/Teams/Picture/0/2670fff8-2119-c821-d2e6-3a04b72ac556/jsjuHiaqciD91bNkRjH.png',
            url: 'https://cdn/file/preview/1.png',
            displayText: '测试图片',
            type: InputFileType.Image,
            hasWaterMarker: true,
          };
          break;
        case InputFileType.Audio:
          result = {
            url: 'https://cdnapi.ergolab.cn/api/cdn/files/Teams/Audio/0/b9061806-35fb-306f-374b-3a00edb7d6d7/jsjuHiaqciHvtaDgpga.ogg',
            displayText: '测试视频',
            type: InputFileType.Audio,
          };
          break;
      }
      // this.markdownEditor.insertCallback(result);
    }
  }

  getMarkdownData() {
    const url =
      '/blob/raw/cont/56c031e8-8275-a896-9974-3a0a8bbefcf4/body.md?h=6TWK3TV7';
    this.request(
      {
        method: 'GET',
        url,
      },
      'https://siteserver.kingfar.cn'
    ).subscribe({
      next: res => {
        console.log(66677, res)

      },
      error: e => {
        console.log(666899977, e.error.text)
        this.mockSetting2 = {
          id: 'markdown2',
          style: { position: 'relative', height: '800px', width: '100%' },
          toolbars: defaultEditorModelToobar(),
          // editorColor: '#007bff',
          editorColor: '#007bff',
          isShowSave: false,
          mode: Mode.WeChat,
          markdown: e.error.text,
          //为了提交后台删除对比使用的
          localFileNamesPattern: new RegExp(/article\/\w+\/body\/[p|d]\/(\w+\.\w+)/g),
          fileReferencesPattern: undefined,
          isImport: false,
          buttonSetting: [
            {
              type: IButtonType.DropDown,
              text: '上传/插入',
              options: insertList,
              fn: this.insertMaterial,
            },
            {
              type: IButtonType.Button,
              text: '保存',
              options: undefined,
              fn: () => {
                alert('保存成功');
              },
            },
          ],
          pasteMoalCallback: async (file: File) => {
            // await this.delay(10);
            return 'hbbb';
          },
          patternBaseUrl: 'https://i.kingfar.cn',
          patternId: '6ebff0db-9136-2996-aee2-3a07918f59d93',
          readonly: false,
        }
      }
    });
  }

  // @HostListener('paste', ['$event']) keyDown(event: ClipboardEvent) {
  //   const clipboardData: DataTransfer =
  //     event.clipboardData || (window as any).clipboardData;
  //   const text = clipboardData.getData('text');

  //   // 清空剪切板
  //   clipboardData.clearData('text');
  //   if (text) {
  //     const res = 'ceshi';
  //     console.log(text, res, '经历了');
  //     if (res !== text) {
  //       console.log('让开一下');
  //       // 复制文本, 粘贴到markdown中
  //       this.markdownEditor.insertMarkdown(res, text);
  //     }
  //   }
  // }
  @HostListener('paste', ['$event']) pasteEvent(event: ClipboardEvent) {
    let target;
    if (event.target) {
      target = event.target['nodeName'].toLowerCase();

      if (target === 'textarea') {
        const clipboardData: DataTransfer =
          event.clipboardData || (window as any).clipboardData;
        const text = clipboardData.getData('text');

        // 清空剪切板
        clipboardData.clearData('text');

        const url = `/api/admin-cdn/article/inside-copy`;
        const input = {
          newId: 'e63f6d73-ca87-af37-842d-3a07a035821b',
          text,
        };

        let res =
          '```box1\r\n遇见喜欢的或适合公司形象的样式可以私信@我们哦，编辑器的样式会进行不定时更新的！\r\n```\r\n``` box2\r\n彩页（Direct mail,缩写DM），意为快讯商品广告，通常由8开或16开广告纸正反面彩色印刷而成。DM可以直接将广告信息传送给真正的受众，而其它广告媒体形式只能将广告信息笼统地传递给所有受众，而不管受众是否是广告信息的真正受众\r\n```\r\n![](https://siteserver.kingfar.cn/blob/img/cont/e63f6d73-ca87-af37-842d-3a07a035821b/body/BifRQ91E.svg?h=VxAg3Gz4)';

        setTimeout(() => {
          this.markdownEditor?.insertMarkdown(res, text);
        }, 100);
        // this.request({
        //   method: 'POST',
        //   url,
        //   body: input
        // }).subscribe((res)=>{
        //   console.log(res, 'res', this.markdownEditor);
        //   this.markdownEditor?.insertMarkdown(res, text);
        // })
      }
    }
  }
}
