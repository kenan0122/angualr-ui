export interface IThumbnail {
    imgUrl: string;
    webpUrl?: string;
  }
  
  export interface IconSetting {
    size: string;
    color: string;
    style: string;
  }
  
  export const defaultIconSetting: IconSetting = {
    size: '32',
    color: '#22befb',
    style: '',
  };
  