import React, {Fragment} from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import {bind} from 'lodash-decorators';

import {click} from '../utils/componentHelpers';
import CSS from '../css/modules/navbar.module.css';
import Dropdown from './dropdown';
import {primaryNavItems} from '../constants';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		};
	}

	static propTypes = {
		brand: PropTypes.string
	};

	static defaultProps = {
		brand: ''
	};

	@bind()
	handleToggle() {
		const {active} = this.state;

		this.setState({
			active: !active
		});
	}

	@bind()
	handleClose() {
		this.setState({
			active: false
		});
	}

	render() {
		const {active} = this.state;
		const {brand} = this.props;

		return (
			<nav className={CSS.navbar}>
				<Link className={CSS.brand} to="/">{brand}</Link>
				<button
					className={CSS.toggler}
					onClick={click(this.handleToggle)}
					type="button"
					data-toggle="collapse"
					data-target="#mainNav"
					aria-controls="mainNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className={CSS.togglerIcon}/>
				</button>

				<div onClick={click(this.handleClose)} className={active ? CSS.backdropActive : CSS.backdrop}/>

				<div className={active ? CSS.collapseActive : CSS.collapse} id="mainNav">
					<span onClick={click(this.handleClose)} className={CSS.close}/>
					<ul className={CSS.menu}>
						{primaryNavItems.map(item => {
							return item.get('dropdown') ? this.renderDropdown(item) : this.renderLink(item);
						})}
					</ul>
				</div>
			</nav>
		);
	}

	@bind()
	renderDropdown(item) {
		return (
			<Dropdown
				key={item.get('name')}
				title={item}
				items={item.get('dropdown')}
				className={CSS.navItem}
				linkClass={CSS.navLink}
				toggleClass={CSS.navLink}
				menuClass={CSS.dropdownMenu}
			/>
		);
		// return (
		// 	<li key={item.get('name')} className={CSS.navDropdown}>
		// 		<span className={CSS.toggle}>
		// 			{item.get('name')}
		// 		</span>
		// 		<div className={CSS.dropdownMenu} aria-labelledby="navbarDropdown">
		// 			{item.get('dropdown').map(child => {
		// 				return (
		// 					<Fragment key={child.get('name')}>
		// 						{this.renderBaseLink(child.get('link'), child.get('name'), CSS.dropdownItem)}
		// 					</Fragment>
		// 				);
		// 			})}
		// 		</div>
		// 	</li>
		// );
	}

	@bind()
	renderLink(item) {
		return (
			<li key={item.get('name')} className={CSS.navItem}>
				{this.renderBaseLink(item.get('link'), item.get('name'), CSS.navLink)}
			</li>
		);
	}

	@bind()
	renderBaseLink(link, name, className) {
		const external = link.indexOf('//') > -1 || link.indexOf('mailto') > -1;

		return external ?
			<a className={className} href={link} target="_blank" onClick={click(this.handleClose)}>{name}</a> :
			<Link className={className} to={link} onClick={click(this.handleClose)}>{name}</Link>;
	}
}
