export interface FormConfigSchemeDto {
  displayName?: string;
  serviceName?: string;
  methodName?: string;
  tabs: FormTabConfigScheme[];
}

export interface FormTabConfigScheme {
  displayName?: string;
  // fields 是 FormFieldConfigSchemeBase[]
  fields: object[];
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
  type: FormFieldType.TextInput
}

export interface IOptionEntry<T = any> {
	name: string;
	value: T;
	[prop: string]: any;
}

// Scheme 方案
export interface SelectConfigScheme extends FormFieldConfigSchemeBase {
  options: Array<IOptionEntry>;
  /** 向后台传递的是什么类型 */
  valueType: ValueType;
  isMulti: boolean;
  style: SelectInputStyle;
  type: FormFieldType.Select
}

export interface FileUploadConfigScheme extends FormFieldConfigSchemeBase {
  fileType: FileType;
  maxFileSize: number;
  type: FormFieldType.FileUpload;
}

// 表单类型枚举
export enum FormFieldType
{
    TextInput,
    Select,
    FileUpload,
    Group,
    MarkDown
}

/** 文件类型 */
export enum FileType
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
  Date
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