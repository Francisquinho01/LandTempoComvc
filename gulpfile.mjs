import gulp from 'gulp';
import sass from 'gulp-sass';
import * as sassPackage from 'sass';

// Configuração do compilador SASS
const sassCompiler = sass(sassPackage);

// Caminhos para arquivos SCSS e CSS
const paths = {
    scss: './src/scss/**/*.scss', // Caminho para arquivos SCSS
    css: './dist/css'            // Pasta de saída para o CSS compilado
};

// Tarefa para compilar SASS
export function compilar() {
    return gulp.src(paths.scss)
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(gulp.dest(paths.css));
}

// Tarefa para observar mudanças nos arquivos SCSS
export function observar() {
    gulp.watch(paths.scss, compilar);
    console.log('Observando alterações em arquivos SCSS...');
}

// Tarefa padrão que compila o SCSS e começa a observar alterações
export default gulp.series(
    compilar,  // Compila os arquivos SCSS inicialmente
    observar   // Inicia a observação de arquivos
);
