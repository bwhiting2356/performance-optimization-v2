var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  minifyHTML = require('gulp-minify-html'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect'),
  autoprefixer = require('gulp-autoprefixer'),
  inlineimg = require('gulp-inline-image-html');

// Concat and Minify JS

gulp.task("concatScripts", function() {
    return gulp.src([
        'src/js/jquery.js', 
        'src/js/fastclick.js', 
        'src/js/foundation.js',
        'src/js/foundation.equalizer.js',
        'src/js/foundation.reveal.js',
        'src/js/scripts.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("public/js"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
    gulp.src("public/js/app.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(connect.reload());
});

// Concat and minify CSS

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
    .pipe(gulp.dest("public/css"));
});

gulp.task('autoprefixer', ['concatCSS'], function () {
    return gulp.src('public/css/styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'));
});


gulp.task('minifyCSS', ['autoprefixer'], function() {
    gulp.src('public/css/styles.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload());
});

// Inline Images

gulp.task("inlineimg", function() {
    return gulp.src("src/index.html")
        .pipe(inlineimg('src'))
        .pipe(gulp.dest('public/'))
});

// Minify HTML

gulp.task("minifyHTML", ['inlineimg'], function() {
    gulp.src("public/index.html")
        .pipe(minifyHTML())
        .pipe(gulp.dest('public/'))
        .pipe(connect.reload());
});


// Watch

gulp.task("watch", function() {
    gulp.watch('src/js/*.js', ['minifyScripts']);
    gulp.watch('src/css/*.css', ['minifyCSS']);
    gulp.watch('src/index.html', ['minifyHTML']);
});

// Connect

gulp.task("connect", function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task("build", ['minifyScripts', 'minifyCSS', 'minifyHTML']);

gulp.task("default", ["build", "connect", "watch"]);