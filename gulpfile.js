const gulp = require("gulp");

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

// Default Gulp 
gulp.task('default', function (){
    return console.log('This is default Gulp !');
});

// Copy HTML file to outpu folder
gulp.task('copyHTML', function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});