var gulp   = require('gulp');
var uglify = require('gulp-uglify');
// var babel = require('gulp-babel');
var umd = require('gulp-umd');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('js', function() {
  return gulp.src('src/js/by-radio.js')
    /* .pipe(babel({
      presets: ['es2015'],
      plugins: ['transform-es2015-modules-umd']
    })) */
    .pipe(umd({
      dependencies: function(file) {
        return [
          {
            name: 'jQuery',
            amd: 'jquery',
            cjs: 'jquery',
            global: 'jQuery',
            param: '$'
          }
        ];
      },
      exports: function(file) {
        return 'Plugin';
      },
      namespace: function(file) {
        return 'ByRadio';
      }
    }))
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
      baseDir: './dist'
    }
  });

  gulp.watch(['*.html', '../dist/css/*.css', '../js/*.js'], {cwd: 'app'}, reload);
});

gulp.task('default', ['js', 'css']);
