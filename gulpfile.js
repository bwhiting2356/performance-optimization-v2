'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css');

var options = {

 }

gulp.task("concatScripts", function() {
    return gulp.src([
        'src/js/jquery.js', 
        'src/js/fastclick.js', 
        'src/js/foundation.js',
        'src/js/foundation.equalizer.js',
        'src/js/foundation.reveal.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("src/js"))
});

gulp.task("minifyScripts", ["concatScripts"], function() {
    gulp.src("src/js/app.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('public/js'));
});


gulp.task("concatCSS", function() {
    return gulp.src([
        'src/css/normalize.css',
        'src/css/foundation.css',
        // 'src/css/arvo.css',
        // 'src/css/ubuntu.css',
        'src/css/basics.css',
        'src/css/menu.css',
        'src/css/hero.css',
        'src/css/photo-grid.css',
        'src/css/modals.css',
        'src/css/footer.css'
        ])
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("src/css"))
});


gulp.task('minifyCSS', ['concatCSS'], function() {
    gulp.src('src/css/styles.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task("build", ['minifyScripts', 'minifyCSS']);

gulp.task("default", ["build"]);