var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6 electron', () => {
    gulp.src('src/electron/main.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('es6 server', () => {
    gulp.src(['src/server/**/*.js', '!src/server/test/**/*'])
        .pipe(babel())
        .pipe(gulp.dest('dist/server'));
});

gulp.task('electron', () => {
    gulp.src('src/electron/package.json')
        .pipe(gulp.dest('dist'));
});
 
gulp.task('watch', () => {
    gulp.watch('./src/server/**/*.js', ['es6 server','es6 electron']);
});
 
gulp.task('default', ['es6 electron','es6 server','electron',]);