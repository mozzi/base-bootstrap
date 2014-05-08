var gulp = require('gulp'),
    concat = require('gulp-concat'),
    changed = require('gulp-changed'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    compass = require('gulp-compass'),
    sources = {
      sass: "assets/sass/**/*.scss",
      scripts: "assets/js",
      scriptsBower: "assets/js/vendor/bower_components"
    },
    destinations = {
      js: "assets/js/dist",
      css: "out/css"
    };
//concat js
gulp.task('concat', function () {
  return gulp.src([
    sources.scripts + '/vendor/console/console.js',
    sources.scriptsBower + '/bootstrap/dist/js/bootstrap.js'
  ])
      .pipe(concat('plugins.min.js'))
      .pipe(gulp.dest(destinations.js))
      .pipe(uglify({
        preserveComments: 'some'
      }))
      .pipe(gulp.dest(destinations.js));
});

//uglify js
gulp.task('uglify', function() {
  return gulp.src([
    sources.scriptsBower + '/modernizr/modernizr.js'
  ])
      .pipe(uglify({
        preserveComments: 'some'
      }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(destinations.js));
});

//copy js
gulp.task('copy', function() {
  return gulp.src([
    sources.scriptsBower + '/jquery/dist/jquery.min.js',
    sources.scriptsBower + '/respond/dest/respond.min.js'
  ])
      .pipe(changed(destinations.js))
      .pipe(gulp.dest(destinations.js));
});

//default task
gulp.task('default', ["concat", "uglify", "copy"]);
