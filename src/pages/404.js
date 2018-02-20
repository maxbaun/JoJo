import React from 'react';
import Link from 'gatsby-link';

import Page from '../components/page';

const PageConfig = {
	title: 'Not Found'
};

const Notfound = () => {
	return (
		<Page {...PageConfig}>
			<p>The URL does not exist. <Link to="/">Back To Home</Link></p>
		</Page>
	);
};

export default Notfound;
