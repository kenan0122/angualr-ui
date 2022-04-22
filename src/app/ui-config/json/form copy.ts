import { FormConfigSchemeDto } from "../type/form";

export const formsJson: FormConfigSchemeDto = {
  displayName: '范式管理',
  serviceName: 'ParadigmsAppService',
  methodName: 'SaveParadigm',
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
          options: { 问卷: 0, 量表: 1, 范式: 2 },
          type: 1,
          label: '测验类型',
          key: 'moduleCategory',
          isRequired: true,
        },
        {
          isMulti: false,
          style: 0,
          options: {
            问卷量表模板: 1,
            问答型量表模板: 2,
            反应时量表模板: 3,
            实验范式模板: 4,
          },
          type: 1,
          label: '模板类型',
          key: 'modelType',
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
    { displayName: '封面信息', fields: [] },
    { displayName: '配置信息', fields: [] },
  ],
};
