const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css');

function build() {
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest('styles'))
}

function watcher() {
    watch(['src/**/*.scss'], build)
}

exports.default = series(build, watcher)