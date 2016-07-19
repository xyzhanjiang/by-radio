var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('js', function() {
  return gulp.src('src/js/by-radio.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
});

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
  browserSync({
    server: {
      baseDir: 'demo'
    }
  });

  gulp.watch(['*.html', '../dist/css/*.css', '../js/*.js'], {cwd: 'app'}, reload);
});

gulp.task('default', ['js', 'css']);
