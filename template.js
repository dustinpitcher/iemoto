/**
 * iemoto
 * https://github.com/megumiteam/iemoto/blob/master/template.js
 *
 * Licensed under the GPLv2
 */

'use strict';

exports.description = 'Create a WordPress theme based on Automattic\'s _s starter theme.';

exports.notes = '';
exports.after = '';
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
    init.process( {}, [
        // Prompt for these values.
        init.prompt( 'title', 'MARCOM' ),
        {
            name   : 'prefix',
            message: 'PHP function prefix (alpha and underscore characters only)',
            default: 'marcom'
        },
        init.prompt( 'description', 'Custom Theme by The Marcom Group' ),
        init.prompt( 'homepage', 'https://themarcomgroup.com/' ),
        init.prompt( 'author_name', 'The Marcom Group' ),
        init.prompt( 'author_url', 'https://themarcomgroup.com/' ),
        {
            name: 'gulp',
            message: 'Use gulp?',
            default: 'y/N'
        }
    ], function( err, props ) {
        props.keywords = [];
        props.version = '0.1.0';
        // Use gulp or grunt
        if ( props.gulp == 'y' ) {
            props.devDependencies = {
                "gulp": "^3.9.0",
                "gulp-sass": "^3.1.0",
                "gulp-jshint": "^1.12.0",
                "gulp-load-plugins": "^0.7.0",
                "gulp-notify": "^2.2.0",
                "gulp-plumber": "^0.6.6",
                "gulp-replace": "^0.5.0",
                "run-sequence": "^1.2.0",
                "bootstrap-sass": "^3.3.7",
                "font-awesome": "^4.7.0",
                "browser-sync": "^3.3.7"
            };
        } else {
            props.devDependencies = {
                "grunt": "^1.0.0",
                "grunt-sass": "^2.0.0",
                "grunt-contrib-jshint": "^1.0.0",
                "grunt-contrib-watch": "^1.0.0",
                "grunt-text-replace": "^0.4.0",
                "load-grunt-tasks": "^3.5.0",
                "bootstrap-sass": "^3.3.7",
                "font-awesome": "^4.7.0"

            };
        }
        // Sanitize names where we need to for PHP/JS
        props.name = props.title.replace( /\s+/g, '-' ).toLowerCase();
        // Development prefix (i.e. to prefix PHP function names, variables)
        props.prefix = props.prefix.replace('/[^a-z_]/i', '').toLowerCase();
        // Development prefix in all caps (e.g. for constants)
        props.prefix_caps = props.prefix.toUpperCase();
        // An additional value, safe to use as a JavaScript identifier.
        props.js_safe_name = props.name.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
        props.file_name = props.js_safe_name.replace(/_/g, '-');
        // An additional value that won't conflict with NodeUnit unit tests.
        props.js_test_safe_name = props.js_safe_name === 'test' ? 'myTest' : props.js_safe_name;
        props.js_safe_name_caps = props.js_safe_name.toUpperCase();

        // Files to copy and process
        var files = init.filesToCopy( props );
        console.log( files );
        // Actually copy and process files
        init.copyAndProcess( files, props, {noProcess: ['screenshot.png', 'languages/*.mo']} );
        // Generate package.json file
        init.writePackageJSON( 'package.json', props );

        var path = require('path');
        var fs = require('fs');

        fs.stat(path.resolve('css'), function(err, stats){
            if (err) {
                fs.mkdir(path.resolve('css'));
            }
        });

        fs.stat(path.resolve('images'), function(err, stats){
            if (err) {
                fs.mkdir(path.resolve('images'));
            }
        });

        fs.renameSync(
            path.resolve('js')+'/marcom.js',
            path.resolve('js')+'/'+props.file_name+'.js'
        );

        fs.renameSync(
            path.resolve('languages')+'/_s.pot',
            path.resolve('languages')+'/'+props.prefix+'.pot'
        );

        if ( props.gulp == 'y' ) {
            fs.unlinkSync('Gruntfile.js')
            console.log('Deleted Gruntfile.js');
        } else {
            fs.unlinkSync('gulpfile.js')
            console.log('Deleted gulpfile.js');
        }

        // Done!
        done();
    });
};
