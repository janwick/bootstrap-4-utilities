module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
    jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			dev: ['Grunfile.js']
		},
    
		less: {
			dev: {
				files: [
					{
						expand: true,
						cwd: 'less/',
						src: ['*.less'],
						dest: 'dist/',
						ext: '.css',
						extDot: 'first'
       		}
      	]
			}
		},

		cssmin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: 'dist/',
						src: ['*.css'],
						dest: 'dist/',
						ext: '.min.css',
						extDot: 'first'
       		}
      	]
			}
		},
		
		watch: {
			stylesheets: {
				files: ['less/*.less'],
				tasks: ['less:dev']
			}
		}

	});

	// Default task(s).
	grunt.registerTask('default', ['jshint:dev', 'less:dev', 'cssmin:dist']);
	grunt.registerTask('dist', ['cssmin:dist']);
};