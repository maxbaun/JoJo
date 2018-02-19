import React from 'react';
import PropTypes from 'prop-types';

import '../css/vendor/bootstrap-grid.css';
import '../css/vendor/fontawesome-all.css';
import '../css/vendor/slick.css';
import '../css/utils/fonts.css';
import '../css/utils/global.css';
import CSS from '../css/modules/layout.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Layout extends React.Component {
	static propTypes = {
		children: PropTypes.func.isRequired,
		location: PropTypes.object.isRequired
	}

	render() {
		return (
			<div className={CSS.wrap}>
				<Header brand="JoJo And Jay" title="JoJo And Jay" subtitle="...and the dolphins of the Turks & Caicos islands"/>
				{this.props.children()}
				<Footer/>
			</div>
		);
	}
}
