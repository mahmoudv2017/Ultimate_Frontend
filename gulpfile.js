var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    newer = require('gulp-newer'),
    vinyl = require('vinyl-fs')

gulp.task('html', function () {
  require('./server.js')
  livereload.listen()
  return watch('stage/html/**/*.pug' , () => {


    vinyl.src('stage/html/*.pug')
        .pipe(pug({
          pretty: true
        }))
        
        .pipe(gulp.dest('dist'))

        .pipe(livereload())
  }) 

});

// Css Task
gulp.task('css', function () {

  return watch(["stage/css/**/**/*.scss"] , () => {
    gulp.src(["stage/css/**/**/*.scss"])

    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
  })
});

//   JS TASK
gulp.task('js' , () => {
     
     return  watch('stage/js/*.js' , () => {
          gulp.src('stage/js/*.js')
          
          //.pipe(minify())
          .pipe(concat('all.js'))
          .pipe(gulp.dest('DIST/js'))
          .pipe(livereload())
     })  
     
     
})

gulp.task('watch' , ['html' , 'css' , 'js'])