import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import CSS from '../css/modules/header.module.css';
import Navbar from './navbar';

import headerImage from '../img/header.jpg';

const Header = ({brand, title, subtitle}) => {
	return (
		<header className={CSS.header}>
			<div className={CSS.imageDesktop}>
				<Link to="/"><h1 className={CSS.title}>{title}</h1></Link>
			</div>
			<div className={CSS.navWrap}>
				<Navbar brand={brand}/>
			</div>

			<div className={CSS.imageMobile}>
				<img src={headerImage} alt="JoJo and Jay"/>
				<div className={CSS.ctaMobile}>
					<h1 className={CSS.subtitle}>{subtitle}</h1>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	brand: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string
};

Header.defaultProps = {
	brand: '',
	title: '',
	subtitle: ''
};

export default Header;
