import React, {Fragment} from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import {bind} from 'lodash-decorators';

import {click} from '../utils/componentHelpers';
import CSS from '../css/modules/navbar.module.css';
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
			<li key={item.get('name')} className={CSS.navDropdown}>
				<span className={CSS.toggle}>
					{item.get('name')}
				</span>
				<div className={CSS.dropdownMenu} aria-labelledby="navbarDropdown">
					{item.get('dropdown').map(child => {
						const external = child.get('link').indexOf('//') > -1 || child.get('link').indexOf('mailto') > -1;

						return (
							<Fragment key={child.get('name')}>
								{external ?
									<a className={CSS.dropdownItem} href={child.get('link')} target="_blank">{child.get('name')}</a> :
									<Link className={CSS.dropdownItem} to={child.get('link')}>{child.get('name')}</Link>
								}
							</Fragment>
						);
					})}
				</div>
			</li>
		);
	}

	@bind()
	renderLink(item) {
		const external = item.get('link').indexOf('//') > -1 || item.get('link').indexOf('mailto') > -1;

		const props = {
			className: CSS.navLink
		};

		if (external) {
			props.target = '_blank';
			props.href = item.get('link');
		} else {
			props.to = item.get('link');
		}

		return (
			<li key={item.get('name')} className={CSS.navItem}>
				{external ?
					<a className={CSS.navLink} href={item.get('link')} target="_blank">{item.get('name')}</a> :
					<Link className={CSS.navLink} to={item.get('link')}>{item.get('name')}</Link>
				}
			</li>
		);
	}
}
