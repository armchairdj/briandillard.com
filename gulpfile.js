var gulp = require('gulp');

var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');

var paths = {
  javascripts: 'lib/client/javascripts/**/*.js',
  stylesheets: 'lib/client/stylesheets/**/*.scss'
};

gulp.task('javascripts', function () {
  return gulp.src(paths.javascripts)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/javascripts'))
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('public/javascripts'))
  ;
});

gulp.task('stylesheets', function () {
  return gulp.src(paths.stylesheets)
    .pipe(sass({
      sourcemap: false,
      trace: true,
      
    }))
    .pipe(gulp.dest('public/stylesheets'))
  ;
});

gulp.task('watch', function () {
  gulp.watch(paths.javascripts, ['javascripts']);
  gulp.watch(paths.stylesheets, ['stylesheets']);
});

gulp.task('default', [
  'javascripts',
  'stylesheets',
  'watch'
]);
