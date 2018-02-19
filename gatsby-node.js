exports.onCreatePage = async ({page, boundActionCreators}) => {
	const {createPage} = boundActionCreators;

	return new Promise((resolve, reject) => {
		console.log(page);

		page.context = {
			test: 'tesastast'
		};

		resolve();
	});
};
