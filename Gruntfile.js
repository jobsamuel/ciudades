module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
		  js: {
		    files: ['public/**/*.js'],
		    options: {
		      livereload: true
		    },
		  },
		  css: {
		    files: ['public/**/*.css'],
		    options: {
		      livereload: true
		    },
		  },
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
}