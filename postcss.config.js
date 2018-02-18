module.exports = {
	plugins: [
		require('stylelint'),
		require('postcss-import'),
		// require('postcss-automath'),
		require('precss'),
		require('postcss-color-function'),
		// require('postcss-mixins'),
		require('postcss-utilities'),
		// require('postcss-simple-vars'),
		require('postcss-nested'),
		require('postcss-nesting'),
		require('postcss-cssnext')
	]
};
