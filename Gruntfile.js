'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'build/main.min.js': ['src/javascript/*.js', 'bower_components/bower-tinder-js/*.js']
        }
      }
    },
    sass: {
      dist: {
        files: {
         'build/main.css':'src/styles/main.css'
        }
      }
    },
    processhtml: {
      dist: {
        options: {
          process: true,
          data: {
            title: 'Minispot',
            message: 'This is production distribution'
          }
        },
        files: {
          'build/index.html': ['src/index.html']
        }
      }
    },
    copy: {
      main: {
        src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
        dest: 'build/bootstrap.min.css',
      }
    },
    'gh-pages': {
        options: {
            base: 'build'
        },
        src: ['**']
    },
    concat: {
      dist: {
        src: [
            'src/javascript/*.js'
        ],
        dest: 'build/production.js',
      }
    },
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'src/images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'build/images/'
          }]
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
          files: ['src/javascript/*.js'],
          tasks: ['concat', 'uglify'],
          options: {
              spawn: false,
          },
      }, 
      css: {
        files: ['src/styles/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
      }
    }
  });

  // Load the plugin tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Custom tasks
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'copy', 'processhtml', 'imagemin']);
};