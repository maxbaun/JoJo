import React from 'react';
import PropTypes from 'prop-types';

import '../css/vendor/bootstrap-grid.css';
import '../css/vendor/fontawesome-all.css';
import '../css/utils/fonts.css';
import '../css/utils/global.css';
import CSS from '../css/modules/layout.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({children}) => {
	return (
		<div className={CSS.wrap}>
			<Header title="JoJo And Jay" subtitle="...and the dolphins of the Turks & Caicos islands"/>
			{children()}
			<Footer/>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.func.isRequired
};

export default Layout;
