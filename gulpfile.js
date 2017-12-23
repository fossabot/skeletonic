const gulp = require("gulp");
const pkg = require("./package.json");

const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const header = require("gulp-header");
const size = require("gulp-size");
const stylus = require("gulp-stylus");
const csslint = require("gulp-csslint");
const csscomb = require('gulp-csscomb');

const comment = `/**
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * Copyright © Reedia Limited 2015-2018. All rights reserved.
 * ${pkg.homepage}
 * Released under the MIT License
 * http://www.opensource.org/licenses/mit-license.php
 */\r\n`;

gulp.task("build-skeletonic", function () {
  return gulp.src([
      "./src/config.styl",
      "./src/base.styl",
      "./src/grid.styl",
      "./src/typography.styl",
      "./src/table.styl",
      "./src/form.styl",
      "./src/button.styl",
      "./src/link.styl",
      "./src/list.styl",
      "./src/image.styl",
      // "./src/nav.styl",
      "./src/code.styl",
      "./src/divider.styl",
      "./src/util.styl"
    ])
    .pipe(concat("skeletonic.styl"))
    .pipe(stylus())
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("build-pattern", function () {
  return gulp.src([
      "./src/pattern.styl"
    ])
    .pipe(concat("skeletonic-pattern.styl"))
    .pipe(stylus())
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(gulp.dest("./dist/"))
    .pipe(concat("skeletonic-pattern.css"))
    .pipe(csscomb('./csscomb.json'))
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat("skeletonic-pattern.min.css"))
    .pipe(gulp.dest("./dist/"));
});


gulp.task("csslint", ["build-skeletonic"], function() {
  return gulp.src(["./dist/skeletonic.css"])
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(size())
    .pipe(gulp.dest("./dist/"));
});

gulp.task('csscomb', function() {
  return gulp.src(["./dist/skeletonic.css"])
    .pipe(csscomb('./csscomb.json'))
    .pipe(header(comment + "\r\n"))
    .pipe(size())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("clean", ["build-skeletonic"], function() {
  return gulp.src(["./dist/skeletonic.css"])
    .pipe(clean())
    .pipe(size({
      gzip: true
    }))
    .pipe(concat("skeletonic.min.css"))
    .pipe(gulp.dest("./dist/"));
});


gulp.task("watch", function() {
  gulp.watch(["src/*.css"], ["default"]);
});


gulp.task("default", ["build-skeletonic","csscomb","csslint","clean"]);
gulp.task("pattern", ["build-pattern"]);