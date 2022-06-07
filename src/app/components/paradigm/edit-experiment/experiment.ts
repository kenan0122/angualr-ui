export type FileContentType = Blob | string | object;

export interface IDownloadFileInfo {
	name: string;
	mimeType: string;
	content: FileContentType;
}

export interface IUploadFileInfo extends IDownloadFileInfo {
	folder: string;
}

export interface IStatInfo {
	type: number;
	name: string;
	/**可以为空 */
	blockName: string;
}

export interface IConfigPostDto {
	expId: string;
	usedBlockFormTypes?: Set<number>;
	/**config用到的文件名列表，后台用于删除无用的文件 */
	fileNames: string[];
	/**后台用于判断是否有统计的指标，和查看多人报告时候的表头，以及后期常模使用 */
	stats: IStatInfo[];
	/**对应Paradigm范式，需要提供一个可添加的FormType类型数组，该列表主要根据权限决定 */
	blockFormTypes?: number[];
}
