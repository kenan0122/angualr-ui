import { round, template } from "@psylab/utils";

const defaultSetting = {
	maxFileSize: 4 * 1024 * 1024,
	lengthRange: 20,
};

export enum InputFileType
{
  Img,
  Zip,
  Any
}

export function getFileInputTitle(maxFileSize?: number): string {
	if (maxFileSize) {
		const maxSizeStr =
			maxFileSize > 1024 * 1024
				? `${round(maxFileSize / (1024 * 1024))}MB`
				: `${round(maxFileSize / 1024, 3)}KB`;
		return template('添加文件大小不能超过{0}', maxSizeStr);
	}

  return ''
}

export function isValidFile(file: File, type: string, maxSize?: number) {
  const fileType = type.substring(0, type.indexOf('/'));
  let isFileSuccess = type === '*' ? true : (file.type && file.type.startsWith(fileType));

	if (file && isFileSuccess) {
		if (maxSize) {
			if (file.size <= maxSize) {
				return {success: true, msg: ''};
			} else {
        return {success: false, msg: getFileInputTitle(maxSize)};
      }
		} else {
			return {success: true, msg: ''};
		}
	}
	return {success: false, msg: '添加文件类型不对'};
}





export function toDataURL(blob: Blob ,callback: (img: string) => void): void {
		const reader = new FileReader();
		reader.onloadend = () => callback(reader.result!.toString());
    if (blob) {
      reader.readAsDataURL(blob);
    }
}
