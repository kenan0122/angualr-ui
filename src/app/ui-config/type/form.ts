import { IOptionEntry, ServiceRequestDto } from "./base";

export interface FormConfigSchemeDto<T> {
  action: ServiceRequestDto<T>;
  tabs: FormTabConfigScheme<T>[];
}

export interface FormTabConfigScheme<T> {
  displayName?: string;
  // fields 是 FormFieldConfigSchemeBase[]
  fields: object[];
  action?: ServiceRequestDto<T>;
}

/** 表单基类 */
export interface FormFieldConfigSchemeBase {
  label: string;
  // 后台字段名
  key: string;
  isRequired: boolean;
  type: FormFieldType;
}

/** 字段组(例如封面内容里面又是一个表单列表) */
export interface FieldGroup extends FormFieldConfigSchemeBase {
  type: FormFieldType.Group;
  fields: Array<FormFieldConfigSchemeBase>
}

// 文本框, 文本域, 数字框, 日期
export interface TextInputConfigScheme extends FormFieldConfigSchemeBase {
  maxLength: number;
  valueType: ValueType;
  /** 大于1是文本域 */
  rows: number;
  placeholder: string;
  type: FormFieldType.TextInput;
}

// Scheme 方案
export interface SelectConfigScheme extends FormFieldConfigSchemeBase {
  options: Array<IOptionEntry>;
  /** 向后台传递的是什么类型 */
  valueType: ValueType;
  isMulti: boolean;
  style: SelectInputStyle;
  type: FormFieldType.Select;
  placeholder: string;
}

export interface FileUploadConfigScheme extends FormFieldConfigSchemeBase {
  fileType: InputFileType;
  /** 文件上传大小(MB为单位) */
  maxFileSize: number;
  /** 文件个数 */
  maxFileCount: number;
  /**文件上展示的按钮 {showPreviewIcon: false, showRemoveIcon: true} */
  showUploadList: object;
  /** 是否自动上传 */
  isAutoUpload: boolean;
  type: FormFieldType.FileUpload;
}

export interface QuestionCoverConfigScheme extends FormFieldConfigSchemeBase {
  type: FormFieldType.QuestionCover;
}

// 表单类型枚举
export enum FormFieldType
{
    TextInput,
    Select,
    FileUpload,
    Group,
    MarkDown,
    QuestionCover,
    Card,
    Custom
}

/** 文件类型 */
export enum InputFileType
{
  Img,
  Zip,
  Any
}

/** input类型 */
export enum ValueType
{
  Number,
  String,
  Date,
  Boolean
}

/** Select枚举 */
export enum SelectInputStyle
{
  CheckBox,
  // 下拉列表(可单选可多选: 不带复选框)
  ComboBox,
  // 列表(带有复选框多选)
  List
}
