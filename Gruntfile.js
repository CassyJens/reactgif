'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-browserify2');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-multi-forever');
    grunt.loadNpmTasks('grunt-react');

    var ejs = require('browserify-ejs');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        react: {
          files: {
            expand: true,
            cwd: 'src/jsx/',
            src: ['**/*.jsx'],
            dest: 'src/js/react/',
            ext: '.js'
          }
        },
        watch: {
          files: [
            './src/js/**/*.js',
            './src/jsx/**/*.jsx'
          ],
          tasks: ['react','browserify2:compile']
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
                entry: './src/js/react/app.js',
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

    grunt.registerTask('default', ['react', 'browserify2:compile', 'watch']);
};
