export const cardTableJson = {
  displayName: '文章列表',
  search: {
    displayName: '查询',
    fields: [
      {
        isMulti: false,
        style: 1,
        options: {
          Psylab: 1,
          Ergolab: 2,
          Kingfar: 3,
          Square: 4,
        },
        type: 1,
        label: '项目',
        key: 'moduleType',
        isRequired: true,
      },
      {
        rows: 1,
        valueType: 1,
        maxLength: 100,
        placeholder: '搜索当前文件夹...',
        type: 0,
        label: '',
        key: 'title',
        isRequired: false,
      }
    ],
  },
  columns: [
    {
      columnType: 0,
      valueType: 1,
      label: '',
      key: 'title',
      icon: '图标',
      isShow: false,
      isSort: true,
      isClick: true,
    },
    {
      columnType: 0,
      valueType: 1,
      label: '',
      key: 'creator',
      icon: '图标',
      isShow: false,
      isSort: true,
    },
    {
      columnType: 0,
      valueType: 1,
      label: '',
      key: 'creationTime',
      icon: '图标',
      isShow: false,
      isSort: true,
    },
  ],
  multiSelect: false,
  enablePagination: true,
  disableOperation: true,
  action: {
    displayName: '',
    serviceName: 'ArticlesService',
    methodName: 'SaveArticle',
    dto: {
      name: null,
    },
  },
};

export const cardTableStructure = {
  items: [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa8',
      name: '文件夹100',
      creator: 'admin',
      creationTime: '2021-12-21 13:50:59',
      slug: '/app/article/all/100',
      path: 'https://img.doooor.net/img/forum/threadcover/42/13/75293.jpg',
      isFolder: true
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa8',
      name: '文章100',
      creator: 'admin',
      creationTime: '2021-12-21 13:50:59',
      path: 'https://img.doooor.net/img/forum/threadcover/42/13/75293.jpg',
      slug: '/app/article/all/preview/100',
      isFolder: false
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa8',
      name: '文章200',
      creator: 'admin',
      creationTime: '2021-12-21 13:50:59',
      path: 'https://img.doooor.net/img/forum/threadcover/42/13/75293.jpg',
      slug: '/app/article/all/preview/100',
      isFolder: false
    },
  ],
  totalCount: 2,
};
