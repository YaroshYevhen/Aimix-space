var gulp=require('gulp'), browserSync=require('browser-sync').create(), sass=require('gulp-sass');
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "../Aimix-space/"
    });
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("documents/*.html").on('change', browserSync.reload);
    gulp.watch("script/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  gulp.src('scss/*.scss')
  // gulp.src('../scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
});
//gulp.task('default', ['serve']);
gulp.task('default', ['serve'],() =>
    gulp.src('css/style.css')
);