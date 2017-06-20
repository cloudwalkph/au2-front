'use strict';

var gulp = require('gulp');
var minifyCss = require("gulp-clean-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat-util");

var cssFiles = [
    './public/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css',
    './public/assets/global/plugins/fullcalendar/fullcalendar.min.css',
    './public/assets/global/plugins/fullcalendar-scheduler/scheduler.min.css',
    './public/assets/global/plugins/datatables/datatables.min.css',
    './public/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
    './public/assets/global/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css',
    './public/assets/global/plugins/bootstrap-modal/css/bootstrap-modal.css',
    './public/assets/global/plugins/typeahead/typeahead.css',
    './public/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
    './public/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
    './public/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
    './public/assets/global/plugins/jquery-minicolors/jquery.minicolors.css',
    './public/assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
    './public/assets/global/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
    './public/assets/global/plugins/pace/themes/pace-theme-flash.css',
    './public/assets/global/plugins/cubeportfolio/css/cubeportfolio.min.css',
    './public/assets/global/plugins/select2/css/select2.min.css',
    './public/assets/global/plugins/select2/css/select2-bootstrap.min.css',
    './public/assets/global/plugins/bootstrap-editable/bootstrap-editable/css/bootstrap-editable.css'
];

var jsFiles = [
    './public/assets/global/plugins/moment.min.js',
    './public/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js',
    './public/assets/global/plugins/fullcalendar/fullcalendar.min.js',
    './public/assets/global/plugins/fullcalendar-scheduler/scheduler.min.js',
    './public/assets/global/plugins/jquery.sparkline.min.js',
    './public/assets/global/plugins/datatables/datatables.min.js',
    './public/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js',
    './public/assets/global/plugins/bootstrap-modal/js/bootstrap-modalmanager.js',
    './public/assets/global/plugins/bootstrap-modal/js/bootstrap-modal.js',
    './public/assets/global/plugins/typeahead/handlebars.min.js',
    './public/assets/global/plugins/typeahead/typeahead.bundle.min.js',
    './public/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
    './public/assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
    './public/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
    './public/assets/global/plugins/jquery-minicolors/jquery.minicolors.js',
    './public/assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
    './public/assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
    './public/assets/global/plugins/bootstrap-tagsinput/bootstrap-tagsinput.js',
    './public/assets/global/plugins/pace/pace.min.js',
    './public/assets/global/plugins/bootstrap-confirmation/bootstrap-confirmation.min.js',
    './public/assets/global/plugins/cubeportfolio/js/jquery.cubeportfolio.min.js',
    './public/assets/global/plugins/select2/js/select2.full.min.js',
    './public/assets/global/plugins/highcharts/js/highcharts.js',
    './public/assets/global/plugins/bootstrap-editable/bootstrap-editable/js/bootstrap-editable.min.js',
    './public/assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
    './public/assets/global/plugins/signature_pad/signature_pad.min.js'
];

//*** CSS & JS minify task
gulp.task('minify', function () {
    // css minify
    gulp.src(['./public/assets/apps/css/*.css', '!./public/assets/apps/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./public/assets/apps/css/'));

    gulp.src(['./public/assets/global/css/*.css','!./public/assets/global/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./public/assets/global/css/'));
    gulp.src(['./public/assets/pages/css/*.css','!./public/assets/pages/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./public/assets/pages/css/'));

    gulp.src(['./public/assets/layouts/**/css/*.css','!./public/assets/layouts/**/css/*.min.css']).pipe(rename({suffix: '.min'})).pipe(minifyCss()).pipe(gulp.dest('./public/assets/layouts/'));
    gulp.src(['./public/assets/layouts/**/css/**/*.css','!./public/assets/layouts/**/css/**/*.min.css']).pipe(rename({suffix: '.min'})).pipe(minifyCss()).pipe(gulp.dest('./public/assets/layouts/'));

    gulp.src(['./public/assets/global/plugins/bootstrap/css/*.css','!./public/assets/global/plugins/bootstrap/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./public/assets/global/plugins/bootstrap/css/'));

    //js minify
    gulp.src(['./public/assets/apps/scripts/*.js','!./public/assets/apps/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./public/assets/apps/scripts/'));
    gulp.src(['./public/assets/global/scripts/*.js','!./public/assets/global/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./public/assets/global/scripts'));
    gulp.src(['./public/assets/pages/scripts/*.js','!./public/assets/pages/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./public/assets/pages/scripts'));
    gulp.src(['./public/assets/layouts/**/scripts/*.js','!./public/assets/layouts/**/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./public/assets/layouts/'));


    // Concat CSS
    gulp.src(cssFiles)
        .pipe(concat('assets.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./public/assets/'));

    // Concat JS
    gulp.src(jsFiles)
        .pipe(concat('assets.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/assets'));
});