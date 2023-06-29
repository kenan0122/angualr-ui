export const NOT_ALL_WHITE_SPACES_INLINE = '(?:[^\\n]*?\\S[^\\n]*?)';

export function compileRegExp(
  obj: any,
  flags: string,
  allowExtendedFlags: boolean = false
) {
  let source = obj.begin + obj.content + obj.end;
  if (allowExtendedFlags) {
    // Extend \h for horizontal whitespace
    source = source
      .replace(/\[\\h\]/g, HORIZONTAL_WHITESPACE)
      .replace(/\\h/g, HORIZONTAL_WHITESPACE);
  }
  return new RegExp(source, flags || 'g');
}
export const HORIZONTAL_WHITESPACE = '[ \\t\\u00a0]';
//https://blog.csdn.net/weixin_43990499/article/details/109893554?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-109893554-blog-109110434.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-109893554-blog-109110434.pc_relevant_default&utm_relevant_index=1
export function isLookbehindSupported() {
  try {
    new RegExp('(?<=.)');
    return true;
  } catch (ignore) {}
  return false;
}
