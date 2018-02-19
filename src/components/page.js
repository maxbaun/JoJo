import React from 'react';
import PropTypes from 'prop-types';

import CSS from '../css/modules/page.module.css';

const Page = ({title, children}) => {
	return (
		<div className={CSS.page}>
			<div className="container">
				<h1 className={CSS.title}>{title}</h1>
				{children}
			</div>
		</div>
	);
};

Page.propTypes = {
	title: PropTypes.string,
	children: PropTypes.element.isRequired
};

Page.defaultProps = {
	title: ''
};

export default Page;
