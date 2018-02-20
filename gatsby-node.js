const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
	const {createPage} = boundActionCreators;

	const dolphinTemplate = path.resolve(`src/templates/dolphin.js`);

	return graphql(
		`
		  {
			allFriendsJson (filter: {public: {eq: "true"}}) {
			  edges {
				node {
				  path
				}
			  }
			}
		  }
		`
	)
		.then(res => {
			if (res.errors) {
				console.log(JSON.stringify(res, null, 4));
				return Promise.reject(res.errors);
			}

			res.data.allFriendsJson.edges.forEach(({node}) => {
				createPage({
					path: node.path,
					component: dolphinTemplate
				});
			});
		});
};
