import { FormConfigSchemeDto } from '../type/form';

export const formsJson = {
  displayName: '范式管理',
  serviceName: 'ParadigmsService',
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
        }
      ]
    }
  ],
};

export const inputDto = {
  id: "00000000-0000-0000-0000-000000000000",
  moduleType: 0,
  title: null
}
