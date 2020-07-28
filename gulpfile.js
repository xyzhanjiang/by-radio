const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')

function css() {
  return gulp.src('src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(gulp.dest('dist'))
    .pipe(postcss([require('cssnano')({
      autoprefixer: false,
      minifySelectors: false // for ie 8
    })]))
    .pipe(rename({extname: '.min.css'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
}

exports.css = css
