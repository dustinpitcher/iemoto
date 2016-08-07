module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    connect: {
      all: {
        options:{
          port: 8080,
          hostname: "0.0.0.0",
          livereload: 8081
        }
      }
    },
		watch: {
			sass: {
				files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
				tasks: ['sass:dist'],
				options: {
					livereload: true,
				}
			},
			livereload: {
				files: ['*.css','*.html', '*.php', '*/*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true,
          port: 8080,
          hostname: "0.0.0.0",
          livereload: 8081
				}
			}
		},
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded'
			},
			dist: {
				files: {
					'style.css': 'sass/style.scss'
				}
			}
		}
	});
	grunt.registerTask('default', ['sass:dist', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};