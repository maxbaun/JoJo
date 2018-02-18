import React, {Fragment} from 'react';
import Link from 'gatsby-link';

export default () => {
	return (
		<Fragment>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>
			<div>Hello world from abbout!</div>
		</Fragment>
	);
};
