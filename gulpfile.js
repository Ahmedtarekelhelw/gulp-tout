const { src, parallel, series , watch , dest , task} = require("gulp"),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require("gulp-sass")(require('sass')),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    notify = require("gulp-notify")

    const gulp = require("gulp")



// function method

// function css() {
//     return src("project2/sass/*.scss")
//         .pipe(concat("main.css"))
//         .pipe(autoprefixer("last 2 versions"))
//         .pipe(dest("dist/pro2/css"))
//         .pipe(livereload())
// }

// function html() {
//     return src("project2/index.html")
//     .pipe(dest("dist/pro2/html"))
//     .pipe(livereload())
// }

// function js() {
//     return src("project2/js/*.js")
//     .pipe(concat("main.js"))
//     .pipe(uglify())
//     .pipe(dest("dist/pro2/js"))
//     .pipe(livereload())
// }

// function watchTask() {
//     require("./server")
//     livereload.listen()
//     watch("project2/js" , series(js))
//     watch("project2/sass" , series(css))
//     watch("project2/index.html" , series(html))
// }

// exports.default = watchTask

// function css () {
//     return src("project/main.scss")
//     .pipe(sass())
//     .pipe(autoprefixer())
//     .pipe(concat("style.css"))
//     .pipe(dest("dist/css"))
//     .pipe(livereload())
// }

// function js () {
//     return src(["project/*.js" , "!project/two.js"])
//     .pipe(concat("main.js"))
//     .pipe(uglify())
//     .pipe(dest("dist/js"))
//     .pipe(livereload())
// }
// function html () {
//     return src("project/index.html")
//     .pipe(dest("dist"))
//     .pipe(notify("html is done"))
//     .pipe(livereload())
// }

// function watchTask () {
//     require("./server.js")
//     livereload.listen()
//     watch("project/*.js",series(js))
//     watch("project/sass/*.scss",{interval:1000},parallel(css))
//     watch(
//         "project/index.html",
//         {interval:1000},
//         parallel(html)
//     )
// }

// exports.default = watchTask

// exports.default = series(
//     parallel(css , js , html),
//     watchTask
// )





// task method 
task("css" , function() {
    return src("pro3/sass/*.scss")
    .pipe(concat("style.css"))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(dest("dist/pro3/css"))
})

task("html" , function() {
    return src("pro3/html/index.html")
    .pipe(dest("dist/pro3/html"))
})

task("js" , function() {
    return src("pro3/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("dist/pro3/js"))
})

task("watch" , function() {
    watch("pro3/html" , series("html"))
    watch("pro3/sass" , series("css"))
    watch("pro3/js" , series("js"))
})





// gulp.task("css" , function() {
//     return gulp.src("project/main.scss")
//         .pipe(sass())
//         // .pipe(sass({ outputStyle: 'compressed' }))
//         .pipe(autoprefixer())
//         // .pipe(autoprefixer("last 2 versions"))
//         // .pipe(autoprefixer({
//         //     cascade: false //to remove space after the proprety
//         // }))
//         .pipe(concat("style.css"))
//         .pipe(gulp.dest("dist/css"))
//         .pipe(livereload())
// })


// gulp.task("js" , function() {
//     return gulp.src("project/*.js")
//         .pipe(concat("main.js"))
//         .pipe(uglify())
//         // .pipe(concat('main.js', { newLine: ';' }))
//         .pipe(gulp.dest("dist/js"))
//         .pipe(livereload())
//         // .pipe(gulp.dest("dist"))
// })


// gulp.task("html" , function() {
//     return gulp.src("project/index.html")
//     .pipe(gulp.dest("dist"))
//     .pipe(livereload())
//     .pipe(notify("html is done"))
// })



// gulp.task("watch" , function() {
//     require("./server.js");
//     livereload.listen()
//     gulp.watch("project/index.html", gulp.series("html"));
//     gulp.watch("project/*.js", gulp.series("js"));
//     gulp.watch("project/**/*.scss", gulp.series("css"));
// });

// exports.default = series("watch")

// gulp.task("default", gulp.series("watch"))