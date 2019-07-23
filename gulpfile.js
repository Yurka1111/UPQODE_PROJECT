const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

const sass = require('gulp-sass');
function styles(){
	return gulp.src('./company/**/*.css')
.			pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: false
        }))
	
    
	  .pipe(sass().on('error', sass.logError))
   
	.pipe(gulp.dest('./build/css'))
}
function scripts(){
	
}
gulp.task('styles',styles);
gulp.task('scripts',scripts);
