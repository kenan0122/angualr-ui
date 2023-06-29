'use strict';

const fs = require('fs');
const path = require('path');
const sass = require('sass');
const CleanCss = require('clean-css');
const cpx = require('cpx');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const url = require('postcss-url');
const { version } = require('../projects/ui-angular/package.json');

const copyDir = dir =>
  new Promise((resolve, reject) => {
    console.log(`Copying ${dir}...`);
    cpx.copy(`projects/ui-angular/src/lib/${dir}/**/*`, `dist/ui-angular/lib/${dir}`, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });

const compileCss = () =>
  new Promise((resolve, reject) => {
    console.log('Compiling index.css...');
    fs.readFile('dist/ui-angular/lib/styles/index.scss', (err, data) => {
      if (err) {
        return reject(err);
      }
      sass.render(
        {
          data: `$pkgVersion:'${version}';${data}`,
          includePaths: ['dist/ui-angular/lib/styles', 'dist/ui-angular/lib/assets']
        },
        (err, result) => {
          if (err) {
            return reject(err);
          }
          postcss()
            .use(autoprefixer())
            .use(
              url([
                {
                  filter: '../../assets/**/*',
                  url: 'copy',
                  basePath: path.resolve(__dirname, '../dist/ui-angular/lib/styles/fonts'),
                  assetsPath: path.resolve(__dirname, '../dist/ui-angular'),
                  useHash: true
                },
                {
                  filter: '../../assets/**/*',
                  url: ({ url }) => path.basename(url),
                  multi: true
                },
                {
                  filter: '../fonts/**/*',
                  url: 'copy',
                  basePath: path.resolve(__dirname, '../dist/ui-angular/lib/assets/icons/iconfont/scss'),
                  assetsPath: path.resolve(__dirname, '../dist/ui-angular'),
                  useHash: true
                },
                {
                  filter: '../fonts/**/*',
                  url: ({ url }) => path.basename(url),
                  multi: true
                }
              ])
            )
            .process(result.css, { from: undefined })
            .then(({ css }) => {
              const cssMinifier = new CleanCss();
              const minifiedCss = cssMinifier.minify(css).styles;
              fs.writeFile('dist/ui-angular/index.css', minifiedCss, err => {
                if (err) {
                  return reject(err);
                }
                resolve();
              });
            });
        }
      );
    });
  });

Promise.all(['assets', 'styles'].map(dir => copyDir(dir)))
  .then(() => compileCss())
  .then(() => {
    console.log('Done.');
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
