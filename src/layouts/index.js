import React from 'react';
import PropTypes from 'prop-types';

import '../css/styles.css';
import CSS from '../css/modules/layout.module.css';
import Header from '../components/header';

const Layout = ({children}) => {
	return (
		<div className={CSS.wrap}>
			<Header/>
			{children()}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.func.isRequired
};

export default Layout;
