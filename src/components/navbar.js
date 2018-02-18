import React from 'react';
import {fromJS} from 'immutable';
import Link from 'gatsby-link';
import {bind} from 'lodash-decorators';

import {click} from '../utils/componentHelpers';
import CSS from '../css/modules/navbar.module.css';

const navbarBrand = 'JoJo And Jay';
const primaryNavItems = fromJS([
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'About',
		link: '/about'
	},
	{
		name: 'Photos',
		link: '/photos'
	},
	{
		name: 'Videos',
		link: '/videos'
	},
	{
		name: 'JoJo & Friends',
		link: '#',
		dropdown: [
			{
				name: 'JoJo',
				link: '/jojo'
			},
			{
				name: 'Mojo',
				link: '/mojo'
			},
			{
				name: 'Raggedy Anne',
				link: '/raggedyanne'
			},
			{
				name: 'Bo',
				link: '/bo'
			},
			{
				name: 'Lemon Lips',
				link: '/lemonlips'
			},
			{
				name: 'Piney',
				link: '/piney'
			},
			{
				name: 'Scarside',
				link: '/scarside'
			},
			{
				name: 'Julia & Friskey',
				link: '/julia'
			},
			{
				name: 'Whitey',
				link: '/whitey'
			},
			{
				name: 'Whizzer',
				link: '/whizzer'
			},
			{
				name: 'Snipper',
				link: '/snipper'
			},
			{
				name: 'White Tip',
				link: '/whitetip'
			}
		]
	},
	{
		name: 'Stories',
		link: 'http://jojo-stories.blogspot.com',
		target: '_blank'
	},
	{
		name: 'Shop',
		link: '/shop'
	},
	{
		name: 'Blog',
		link: 'http://jojo-and-jay.blogspot.com',
		target: '_blank'
	},
	{
		name: 'Contact Me',
		link: 'mailto:spssargent@gmail.com'
	}
]);

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		};
	}

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

		return (
			<nav className={CSS.navbar}>
				<a className={CSS.brand} href="/">{navbarBrand}</a>
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
						return (
							<Link key={child.get('name')} className={CSS.dropdownItem} to={child.get('link')}>{child.get('name')}</Link>
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
