// see video explanation: https://youtu.be/ubHwScDfRQA

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // This is different from the video since gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` and change this line from the video.

//compile, prefix, and min scss
function compilescss() {
  return gulp.src('./*.scss') // change to your source directory
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./')) // change to your final/public directory
};

//watchtask
function watchTask(){
  gulp.watch('./*.scss', compilescss); // change to your source directory
}

// Default Gulp task 
exports.default = gulp.series(
  compilescss,
  watchTask
);