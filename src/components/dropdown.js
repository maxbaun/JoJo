import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import * as ImmutablePropTypes from 'react-immutable-proptypes';
import Link from 'gatsby-link';
import {bind} from 'lodash-decorators';
import {List, Map} from 'immutable';

import CSS from '../css/modules/dropdown.module.css';
import {click, ref, noop} from '../utils/componentHelpers';

export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);

		this.node = null;

		this.state = {
			active: false
		};
	}

	static propTypes = {
		title: ImmutablePropTypes.map,
		className: PropTypes.string,
		linkClass: PropTypes.string,
		toggleClass: PropTypes.string,
		menuClass: PropTypes.string,
		items: ImmutablePropTypes.list,
		onClick: PropTypes.func
	}

	static defaultProps = {
		title: Map({
			name: 'Dropdown Toggle',
			link: '#'
		}),
		className: '',
		linkClass: '',
		toggleClass: '',
		menuClass: '',
		items: List(),
		onClick: noop
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false);
	}

	@bind()
	handleClick() {
		const visible = !this.state.active;

		if (visible) {
			this.handleOpen();
		} else {
			this.handleClose();
		}
	}

	@bind()
	handleClickOutside(e) {
		if (this.node.contains(e.target)) {
			return;
		}

		this.handleClose();
	}

	@bind()
	handleOpen() {
		this.setState({
			active: true
		});

		document.addEventListener('click', this.handleClickOutside, false);
	}

	@bind()
	handleClose() {
		this.setState({
			active: false
		});

		document.removeEventListener('click', this.handleClickOutside, false);
	}

	render() {
		const {title, items, className, toggleClass, menuClass} = this.props;
		const {active} = this.state;

		return (
			<div ref={ref.call(this, 'node')} className={[active ? CSS.dropdownActive : CSS.dropdown, className].join(' ')}>
				<span className={[CSS.toggle, toggleClass].join(' ')} onClick={click(this.handleClick)}>
					{title.get('name')}
				</span>
				<div className={[CSS.menu, menuClass].join(' ')} aria-labelledby="navbarDropdown">
					{items.map(item => {
						return (
							<Fragment key={item.get('name')}>
								{this.renderBaseLink(item.get('link'), item.get('name'))}
							</Fragment>
						);
					})}
				</div>
			</div>
		);
	}

	@bind()
	renderBaseLink(link, name) {
		const {linkClass, onClick} = this.props;
		const external = link.indexOf('//') > -1 || link.indexOf('mailto') > -1;

		return external ?
			<a className={[CSS.item, linkClass].join(' ')} href={link} target="_blank" onClick={click(onClick, link)}>{name}</a> :
			<Link className={[CSS.item, linkClass].join(' ')} to={link} onClick={click(onClick, link)}>{name}</Link>;
	}
}
