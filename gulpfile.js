var gulp = require('gulp')
,	react = require('gulp-react')
,	less = require('gulp-less')
, 	path = require('path')
,	gutil = require('gulp-util')
,	sourcemaps = require('gulp-sourcemaps')
,	source = require('vinyl-source-stream')
,	buffer = require('vinyl-buffer')
,	watchify = require('watchify')
,	browserify = require('browserify')
,	browserSync = require('browser-sync')
, uglify = require('gulp-uglify')
, minify = require('gulp-minify-css');

var bundler = watchify(browserify('./build/main.js', watchify.args));

bundler.transform('brfs');

// On any dep update, runs the bundler.
bundler.on('update', bundle); 

function bundle() {
  return bundler.bundle()
    
    // Error logging.
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/dist'))
 	.pipe(browserSync.reload({stream:true}));
}

gulp.task('default', ['server', 'watch']);

// Watch files for any changes.
gulp.task('watch', function() {
	
	// Javascript & JSX.
	gulp.watch('./public/jsx/*.jsx', ['js', 'browserify', 'uglify']);

	// LESS & CSS
	gulp.watch('./public/less/*.less', ['less', 'minify']);
});

// Precompile Facebook React JSX templates into JavaScript.
gulp.task('js', function () {
    return gulp.src('./public/jsx/*.jsx')
        .pipe(react({harmony: true}))
        .pipe(gulp.dest('./build'));
});

// JavaScript bundle dependencies.
gulp.task('browserify', ['js'], bundle);

// Compress JavaScript.
gulp.task('uglify', ['browserify'], function() {
  return gulp.src('./build/dist/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

// LESS compilator.
gulp.task('less', function () {
  gulp.src('./public/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./build/dist'));
});

// Compress CSS.
gulp.task('minify', ['less'], function() {
  gulp.src('./build/dist/*.css')
    .pipe(minify({keepSpecialComments:0}))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({stream:true}));
});

// Static server.
gulp.task('server', function(done) {
	browserSync({
        server: {
            baseDir: "./public"
        }
    });
});