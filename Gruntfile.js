module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'destrap.css':'sass/destrap.sass'
				}
			},
			test: {
				files: {
					'test/test.css':'test/test.sass'
				}
			}
		},
		cssmin: {
			minify: {
				'destrap.min.css':'destrap.css'
			}
		},
		csslint: {
			dist: {
				src: ['destrap.css']
			},
			test: {
				src: ['test/test.css']
			}
		},
		jshint: {
			gruntfile: ['Gruntfile.js']
		},
		watch: {
			jshint: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile']
			},
			css: {
				files: 'sass/**/*.sass',
				tasks: ['sass:dist']
			},
			test: {
				files: ['test/test.sass','sass/partials/_variables.sass'],
				tasks: ['sass:test']
			}
		}
	});

	// Load needed plugins.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// Setup tasks.
	grunt.registerTask('deploy', ['sass', 'csslint:dist', 'cssmin']);
	grunt.registerTask('check', ['csslint', 'jshint']);
	grunt.registerTask('default', ['watch']);
};