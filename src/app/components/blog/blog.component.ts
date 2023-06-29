
import {  Component, OnInit } from '@angular/core';
import { IconFolder } from '@psylab/icons-path';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { addBlogForm, blogTableJson, blogTableStructure } from 'src/app/ui-config/json/blogJson';
import { JsonUrlDto } from 'src/app/ui-config/type/base';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  reload: any = {};
  tableJsonData: any;
  tableData: any;

  inputDto: any;
  formsJsonData: any;
  isVisibleModal: boolean = false;

  path = IconFolder;

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      icon: 'smile',
      url: 'https://img.doooor.net/img/forum/threadcover/42/13/75293.jpg',
    },
    {
      title: 'parent 2',
      key: '101',
      expanded: true,
      icon: 'smile',
      url: '',
    },
  ];

  tabs = [
    {
      displayName: 'post管理',
      jsonUrlObj: {
        tableJsonUrl: '/api/Paradigm/fields/table-config',
        tableDataUrl: '/api/Paradigm/fields/page',
        deleteJsonUrl: '/api/Paradigm/fields/{0}',
        formJsonUrl: '/api/Paradigm/fields/form-config',
        formDataUrl: '/api/Paradigm/fields/{0}/for-edit',
        saveUrl: '/api/Paradigm/fields/save-field'
      }
    },
    {
      displayName: 'tag管理',
      jsonUrlObj: {
        tableJsonUrl: '/api/Paradigm/dimensions/table-config',
        tableDataUrl: '/api/Paradigm/dimensions/page',
        deleteJsonUrl: '/api/Paradigm/dimensions/{0}',
        formJsonUrl: '/api/Paradigm/dimensions/form-config',
        formDataUrl: '/api/Paradigm/dimensions/{0}/for-edit',
        saveUrl: '/api/Paradigm/dimensions/save-dimension'
      }
    }
  ];

  constructor() {}

  ngOnInit() {
    this.fetchPostData();
  }

  fetchPostData() {
    this.tableJsonData = blogTableJson;
    const random = Math.ceil(Math.random() * 10);

    const items = blogTableStructure.items.map((item) => {
      item.slug = item.slug + random;
      item.title = item.title + random;
      return item;
    });
    this.tableData = Object.assign(blogTableStructure, {
      items,
    });
  }
  add() {}

  addBlog() {
    this.isVisibleModal = true;
    this.inputDto = addBlogForm.action.dto;
    this.formsJsonData = addBlogForm;
  }

  clickNode(event: NzFormatEmitEvent) {
    this.fetchPostData();
  }

  closeModal(param: any) {
    if (param.modal) {
      this.tableData.items.push(this.inputDto);
      this.fetchPostData();
    }

    this.isVisibleModal = false;
  }

}
