export interface IOptionEntry<T = any> {
	name: string;
	value: T;
	[prop: string]: any;
}
