var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');    
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require("gulp-babel");



gulp.task('scripts', function(done){

    return gulp.src("./js/src/**/*.js")
      .pipe(babel({presets: ['@babel/env']}))
      .pipe(gulp.dest("./js/dist"));
});


gulp.task('watch', function(done){

    

    gulp.watch('./js/src/**/*.js', gulp.series('scripts'));
    done();
})