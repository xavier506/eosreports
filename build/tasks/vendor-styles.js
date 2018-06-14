var config = require('../../config/')

module.exports.task = function (gulp, plugins, paths) {
  gulp
    .src(paths.vendor.styles)
    .pipe(plugins.concat('vendor.css'))
    .pipe(gulp.dest(config.destDir + '/css'))
    .pipe(plugins.connect.reload())
    .on('error', plugins.sass.logError)
}
