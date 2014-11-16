'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-browserify2');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-multi-forever');

    var ejs = require('browserify-ejs');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: [
                './src/js/**/*.js'
            ],
            tasks: ['browserify2:compile']
        },
        browserify2: {
            options: {
                expose: {
                    files: [
                        {
                            cwd: './src/js/',
                            src: [
                                'lib/**/*.js',
                                'react/classes/**/*.js'
                            ],
                            dest: 'modules/'
                        }
                    ]
                },
                beforeHook: function (bundle) {
                    return bundle.transform(ejs);
                }
            },
            compile: {
                entry: './src/js/app.js',
                compile: './src/js/app.production.js',
                debug: true
            }
        },
        forever: {
            default: {
                options: {
                    index: 'index.js',
                    logDir: 'logs'
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify2:compile', 'forever', 'watch']);
};
