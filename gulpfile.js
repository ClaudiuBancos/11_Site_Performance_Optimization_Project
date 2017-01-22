/* Gulpfile.js */

var gulp = require("gulp"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	cleanCSS = require("gulp-clean-css");

gulp.task("concatCSS", function(){
	gulp.src([
		"css/normalize.css",
		"css/foundation.css",
		"css/basics.css",
		"css/menu.css",
		"css/hero.css",
		"css/photo-grid.css",
		"css/modals.css",
		"css/footer.css",
		"css/sprite_map.css",
		"css/custom_styles.css"])
	.pipe(concat("styles.css"))
	.pipe(gulp.dest("css"));
});

gulp.task("minifyCSS", function() {
	gulp.src("css/styles.css")
		.pipe(cleanCSS())
		.pipe(rename("styles.min.css"))
		.pipe(gulp.dest("css"));
});

gulp.task("watchCSS", function(){
	gulp.watch("css/*.css", ["concatCSS"]);
});

gulp.task("concatJS", function(){
	gulp.src([
		"js/jquery.min.js",
		"js/scripts.js",
		"js/fastclick.js",
		"js/foundation.js",
		"js/foundation.equalizer.js",
		"js/foundation.reveal.js"])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});

gulp.task("minifyJS", function() {
	gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename("app.min.js"))
		.pipe(gulp.dest("js"));
});

gulp.task("watchJS", function(){
	gulp.watch("js/*.js", ["concatJS"]);
});