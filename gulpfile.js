'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
 
gulp.task('sass', function () {
  return gulp.src('css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('connect', function(){
    connect.server({
        root:'',
        port: 9000,
        livereload:true
    });
});








 
gulp.task('watch', function () {
  gulp.watch('css/sass/*.scss', ['sass']);
  gulp.watch('*.html', ['html']);
  
});




gulp.task('default', ['sass', 'connect', 'watch']);