const { src, dest, parallel, } = require('gulp');

const postcss = require('gulp-postcss');

const build_styles = function(cb) {
    src('css/*.css')
        .pipe(postcss())
        .pipe(dest('dist/css/'));
    cb();
}

const build_html = function (cb) {
    src('*.html')
        .pipe(dest('dist/'));
    cb();
}

exports.build = parallel(build_styles, build_html);