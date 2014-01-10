'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    distPath: 'assets/js/dist',
    sourcePath: 'assets/js/vendor',

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              'assets/js/dist/*'
            ]
          }
        ]
      }
    },

    uglify: {
      singleFiles: {
        options: {
          preserveComments: 'some'
        },
        files: [
          {src: ['<%= sourcePath %>/bower_components/modernizr/modernizr.js'], dest: '<%= distPath %>/modernizr.min.js'}
        ]
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        files: [
          {
            src: [
              '<%= sourcePath %>/console/console.min.js',
              '<%= sourcePath %>/bower_components/bootstrap/dist/js/bootstrap.min.js'
            ],
            dest: '<%= distPath %>/plugins.min.js'
          }
        ]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      singleFiles: {
        files: [
          {src: ['<%= sourcePath %>/bower_components/jquery/jquery.min.js'], dest: '<%= distPath %>/jquery.min.js'}
        ]
      }
    }
  });

  grunt.registerTask('default', [
    'clean:dist',
    'concat',
    'uglify',
    'copy:singleFiles'
  ]);
};
