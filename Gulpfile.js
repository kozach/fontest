const { src, dest, watch, series, parallel } = require('gulp');
const fs = require('fs');
const del = require('del');
const pug = require('gulp-pug');
const text = require('./src/text.json');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');

function clean(cb) {
  return del(["./build/"], cb);
}

function copy() {
  return src('./src/fonts/**/*')
    .pipe(dest('./build/fonts'));
}

function html(cb) {
	return src('./src/pug/*.pug')
		.pipe(pug({
			pretty: true,
			basedir: './src/pug',
			data: text
		}))
		.pipe(dest('./build'))
		.pipe(browserSync.stream());
		cb();
}

function css(cb) {
	return src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./build/css'))
		.pipe(browserSync.stream());
		cb();
}

function changes(cb) {
	browserSync.init({
			server: {
					baseDir: "./build"
			}
	});
  watch('./src/sass/**/*.scss', css);
  watch('./src/pug/**/*.pug', html);
	watch('./build/**/*.html', { events: 'change' }, function(cb) {
		browserSync.reload;
		cb();
	});
	cb();
}

exports.default = series(clean, copy, parallel(html, css));
exports.watch = series(clean, copy, parallel(html, css), changes);
