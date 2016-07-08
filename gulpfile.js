var gulp = require('gulp');
var to5 = require('gulp-6to5');

var me = require('./package.json');

gulp.task('build', function(){
  return gulp.src('src/anyslot.js')
  .pipe(to5())
  .pipe(gulp.dest('./'));
})

gulp.task('default',['build']);
