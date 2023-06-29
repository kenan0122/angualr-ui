import { Component, Injector, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { defaultNavigation } from 'projects/ui-angular/src/lib/components/markdown-editor/compontent/custom-navigation/custom-navigation.types';
import { Mode } from 'projects/ui-angular/src/lib/components/markdown-editor/shared/markdown-editor';
import { RequestService } from './ui-config/service/request.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends RequestService implements OnInit {
  @ViewChild('manualUploadChild') manualUploadChild: any;

  loading: boolean = false;

  fileArray: any[] = [];
  picArray = [
    'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
]

  constructor(injector: Injector, private _router: Router, private ref: ChangeDetectorRef) {
    super(injector);
  }

  ngOnInit(): void {
    if(this.fileArray.length == 0 ) {
      this.picArray.forEach((item, index) => {
        this.fileArray.push(
          {
            uid: index,
            pathData: item,
            name: 'otherImage',
            status: 'done',
            url: item
          }
        )
      })
    }
  }

  save(event: any) {
    this.loading = !this.loading;

    if (this.loading) {
     event.stopPropagation();
   return false;

    }

    console.log(7777)
   // this.loading = !this.loading;
   return true
  }

  i = 0;
  handleUpload() {
    // const formData = new FormData();
    // formData.append('mdContent', this.manualUploadChild.blogPicList[0]);
    // formData.append('htmlContent', this.manualUploadChild.blogPicList[0]);

   // this.uploadFile({ type: 'fetch', formData });

   this.fileArray.push(
    {
      uid: this.i++,
      pathData: this.i++,
      name: 'otherImage' + this.i++,
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
  )
  this.ref.markForCheck();
  this.ref.detectChanges();
  }


  uploadFile(param: any) {
    if (param.type === 'fetch') {
      const url = `/api/manage/article/multiple-file-upload`;
      const dto = {
        articleDto: {
          fileNames: ['dddd', 'dddd']
        }
      };
      const formData = new FormData();
      formData.append('mdContent', this.manualUploadChild.blogPicList[0]);
      formData.append('fileNames', JSON.stringify(dto.articleDto.fileNames));
      formData.append('htmlContent', this.manualUploadChild.blogPicList[0]);


      this.request(
        {
          method: 'POST',
          url,
          body: formData
        },
        'http://192.168.1.250:8045'
      ).subscribe((response) => {
        // 上传成功, 调用success方法
        // param.status();
        // 这里的response返回的是上传图片的路径
        //this.inputDto = response;
      });
    }
  }

  markdownPreview() {
    const params: any = defaultNavigation;
    params.articleType = Mode.WeChat;
    this._router.navigate(['/app/markdown-preview'], { queryParams: params });
  }

  translateFn = (key: string) => {
    return key;
  };

  upload = (options: any, input: any) => {
    this.request({
      method: 'GET',
      url: '/api/admin-square/template/table-config',
    }, 'http://192.168.1.184:8022').subscribe(res => {
      options.onSuccess();
      console.log('config', res, input)
    })
  }
}
