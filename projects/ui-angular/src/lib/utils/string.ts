/**
 * Dead simple template engine, just like Python's `.format()`
 */
export function template(str: string, ...args: any[]): string {
	return str.replace(/{(\d+)}/g, (match, key) => {
		const index = Number(key);
		if (Number.isNaN(index)) return match;
		return args[index];
	});
}
