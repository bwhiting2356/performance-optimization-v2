'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css');

gulp.task("concatScripts", function() {
    return gulp.src([
        'js/jquery.js', 
        'js/fastclick.js', 
        'js/foundation.js',
        'js/foundation.equalizer.js',
        'js/foundation.reveal.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"))
});

gulp.task("minifyScripts", ["concatScripts"], function() {
    gulp.src("js/app.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'));
});


gulp.task("concatCSS", function() {
    return gulp.src([
        'css/normalize.css',
        'css/foundation.css',
        'css/arvo.css',
        'css/ubuntu.css',
        'css/basics.css',
        'css/menu.css',
        'css/hero.css',
        'css/photo-grid.css',
        'css/modals.css',
        'css/footer.css'
        ])
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("css"))
});


gulp.task('minifyCSS', ['concatCSS'], function() {
    gulp.src('css/styles.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task("build", ['minifyScripts', 'minifyCSS']);

gulp.task("default", ["build"]);