var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('default', function () {
    gulp.src('jsx/components/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('js/components/'));

    gulp.src('js/components/App.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('dist/js'));

    return this;
});

var watcher = gulp.watch(
                    ['jsx/**/*.jsx', 'js/microservices/**/*.js'],
                    ['default']
                  );

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
