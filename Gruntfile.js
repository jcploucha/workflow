module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			build: {
				files: {
					'app/public/css/home.css':'app/public/sass/home.scss'
				}
			}			
		},

		jshint: {
			all: {
				src: [
					'app/public/js/**/*.js'
				]
			},
			options: {
				reporter: require('jshint-stylish')	
			}
		},

		watch: {
			css: {
				files: 'app/public/sass/*.scss',
				tasks: 'sass'				
			},
			html: {
				files: 'app/views/*.haml'
			},
			scripts: {
				files: [
					'app/public/js/**/*.js',
					'app/public/js/*.js'
				],
				tasks: 'jshint'
			},
			options: {
				spawn: false,
				livereload: true
			}
		}
		
	});

	grunt.registerTask('default', ['watch'])

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.event.on('watch', function(action, filepath) {
	  grunt.config('jshint.all.src', filepath);
	});

}