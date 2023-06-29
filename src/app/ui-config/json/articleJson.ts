export const articleTableJson = {
  displayName: '文章列表',
  search: {
    displayName: '查询',
    fields: [
      {
        rows: 1,
        valueType: 1,
        maxLength: 100,
        placeholder: '搜索当前文件夹...',
        type: 0,
        label: '',
        key: 'title',
        isRequired: false,
      },
    ],
  },
  columns: [
    {
      columnType: 0,
      valueType: 1,
      label: '文件名',
      key: 'title',
      icon: '图标',
      url: 'https://img.doooor.net/img/forum/threadcover/42/13/75293.jpg',
      isShow: true,
      isSort: true,
      isClick: true,
    },
    {
      columnType: 0,
      valueType: 1,
      label: '创建者',
      key: 'creator',
      icon: '图标',
      isShow: true,
      isSort: true,
    },
    {
      columnType: 0,
      valueType: 1,
      label: '创建时间',
      key: 'creationTime',
      icon: '图标',
      isShow: true,
      isSort: true,
    },
  ],
  multiSelect: false,
  enablePagination: true,
  action: {
    displayName: '',
    serviceName: 'ArticlesService',
    methodName: 'SaveArticle',
    dto: {
      title: null,
    },
  },
};

export const articleTableStructure = {
  items: [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: '文件夹100',
      creator: 'admin',
      creationTime: '2021-12-21 13:50:59',
      slug: '/app/article/all/100',
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: '文章100',
      creator: 'admin',
      creationTime: '2021-12-21 13:50:59',
      slug: '/app/article/all/preview/100'//template('/app/article/all/preview/{0}', Math.ceil(Math.random()*10)),
    },
  ],
  totalCount: 2,
};
