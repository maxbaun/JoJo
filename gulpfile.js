const gulp = require('gulp');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function () {
	var remotePath = '/test/';
	var conn = ftp.create({
		host: 'jojoandjay.com',
		user: args.user,
		password: args.password,
		log: gutil.log
	});

	return gulp.src(['./public/**/*'])
		.pipe(conn.newer(remotePath))
		.pipe(conn.dest(remotePath));
});
