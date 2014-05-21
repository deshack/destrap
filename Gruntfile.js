module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'destrap.css':'sass/destrap.sass'
				}
			}
		},
		cssmin: {
			minify: {
				'destrap.min.css':'destrap.css'
			}
		},
		watch: {
			css: {
				files: 'sass/destrap.sass',
				tasks: ['sass']
			},
			css: {
				files: 'destrap.css',
				tasks: ['cssmin']
			}
		}
	});

	// Load needed plugins.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Setup tasks.
	grunt.registerTask('deploy', ['sass', 'cssmin']);
	grunt.registerTask('default', ['watch']);
}