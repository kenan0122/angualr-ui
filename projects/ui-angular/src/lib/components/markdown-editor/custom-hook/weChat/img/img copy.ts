// import { replaceLookbehind } from '../link/lookbehind-replace';
// import {
//   compileRegExp,
//   isLookbehindSupported,
//   NOT_ALL_WHITE_SPACES_INLINE,
// } from '../link/regexp';
import { replaceLookbehind } from '../link/lookbehind-replace';
import {
  compileRegExp,
  isLookbehindSupported,
  NOT_ALL_WHITE_SPACES_INLINE,
} from '../link/regexp';
import { encodeURIOnce, escapeHTMLSpecialCharOnce } from '../link/sanitize';
import UrlCache from './urlCache';
import imgAltHelper from './utils';
const replacerFactory = function (
  type: string,
  match: any,
  leadingChar: any,
  alt: string,
  link: any,
  title: string,
  posterContent: string,
  config: { videoWrapper: (arg0: any) => any } | undefined,
  globalConfig: { urlProcessor: (arg0: any, arg1: any) => any } | undefined
) {
  const refType = typeof link === 'undefined' ? 'ref' : 'url';
  let attrs = '';
  if (refType === 'ref') {
    // TODO: 全局引用
    return match;
  }

  if (refType === 'url') {
    const extent = imgAltHelper.processExtendAttributesInAlt(alt);
    let { extendStyles: style, extendClasses: classes } =
      imgAltHelper.processExtendStyleInAlt(alt);
    if (style) {
      style = ` style="${style}" `;
    }
    if (classes) {
      classes = ` class="${classes}" `;
    }
    attrs =
      title && title.trim() !== ''
        ? ` title="${escapeHTMLSpecialCharOnce(title)}"`
        : '';
    if (posterContent) {
      attrs += ` poster=${encodeURIOnce(posterContent)}`;
    }

    const processedURL = link;
    const defaultWrapper = `<${type} src="${UrlCache.set(
      processedURL
    )}"${attrs} ${extent} ${style} ${classes} controls="controls">${escapeHTMLSpecialCharOnce(
      alt || ''
    )}</${type}>`;
    // return `${leadingChar}${
    //   config.videoWrapper ? config.videoWrapper(link) : defaultWrapper
    // }`;
    return defaultWrapper;
  }
  // should never happen
  return match;
};
let engine: any = null;
let extendMedia = {
  tag: ['video', 'audio'],
  replacer: {
    video(
      match: any,
      leadingChar: any,
      alt: any,
      link: any,
      title: any,
      poster: any
    ) {
      return replacerFactory(
        'video',
        match,
        leadingChar,
        alt,
        link,
        title,
        poster,
        undefined,
        undefined
      );
    },
    audio(
      match: any,
      leadingChar: any,
      alt: any,
      link: any,
      title: any,
      poster: any
    ) {
      return replacerFactory(
        'audio',
        match,
        leadingChar,
        alt,
        link,
        title,
        poster,
        undefined,
        undefined
      );
    },
  },
};

export function imgHook(Cherry: any) {
  let currentImgHook = Cherry.createSyntaxHook('image', 'page', {
    makeHtml(str: any) {
      // engine = this.$engine;
      // this.RULE = this.rule(extendMedia);
      let $str = str;
      console.log($str, '$str$str$str');
      // const isTest = this.RULE.reg ? this.RULE.reg.test(str) : false;

      // if (isTest) {
      //   if (isLookbehindSupported()) {
      //     $str = $str.replace(this.RULE.reg, toHtml.bind(this));
      //   } else {
      //     $str = replaceLookbehind(
      //       $str,
      //       this.RULE.reg,
      //       this.toHtml.bind(this),
      //       true,
      //       1
      //     );
      //   }
      // }

      // if (testMedia($str, this.RULE)) {
      //   if (isLookbehindSupported()) {
      //     $str = $str.replace(this.RULE.regExtend, toMediaHtml.bind(this));
      //   } else {
      //     $str = replaceLookbehind(
      //       $str,
      //       this.RULE.regExtend,
      //       toMediaHtml.bind(this),
      //       true,
      //       1
      //     );
      //   }
      // }

      return '999999';
    },
    rule(extendMedia: { tag: any[] }) {
      const ret: any = {
        // lookbehind启用分组是为了和不兼容lookbehind的场景共用一个回调
        begin: isLookbehindSupported() ? '((?<!\\\\))!' : '(^|[^\\\\])!',
        content: [
          '\\[([^\\n]*?)\\]', // ?<alt>
          '[ \\t]*', // any spaces
          `${
            '(?:' +
            '\\(' +
            '([^"][^\\s]+?)' + // ?<link> url
            '(?:[ \\t]((?:".*?")|(?:\'.*?\')))?' + // ?<title> optional
            '\\)' +
            '|' + // or
            '\\[('
          }${NOT_ALL_WHITE_SPACES_INLINE})\\]` + // ?<ref> global ref
            ')',
        ].join(''),
        end: '', // TODO: extend attrs e.g. {width=50 height=60}
      };
      if (extendMedia) {
        const extend = { ...ret };
        // TODO: 支持Lookbehind
        extend.begin = isLookbehindSupported()
          ? `((?<!\\\\))!(${extendMedia.tag.join('|')})`
          : `(^|[^\\\\])!(${extendMedia.tag.join('|')})`;
        extend.end = '({poster=(.*)})?';
        ret.regExtend = compileRegExp(extend, 'g');
      }
      ret.reg = compileRegExp(ret, 'g');
      return ret;
    },
  });
  return currentImgHook;
}

function toHtml(
  match: any,
  leadingChar: any,
  alt: any,
  link: any,
  title: string,
  ref: any
) {
  const refType = typeof link === 'undefined' ? 'ref' : 'url';

  let attrs = '';
  if (refType === 'ref') {
    // 全局引用，理应在CommentReference中被替换，没有被替换说明没有定义引用项
    return match;
  }
  if (refType === 'url') {
    const extent = imgAltHelper.processExtendAttributesInAlt(alt);
    let { extendStyles: style, extendClasses: classes } =
      imgAltHelper.processExtendStyleInAlt(alt);
    if (style) {
      style = ` style="${style}" `;
    }
    if (classes) {
      classes = ` class="${classes}" `;
    }
    attrs =
      title && title.trim() !== ''
        ? ` title="${escapeHTMLSpecialCharOnce(title.replace(/["']/g, ''))}"`
        : '';
    let srcProp = 'src';
    let srcValue;

    const cherryOptions = engine.$cherry.options;
    if (cherryOptions.callback && cherryOptions.callback.beforeImageMounted) {
      const imgAttrs = cherryOptions.callback.beforeImageMounted(srcProp, link);
      srcProp = imgAttrs.srcProp || srcProp;
      srcValue = imgAttrs.src || link;
    }
    // return `${leadingChar}<img ${srcProp}="${UrlCache.set(
    //   encodeURIOnce(this.urlProcessor(srcValue, 'image'))
    // )}" ${extent} ${style} ${classes} alt="${escapeHTMLSpecialCharOnce(
    //   alt || ''
    // )}"${attrs}/>`;
    return `lakdsfjsldkfjls`;
  }
  // should never happen

  return match;
}

function testMedia(
  str: string,
  RULE: { regExtend: { test: (arg0: string) => any } }
) {
  return RULE.regExtend && RULE.regExtend.test(str);
}

function toMediaHtml(
  match: any,
  leadingChar: any,
  mediaType: string | number,
  alt: any,
  link: any,
  title: any,
  ref: any,
  posterWrap: any,
  poster: any,
  ...args: any[]
) {
  if (!extendMedia.replacer[mediaType]) {
    return match;
  }
  return extendMedia.replacer[mediaType].call(
    match,
    leadingChar,
    alt,
    link,
    title,
    poster,
    ...args
  );
}
