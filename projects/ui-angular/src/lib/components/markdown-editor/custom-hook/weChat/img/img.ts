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
  alt: any,
  link: any,
  title: string,
  posterContent: any,
  config: any,
  globalConfig: any
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
    //目前这里没有增加到缓存区域
    const defaultWrapper = `<${type} src="${link}"${attrs} ${extent} ${style} ${classes} controls="controls">${escapeHTMLSpecialCharOnce(
      alt || ''
    )}</${type}>`;
    return `${leadingChar}${defaultWrapper}`;
  }
  // should never happen
  return match;
};
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
        { urlProcessor: link }
      );
    },
    audio(
      match: any,
      leadingChar: any,
      alt: any,
      link: any,
      title: string,
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
        { urlProcessor: link }
      );
    },
  },
};
let engine: any = undefined;

export function imgHook(Cherry: any) {
  let currentImgHook = Cherry.createSyntaxHook(
    'image',
    Cherry.constants.HOOKS_TYPE_LIST.SEN,
    {
      makeHtml(str: any) {
        let $str = str;
        engine = this.$engine;
        this.RULE = this.rule(extendMedia);
        const isTest = this.RULE.reg ? this.RULE.reg.test(str) : false;
        if (isTest) {
          if (isLookbehindSupported()) {
            $str = $str.replace(this.RULE.reg, toHtml.bind(this));
          } else {
            $str = replaceLookbehind(
              $str,
              this.RULE.reg,
              toHtml.bind(this),
              true,
              1
            );
          }
        }
        if (testMedia($str, this.RULE)) {
          if (isLookbehindSupported()) {
            $str = $str.replace(this.RULE.regExtend, toMediaHtml.bind(this));
          } else {
            $str = replaceLookbehind(
              $str,
              this.RULE.regExtend,
              toMediaHtml.bind(this),
              true,
              1
            );
          }
        }
        return $str;
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
    }
  );
  return currentImgHook;
}

function toHtml(
  match: any,
  leadingChar: any,
  alt: string,
  link: any,
  title: string,
  ref: any
) {
  const refType = typeof link === 'undefined' ? 'ref' : 'url';
  let attrs = '';

  const imgTitle = alt?.split(' ');
  let currentImgTitle = imgTitle[1] ? imgTitle[1] : '';

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
    let imgAttrs: any;
    if (cherryOptions.callback && cherryOptions.callback.beforeImageMounted) {
      imgAttrs = cherryOptions.callback.beforeImageMounted(srcProp, link);
      srcProp = imgAttrs.srcProp || srcProp;
      srcValue = imgAttrs.src || link;
    }

    //最小宽度1024 也就是 lg xl 2xl都是用的原图展示
    //最小宽度是640 也就是sm md  目前使用的是512的展示
    //??? 后续需要增加 srcset的属性 添加的倍图 需要测试  缺少callback的属性
    return `<div style="text-align:center">${leadingChar}<picture><source srcset="${encodeURIOnce(
      srcValue)}&f=.webp" type="image/webp" ${extent} ${style} ${classes} alt="${escapeHTMLSpecialCharOnce(
      alt || '')}"${attrs} media="(min-width:1024px)"></source><source srcset="${encodeURIOnce(
      srcValue )}&f=.webp&s=512" type="image/webp" ${extent} ${style} ${classes} alt="${escapeHTMLSpecialCharOnce(
      alt || '' )}"${attrs} media="(max-width:1024px)"></source><img loading="lazy" ${srcProp}="${encodeURIOnce(
      srcValue )}" ${extent} ${style} ${classes} alt="${escapeHTMLSpecialCharOnce(
      alt || '' )}"${attrs} srcset="${encodeURIOnce(srcValue)}&s=512 2x,${encodeURIOnce(
      srcValue)} 1x"/></picture><div style="text-align:center">${currentImgTitle}</div></div>`;
    // return `${leadingChar}<img ${srcProp}="${encodeURIOnce(
    //   srcValue
    // )}" ${extent} ${style} ${classes} alt="${escapeHTMLSpecialCharOnce(
    //   alt || ''
    // )}"${attrs}/>`;
  }
  // should never happen
  return match;
}

function testMedia(str: any, RULE: any) {
  return RULE.regExtend && RULE.regExtend.test(str);
}

function toMediaHtml(
  this: any,
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
    this,
    match,
    leadingChar,
    alt,
    link,
    title,
    poster,
    ...args
  );
}
