import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import CSS from '../css/modules/header.module.css';
import Navbar from './navbar';

import ctaImage from '../img/db-link.png';
import headerImage from '../img/header.jpg';

const Header = ({title}) => {
	return (
		<header className={CSS.header}>
			<div className={CSS.imageDesktop}>
				<h1 className={CSS.title}>{title}</h1>
				<div className={CSS.cta}>
					<Link to="/dolphin-behavior">
						<img src={ctaImage} width="216"/>
					</Link>
				</div>
			</div>
			<div className={CSS.navWrap}>
				<Navbar/>
			</div>

			<div className={CSS.imageMobile}>
				<img src={headerImage} alt="JoJo and Jay"/>
			</div>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string
};

Header.defaultProps = {
	title: ''
};

export default Header;
