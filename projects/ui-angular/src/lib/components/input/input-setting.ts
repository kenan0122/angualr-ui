export function getFileSetting() {
  return {
    readonly: false,
    // 控件标题
    title: '',
    // 有标题
    noTitle: false,
    multiple: false,
    // 只能上传的数量
    maxLength: 10,
    // 以b为单位
    fileSize: 2 * 1024 * 1024,
    // audio/* video/* image/*
    fileType: '*',
  };
}

export function getListSetting() {
  return {
    readonly: false,
    // 控件标题
    title: '',
    // 有标题
    noTitle: false,
    // 一页显示的个数
    maxItemLength: 8,
    // 一行数据的高度
    itemSize: 32,
    // 根据传过来的字段, 判断为false禁用复选框, true可选复选框
    disabledProp: '',
    // key
    valueField: 'value',
    // label
    labelField: 'key',
  };
}
export function getRadioSetting() {
  return {
    readonly: false,
    // RadioButton 的风格样式，目前有描边和填色两种风格
    buttonStyle: 'solid',
    radioType: 'radio',
    isExtra: false,
    // key
    valueField: 'value',
    // label
    labelField: 'key',
    //禁用控件
    disabledField: 'disabled',
    // 控件标题
    title: '',
    // 有标题
    noTitle: false,
  };
}

export function getCheckboxSetting() {
  return {
    readonly: false,
    // key
    valueField: 'id',
    // label
    labelField: 'name',
    // 控件标题
    title: '',
    // 有标题
    noTitle: false,
  };
}

export function getSelectSetting() {
  return {
    // 禁止
    readonly: false,
    // key
    valueField: 'value',
    // label
    labelField: 'key',
    // 控件标题
    title: '',
    // 有标题
    noTitle: false,
    placeholder: '',
    // 是否多选
    isMulti: false,
    // 允许被清除
    allowClear: true,
    //使单选模式可搜索
    showSearch: true,
  };
}

export function getDefaultSetting() {
  return {
    // 禁止
    readonly: false,
    // 控件标题
    title: '',
    // 没有标题
    noTitle: false,
    placeholder: '请输入....',
    maxLength: 20,
  };
}


export function getDefaultLayout(controlId?: string) {
  return {
    id: controlId,
    // 无border
    borderless: false,
    // 控件大小(第三方控件)
    size: 'large',
    // label的样式
    labelHtmlClass: '',
    // 控件样式
    fieldHtmlClass: '',
    // 最外层parent样式
    htmlClass: 'kf-justify-center',
  };
}
