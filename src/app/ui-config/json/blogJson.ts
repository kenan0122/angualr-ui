import { FormConfigSchemeDto } from '../type/form';

export const blogTableJson = {
  displayName: 'blog列表',
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
      key: 'slug',
      icon: '图标',
      isShow: true,
      isSort: true,
    }
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

export const blogTableStructure = {
  items: [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: '文件夹100',
      slug: '/app/article/all/100',
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: '文章100',
      slug: '/app/article/all/preview/100'//template('/app/article/all/preview/{0}', Math.ceil(Math.random()*10)),
    },
  ],
  totalCount: 10,
};


export const formsJson = {
  displayName: 'blog管理',
  serviceName: 'BlogService',
  methodName: 'SaveBlog',
  tabs: [
    {
      displayName: '基础信息',
      fields: [
        {
          rows: 1,
          valueType: 1,
          maxLength: 100,
          placeholder: '请输入....',
          type: 0,
          label: '范式名称',
          key: 'title',
          isRequired: true,
        },
        {
          isMulti: false,
          style: 0,
          options: {
            问卷: 0,
            量表: 1,
            范式: 2,
          },
          type: 1,
          label: '测验类型',
          key: 'moduleCategory',
          isRequired: true,
        },
        {
          isMulti: false,
          style: 1,
          options: {
            问卷表模板: 1,
            问答型量表模板: 2,
            反应时量表模板: 3,
            实验范式模板: 4,
          },
          type: 1,
          label: '模板类型',
          key: 'moduleType',
          isRequired: true,
        },
        {
          isMulti: false,
          style: 2,
          options: {
            时间知觉: 10,
            音频知觉: 11,
            速度知觉: 12,
            颜色知觉: 13,
            线条判断: 14,
            'N-Back记忆负荷': 20,
            空间记忆广度: 21,
            数字记忆广度: 22,
            目标计数: 23,
            目标还原: 30,
            划消测验: 31,
            舒尔特方格: 32,
            PVT精神运动警觉性: 33,
            多目标追踪: 34,
            点位跳跃: 35,
            视觉搜索绩效: 36,
            三维心理旋转: 37,
            三维多目标追踪: 38,
            气球模拟风险任务: 40,
            爱荷华博弈: 41,
          },
          type: 1,
          label: '试次类型',
          key: 'blockFormTypes',
          isRequired: true,
        },
        {
          isMulti: true,
          style: 1,
          options: {
            领域3: '030500dc-2a74-b7cb-8a91-3a02a91e5082',
            'fg  ': '43a1586e-13f4-ec89-f0db-3a02ec3885c7',
          },
          type: 1,
          label: '领域名称',
          key: 'fields',
          isRequired: true,
        },
        {
          isMulti: true,
          style: 1,
          options: {
            发鬼地方: 'f4509919-4ea5-87ef-ed8a-3a0310459e81',
            个富商大贾: '8bd8f24d-d22a-ed37-b955-3a02cd60a6ee',
            更好的: 'a5483674-0b41-fc13-58ba-3a031045f898',
          },
          type: 1,
          label: '维度名称',
          key: 'dimensionIds',
          isRequired: true,
        },
      ],
    },
    {
      displayName: '封面信息',
      fields: [],
    },
    {
      displayName: '配置信息',
      fields: [],
    },
  ],
};

export const addBlogForm = {
  action: {
    displayName: '领域管理',
    serviceName: 'FieldsService',
    methodName: 'SaveField',
    dto: {
      id: null,
      title: null,
      slug: null
    },
  },
  tabs: [
    {
      displayName: '基础信息',
      fields: [
        {
          rows: 1,
          valueType: 1,
          maxLength: 100,
          placeholder: '请输入....',
          type: 0,
          label: '博客名称',
          key: 'title',
          isRequired: true,
        },
        {
          rows: 1,
          valueType: 1,
          maxLength: 100,
          placeholder: '请输入....',
          type: 0,
          label: '路由路径',
          key: 'slug',
          isRequired: true
        }
      ],
    },
  ],
};
