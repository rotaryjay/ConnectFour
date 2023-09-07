"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function copyJs() {
  return gulp.src("app/js/*").pipe(gulp.dest("dist/js"));
}
function copyIndex() {
  return gulp.src("app/index.html").pipe(gulp.dest("dist"));
}
function buildStyles() {
  return gulp
    .src("app/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/css/"))
    .pipe(gulp.dest("dist/css/"));
}
const build = gulp.series(copyIndex, copyJs, buildStyles);

// Define default task
exports.default = build;
