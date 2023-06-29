import { IOptionEntry, ServiceRequestDto } from './base';

export interface TableConfigScheme<T> {
  /** 页面名称 */
  displayName: string;
  search?: TableSearch;
  /** 是否显示分页, 没有分页的话, dto不需要定义相关页面参数 */
  enablePagination: boolean;
  /** 是否多选(true: 第一列为checkbox) */
  multiSelect: boolean;
  /** 隐藏显示操作列 */
  disableOperation?: boolean;
  columns: Array<ColumnBase>;
  action: ServiceRequestDto<T>;
}

export interface TableSearch {
  /** 按钮名称 */
  displayName: string;
  /** 表单集合 */
  field: Array<object>;
}

export interface ColumnBase {
  /** 对应的后台返回字段 */
  key: string;
  /** 前端显示的列标题 */
  label: string;
  /** 图标 */
  icon: string;
  /** 是否显示 */
  isShow: boolean;
  /** 是否排序 */
  isSort: boolean;
  /** 列的类型 */
  columnType: ColumnType;
  /** 值的类型 */
  valueType: ValueType;
}

export interface SelectColumn extends ColumnBase {
  /** 下拉选项 */
  options: Array<IOptionEntry>;
  /** 是否多选 */
  isMulti: boolean;
  /** 请求的服务 */
  action?:  ServiceRequestDto<object>;
}

export interface SwitchColumn extends ColumnBase {
  /** 枚举选项 */
  options: Array<IOptionEntry>;
   /** 请求的服务 */
  action?:  ServiceRequestDto<object>;
}

export enum ColumnType
{
  Text,
  // 包括: 枚举, 下拉
  Select,
  // Switch控件
  Switch,
  // 自定义
  Custom
}

// 后台返回数据的类型
export enum ValueType
{
  String,
  Number,
  Date,
  Boolean
}
