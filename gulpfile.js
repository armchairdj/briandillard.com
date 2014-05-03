var gulp = require('gulp');

var concat = require('gulp-concat');
var sass   = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');

var paths = {
  javascripts: {
    head: [
      'vendor/assets/javascripts/modernizr-2.6.2-respond-1.1.0.min.js'
    ],
    foot: [
      'vendor/assets/javascripts/jquery-1.11.0.min.js',
      'app/assets/javascripts/**/*.js'
    ]
  },
  stylesheets: [
    'vendor/assets/stylesheets/normalize.css',
    'vendor/assets/stylesheets/main.css',
    'app/assets/stylesheets/**/*.scss'
  ]
};

function prepareJavaScript (src, dest) {
  var staticDir = gulp.dest('public/assets');

  return gulp.src(src)
    .pipe(concat(dest.replace('.min', '')))
    .pipe(staticDir)
    .pipe(uglify())
    .pipe(concat(dest))
    .pipe(staticDir)
  ;
}

gulp.task('javascripts-head', function () {
  return prepareJavaScript(paths.javascripts.head, 'head.js');
});

gulp.task('javascripts-foot', function () {
  return prepareJavaScript(paths.javascripts.foot, 'foot.js');
});

gulp.task('stylesheets', function () {
  var staticDir = gulp.dest('public/assets');

  return gulp.src(paths.stylesheets)
    .pipe(concat('head.css'))
    .pipe(sass({
      sourcemap: false,
      trace: true,
    }))
    .pipe(staticDir)
  ;
});

gulp.task('watch', function () {
  gulp.watch(paths.javascripts.head, ['javascripts-head']);
  gulp.watch(paths.javascripts.foot, ['javascripts-foot']);
  gulp.watch(paths.stylesheets, ['stylesheets']);
});

gulp.task('default', [
  'stylesheets',
  'javascripts-head',
  'javascripts-foot',
  'watch'
]);
