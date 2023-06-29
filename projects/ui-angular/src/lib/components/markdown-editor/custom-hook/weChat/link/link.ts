import { encodeURIOnce, isValidScheme } from './sanitize';
import { replaceLookbehind } from './lookbehind-replace';
import {
  compileRegExp,
  isLookbehindSupported,
  NOT_ALL_WHITE_SPACES_INLINE,
} from './regexp';
import { getCustomHtml } from './utils';

export function getMarkdownSetting(Cherry: any) {
  let CustomHookA = Cherry.createSyntaxHook(
    'link',
    Cherry.constants.HOOKS_TYPE_LIST.SEN,
    {
      beforeMakeHtml(str: string) {
        return str.replace(this.RULE.reg, (match) => {
          return match.replace(/~D/g, '~1D');
        });
      },

      toStdMarkdown(match: any) {
        return match;
      },

      makeHtml(str: string) {
        const isTest = this.RULE.reg ? this.RULE.reg.test(str) : false;
        if (!isTest) {
          return str;
        }
        if (isLookbehindSupported()) {
          return str.replace(this.RULE.reg, toHtml.bind(this));
        }
        return replaceLookbehind(
          str,
          this.RULE.reg,
          toHtml.bind(this),
          true,
          1
        );
      },

      rule() {
        // (?<protocol>\\w+:)\\/\\/
        const ret = {
          // lookbehind启用分组是为了和不兼容lookbehind的场景共用一个回调
          begin: isLookbehindSupported() ? '((?<!\\\\))' : '(^|[^\\\\])',
          content: [
            '\\[([^\\n]+?)\\]', // ?<text>
            '[ \\t]*', // any spaces
            `${
              '(?:' +
              '\\(' +
              /**
               * allow double quotes
               * e.g.
               * [link](") ⭕️ valid
               * [link]("") ⭕️ valid
               * [link](" ") ❌ invalid
               */
              '([^\\s)]+)' + // ?<link> url
              '(?:[ \\t]((?:".*?")|(?:\'.*?\')))?' + // ?<title> optional
              '\\)' +
              '|' + // or
              '\\[('
            }${NOT_ALL_WHITE_SPACES_INLINE})\\]` + // ?<ref> global ref
              ')',
            '(\\{target\\s*=\\s*(_blank|_parent|_self|_top)\\})?',
          ].join(''),
          end: '',
          reg: new RegExp(''),
        };
        // let ret = {begin:'((^|[^\\\\])\\*\\*|([\\s]|^)__)',
        // end:'(\\*\\*([\\s\\S]|$)|__([\\s]|$))', content:'([^\\n]+?)'};
        ret.reg = compileRegExp(ret, 'g', false);
        return ret;
      },
    }
  );
  return CustomHookA;
}

function toHtml(
  match: any,
  leadingChar: string,
  text: string,
  link: string,
  title: string,
  ref: string,
  target: string
) {
  const refType = typeof link === 'undefined' ? 'ref' : 'url';
  let attrs = '';
  if (refType === 'ref') {
    // 全局引用，理应在CommentReference中被替换，没有被替换说明没有定义引用项
    return match;
  }

  if (refType === 'url') {
    const { isValid, coreText, extraLeadingChar } = checkBrackets(text);
    /*区分自定义和自己手动写法
      自定义语法:  [01](h1-10 '标题内容')
      系统自带语法: [Github 地址](https://github.com/Tencent/cherry-markdown){target=_blank} 
      两者区别在于括号中是否有空格
    */
    const res = /(\(.*\))/g;
    let isCustom = false;
    match.replace(res, (match: any, p1: string) => {
      //找到括号中的内容 去除首尾空格 用空格截取 如果大于1 则是自定义例如[01](h1-10 '标题内容')
      const p1Result = p1.trim().split(' ');
      if (p1Result?.length > 1) {
        isCustom = true;
      } else {
        isCustom = false;
      }
      // isCustom = p1.trim().split(' ')?.length > 1;
      return p1;
    });

    const partten = /(em\-\w+)/g;
    // if (!isCustom) {
    //   match.replace(partten, (match: any, p1: string) => {
    //     if (p1) {
    //       isCustom = true;
    //     }
    //     return p1;
    //   });
    // }

    if (isCustom) {
      //此功能需要在验证之前做判断否则不是正规的isValid
      const backContent = getCustomHtml(
        leadingChar,
        text,
        link,
        title,
        ref,
        target
      );
      if (backContent) return backContent;
    }

    if (!isValid) return match;
    attrs =
      title && title.trim() !== ''
        ? ` title="${escapeHTMLSpecialChar(
            title.replace(/["']/g, ''),
            undefined
          )}"`
        : '';

    if (target) {
      attrs += ` target="${target.replace(/{target\s*=\s*(.*?)}/, '$1')}"`;
    } else {
      // attrs += ` target="_blank"`;
      attrs += ` target="_self"`;
    }
    // else if (this.openNewPage) {
    //     attrs += ` target="_blank"`;
    // }
    let processedURL = link.trim().replace(/~1D/g, '~D'); // 还原替换的$符号
    const processedText = coreText.replace(/~1D/g, '~D'); // 还原替换的$符号
    // text可能是html标签，依赖htmlBlock进行处理
    if (isValidScheme(processedURL)) {
      // processedURL = this.urlProcessor(processedURL, "link");
      return `${leadingChar + extraLeadingChar}<a href="${encodeURIOnce(
        processedURL
      )}" rel="nofollow"${attrs}>${processedText}</a>`;
    }
    return `${leadingChar + extraLeadingChar}<span>${text}</span>`;
  }
  // should never happen
  return match;
}

function checkBrackets(rawText: any) {
  const stack: any = [];
  const text = `[${rawText}]`;
  // 前方有奇数个\当前字符被转义
  const checkEscape = (place: any) => {
    return (text.slice(0, place).match(/\\*$/) as any[])[0].length & 1;
  };
  for (let i = text.length - 1; text[i]; i--) {
    if (i === text.length - 1 && checkEscape(i)) break;
    if (text[i] === ']' && !checkEscape(i)) stack.push(']');
    if (text[i] === '[' && !checkEscape(i)) {
      stack.pop();
      if (!stack.length) {
        return {
          isValid: true,
          coreText: text.slice(i + 1, text.length - 1),
          extraLeadingChar: text.slice(0, i),
        };
      }
    }
  }
  return {
    isValid: false, // 方括号匹配不上
    coreText: rawText,
    extraLeadingChar: '',
  };
}

function escapeHTMLSpecialChar(content: any, enableQuote: any) {
  if (typeof content !== 'string') {
    return '';
  }
  if (enableQuote) {
    return content.replace(/[<>&]/g, (char) => escapeMap[char] || char);
  }
  return content.replace(/[<>&"']/g, (char) => escapeMap[char] || char);
  // throw new Error("Function not implemented.");
}

const escapeMap = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  "'": '&#x27;',
};
