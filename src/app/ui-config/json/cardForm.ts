export const cardFormJson = {
  action: {
    serviceName: 'file',
    methodName: 'fileUpload',
    dto: null,
  },
  tabs: {
    displayName: '团队项目',
    action: {
      serviceName: 'file',
      methodName: 'fileUpload',
      dto: {
        files: [],
        isWaterEnabled: false
      },
    },
    fields: [
      {
        type: 7,
        label : '',
        key: 'files',
        table: {
          displayName: '内容列表',
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
                label: '',
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
              },
            ],
          },
          breadcrumbs: [{ key: '1', label: '全部文件' }],
          columns: [
            {
              columnType: 0,
              valueType: 1,
              label: '',
              key: 'title',
              icon: '图标',
              isShow: false,
              isSort: true,
              isClick: true
            }
          ],
          multiSelect: false,
          enablePagination: true,
          action: {
            serviceName: 'content',
            methodName: 'get',
            dto: {
              title: '',
            },
          },
        },
      },
      {
        type: 1,
        key: 'isWaterEnabled',
        label: '是否添加水印',
        valueType: 3,
        isMulti: false,
        style: 0,
      },
    ],
  }
};

export const cardTableStructure = {
  items: [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: '文件夹100',
      creator: 'admin',
      creationTime: '2021-12-21 13:50:59',
      slug: '/app/article/all/100',
      url: 'https://img.doooor.net/img/forum/threadcover/42/13/75293.jpg',
      isFolder: true,
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: '文章100',
      creator: 'admin',
      creationTime: '2021-12-21 13:50:59',
      url: 'https://img.doooor.net/img/forum/threadcover/42/13/75293.jpg',
      slug: '/app/article/all/preview/100',
      isFolder: false,
    },
  ],
  totalCount: 2,
};
