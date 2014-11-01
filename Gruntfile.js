
module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Instantiating our tasks and options
		watch:{

			css: {
				files: 'build/sass/**/*.scss', // look in public sass, and within any sub directory for any scss
				tasks: 'compass',
				option: {
					livereload: true //can change it to a specific port
				},
			},

			jade: {
				files: 'build/jade/**/*.jade', // look in public jade, and within any sub directory for any jade
				tasks: 'jade',
				option: {
					livereload: true //can change it to a specific port
				},
			}
		},

		compass: {
			compile:{
				options: {
					sassDir: 'build/sass',
					cssDir: 'public/css'
				}
			}
		},

		jade: {
			html: {
				options: {
					pretty: true
				},
				files: [{
					expand: true,
					cwd: 'build/jade',
					src: '**/*.jade',
					dest: '',
					ext: '.html'
				}]
			}
		},

		express: {
			all: {
				options: {
					port: 9000,
					hostname: 'localhost',
					bases: [__dirname] // ['.'] wont work due to local file system issues
				}
			}
		}

	}); // close initConfig

		// Load our npm modules
		grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.loadNpmTasks('grunt-contrib-compass');
		grunt.loadNpmTasks('grunt-contrib-jade');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-express');

		// Register our CLI tasks
		grunt.registerTask('wsp', ['compass', 'jade', 'express','watch']);

}

