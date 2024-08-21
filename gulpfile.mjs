import gulp from 'gulp';
import sass from 'gulp-sass';
import * as sassPackage from 'sass';


const sassCompiler = sass(sassPackage);


const paths = {
    scss: './src/scss/**/*.scss', 
    css: './dist/css'       
};


export function compilar() {
    return gulp.src(paths.scss)
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(gulp.dest(paths.css));
}


export function observar() {
    gulp.watch(paths.scss, compilar);
    console.log('Observando alterações em arquivos SCSS...');
}


export default gulp.series(
    compilar, 
    observar  
);
