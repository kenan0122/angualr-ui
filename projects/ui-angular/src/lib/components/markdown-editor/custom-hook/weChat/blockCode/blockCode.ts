import * as customHook from '.';
import * as docsHook from '../../vuePress/blockCode';

export function getWeChatMarkdownRenderer() {
  const customHookKeys = Object.keys(customHook);
  const result = {};
  customHookKeys.forEach((hookKey) => {
    result[hookKey] = { render: customHook[hookKey][hookKey].render };
  });
  return result;
}

//VuePress 解析目前不需要，用于后期扩展
export function getVuepressMarkdownRenderer() {
  const customHookKeys = Object.keys(docsHook);
  const result = {};
  customHookKeys.forEach((hookKey) => {
    result[hookKey] = { render: docsHook[hookKey][hookKey].render };
  });
  return result;
}

export function getCodeBlockRule() {
  const codeBlock = {
    /**
     * (?:^|\n)是区块的通用开头
     * (\n*)捕获区块前的所有换行
     * (?:[^\S\n]*)捕获```前置的空格字符
     */
    begin: /(?:^|\n)(\n*(?:[^\S\n]*))```([^`]*?)\n/,
    content: /([\w\W]*?)/, // '([\\w\\W]*?)',
    end: /[^\S\n]*```[ \t]*(?=$|\n+)/, // '\\s*```[ \\t]*(?=$|\\n+)',
    reg: new RegExp(''),
  };
  codeBlock.reg = new RegExp(
    codeBlock.begin.source + codeBlock.content.source + codeBlock.end.source,
    'g'
  );
  return codeBlock;
}
