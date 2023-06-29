
import {
  IconFolder,
  IconPhotograph,
  IconPlay,
  IconVolumeUp,
  IconDocumentDuplicate,
  IconDuplicate,
  IconArticleRectDuo,
  IconInformationCircle,
} from '@psylab/icons-path';


export function toCdnUrl() {
  return 'https://cdnapi.psylab.com.cn';
}

export function thumbnail(url: string, size: number) {
  const baseUrl = toCdnUrl();
  let thumbnail: any;
  if (url) {
    thumbnail = {
      webpUrl: `${baseUrl}${url}?s=${size}&f=.webp`,
      imgUrl: `${baseUrl}${url}?s=${size}`,
    };
  }

  return thumbnail;
}

export function icon(param: any) {
  let icon;
  if (param.isFolder) {
    icon = IconInformationCircle;
  } else {
    icon = IconInformationCircle;
  }

  return icon;
}
