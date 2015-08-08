'use strict';

module.exports = {
	options: {
		data: '<%= config.src %>/data/*.{json,yml}',
		flatten: true,
		layout: '<%= config.src %>/templates/layouts/default.hbs',
		partials: '<%= config.src %>/templates/partials/**/*.hbs'
	},
	build: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/pages/',
				src: ['**/*.hbs'],
				dest: '<%= config.build %>'
			}
		]
	},
	prod: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/pages/',
				src: ['**/*.hbs'],
				dest: '<%= config.prod %>'
			}
		]
	}
};
