const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
	const {createPage} = boundActionCreators;

	const dolphinTemplate = path.resolve(`src/templates/dolphin.js`);
	const behaviorTemplate = path.resolve(`src/templates/behavior.js`);

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
		})
		.then(() => {
			return graphql(
				`
				  {
					allBehaviorJson (filter: {public: {eq: "true"}}) {
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

					res.data.allBehaviorJson.edges.forEach(({node}) => {
						createPage({
							path: node.path,
							component: behaviorTemplate
						});
					});
				});
		});
};
