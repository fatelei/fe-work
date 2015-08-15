var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");
var connect = require('gulp-connect');

gulp.task("less", function () {
  gulp.src("./task1/less/*.less")
    .pipe(less({
      paths: [path.join(__dirname, "less")]
    }))
    .pipe(gulp.dest("./task1/css"));
});

gulp.task("connect", function () {
  connect.server({
    root: "task1",
    livereload: true,
    port: 8000
  });
});

gulp.task("watch", function () {
  gulp.watch(["./task1/less/*.less"], ["less"]);
})

gulp.task("default", ["less", "connect", "watch"]);
