var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpS3 = require('gulp-s3');
var fs = require('fs');
var webpack = require('webpack');


var options = { headers: {'Cache-Control': 'public'} }

gulp.task('s3', ['build'], function() {
  var aws = JSON.parse(fs.readFileSync('./aws.json'));
  gulp.src('./dist/**')
  .pipe(gulpS3(aws, options));
});

// Production build
gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', function(callback) {
  var webpackProductionConfig = require('./webpack.production.config.js');
  // run webpack
  webpack(webpackProductionConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});