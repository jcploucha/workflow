//var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		handlebars: {
			all: {
				files: {
					'app/public/js/templates.js': 'app/views/templates/*.handlebars'
				}
			},
			options: {
				namespace: 'Handlebars.templates',
				processName: function(filename){
					filename = filename.replace('app/views/templates/', '');
					filename = filename.replace('.handlebars', '');
					return filename;
				}
			}		
		},

		sass: {
			build: {
				files: {
					'app/public/css/home.css':'app/public/sass/home.scss',
					'app/public/css/home_semantic.css':'app/public/sass/home_semantic.scss'
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
				files: [
					'app/views/*.haml', 
					'app/views/*.erb', 					
				]
			},
			hbs: {
				files: 'app/views/templates/*.handlebars',
				tasks: 'handlebars'
			},
			scripts: {
				files: [
					'app/public/libs/**/*.js',
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

	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.event.on('watch', function(action, filepath) {
	  grunt.config('jshint.all.src', filepath);
	});

}