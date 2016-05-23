'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task("concatScripts", function() {
    gulp.src([
        'js/jquery.js', 
        'js/fastclick.js', 
        'js/foundation.js',
        'js/foundation.equalizer.js',
        'js/foundation.reveal.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"))
});

gulp.task("concatCSS", function() {
    gulp.src([
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
})

gulp.task("default", ["hello"], function() {
    console.log("This is the default task")
});