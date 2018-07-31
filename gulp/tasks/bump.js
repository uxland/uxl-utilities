const gulp = require('gulp');
const run = require('gulp-run');
const pkg = require('../../package.json');

gulp.task('bump-version', () => {
    let version = pkg.version;
    console.log('Actual package version: ' + version);
    if (version == '0.0.0') {
        //return run('echo major')
        return run('npm -f version major').exec();
    }
    else {
        //return run('echo patch')
        return run('npm -f version patch').exec();
    }
});
