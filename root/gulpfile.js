var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var $    = require('gulp-load-plugins')();
var pkg  = require('./package.json');

// javascript
gulp.task('js', function() {
  return gulp.src('js/advanced-industrial-services.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
    .pipe($.notify(function (file) {
      if (file.jshint.success) {
        return false;
      }

      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }))
    .pipe(gulp.dest('js'))
});

// sass
gulp.task('sass-dev', function() {
  return gulp.src('sass/*.scss')
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.sass({
      sass:      'sass',
      css:       'css',
      image:     'images',
      style:     'expanded',
      relative:  true,
      sourcemap: true,
      comments:  true
    }))
    .pipe($.replace(/<%= pkg.version %>/g, pkg.version))
    .pipe(gulp.dest('css'))
});
gulp.task('sass-dist', function() {
  return gulp.src('sass/*.scss')
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.sass({
      sass:      'sass',
      css:       './',
      image:     'images',
      style:     'expanded',
      relative:  true,
      sourcemap: false,
      comments:  false
    }))
    .pipe($.replace(/<%= pkg.version %>/g, pkg.version))
    .pipe(gulp.dest('./'))
});

gulp.task('sass', function(callback) {
  return runSequence(
    'sass-dev',
    'sass-dist',
    callback
  );
});

gulp.task('browser-sync', function() {  
    browserSync.init(["*.css", "js/*.js","*.php", "*/*.php"], {
        port: 8081
    });
});

// default task
gulp.task('default',['js','sass','browser-sync'], function() {
    gulp.watch('js/advanced-industrial-services.js', ['js']);
    gulp.watch('sass/{,*/}{,*/}*.scss', ['sass']);
});