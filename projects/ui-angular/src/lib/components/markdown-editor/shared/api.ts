import { INavigation } from '../compontent/custom-navigation/custom-navigation.types';

export interface InsertContent {
  type: InsertType;
  maxWidth: number;
  maxHeight: number;
  border: number;
  needWaterMarker: boolean;
}

export interface ISaveSetting {
  html: string;
  markdown: string;
  setting: INavigation;
}
//插入功能为完成等待开发
export enum InsertType {
  Img,
  Audio,
  Video,
}
