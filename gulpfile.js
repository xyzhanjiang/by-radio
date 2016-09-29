var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('css', function() {
  return gulp.src('src/scss/by-radio.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'ie >= 9'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssnano({
      autoprefixer: false,
      minifySelectors: false // for ie 8
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('dist/*.html').on('change', reload);
});

gulp.task('default', ['css']);
