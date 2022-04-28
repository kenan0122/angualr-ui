/**
 * Type guard to filter out null-ish values
 *
 * @category Guards
 * @example array.filter(notNullish)
 */
export function notNullish<T>(v: T | null | undefined): v is NonNullable<T> {
	// eslint-disable-next-line unicorn/no-null
	return v != null;
}


export function isUndefinedOrEmptyString(value: unknown): boolean {
  return value === undefined || value === '';
}
