const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");




/** 
 *  -- TOP LEVEL FUNCTIONS ---
 * gulp.task -> Define tasks
 * gulp.src -> Point to files to use.
 * gulp.dest -> Points to folder to output
 * gulp.watch -> Watch files and folder for changes
 * 
*/

// Log Message
gulp.task('message', function(){
    return console.log("Gulp is running...");
});


// Copy HTML file to outpu folder
gulp.task('copyHTML', function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

// Optimize Images
gulp.task("imageMin", function (){
    gulp.src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"));
});

// Minify the javaScirpt files
gulp.task('js-minify', function(){
    gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));

});

// Scripts concat with minify JavaScript files
gulp.task("scripts", function(){
    gulp.src("src/js/main/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

// Compile SASS files
gulp.task('sass', function (){
    gulp.src("src/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("dist/css"));
});

// Default Gulp 
gulp.task('default', gulp.parallel('message', 'copyHTML', 'imageMin', 'sass', 'scripts'));

// Continue watching all files
gulp.task('watch', function(){
    gulp.watch("src/js/main/*.js", gulp.parallel("scripts"));
    gulp.watch("src/img/*", gulp.parallel("imageMin"));
    gulp.watch("src/scss/*.scss", gulp.parallel("sass"));
    gulp.watch("src/*.html", gulp.parallel("copyHTML"));
});