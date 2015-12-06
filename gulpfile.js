'use strict'
var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('default', function() {
    gulp.src(__dirname + '/_b/index.js')
        .pipe(webpack({
            module: {
                loaders: [{
                    // test: /\.js$/,
                    // loader: 'babel'
                }]
            },
            output: {
                filename: 'index.js'
            },
            externals: {
                react: 'React'
            }
        }))
        .pipe(gulp.dest(__dirname + '/public/scripts/'))
})
