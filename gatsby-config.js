module.exports = {
	siteMetadata: {
		title: 'JoJo & Jay'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/data`,
				name: 'data'
			}
		},
		{
			resolve: 'gatsby-transformer-json',
			plugins: [
				'gatsby-remark-copy-linked-files'
			]
		}
	]
};
