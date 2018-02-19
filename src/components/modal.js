import React from 'react';
import PropTypes from 'prop-types';
import {bind} from 'lodash-decorators';
import {TransitionMotion, spring, presets} from 'react-motion';

import {noop} from '../utils/componentHelpers';
import CSS from '../css/modules/modal.module.css';

export default class Modal extends React.Component {
	static propTypes = {
		children: PropTypes.element.isRequired,
		active: PropTypes.bool.isRequired,
		onClose: PropTypes.func
	};

	static defaultProps = {
		onClose: noop
	};

	@bind()
	getDefaultStyles() {
		return {
			key: 'modal',
			data: {},
			style: {
				opacity: spring(1), position: spring(0, presets.stiff)
			}
		};
	}

	@bind()
	willEnter() {
		return {
			opacity: 0, position: -1000
		};
	}

	@bind()
	willLeave() {
		return {
			opacity: spring(0), position: spring(-1000, presets.stiff)
		};
	}

	render() {
		const {active} = this.props;

		return (
			<TransitionMotion
				willEnter={this.willEnter}
				willLeave={this.willLeave}
				styles={active ? [this.getDefaultStyles()] : []}
			>
				{items => items.length ? this.renderModal(items[0].key, items[0].style) : null}
			</TransitionMotion>
		);
	}

	@bind()
	renderModal(key, style) {
		const {children, onClose: handleClose} = this.props;

		return (
			<div key={key} className={CSS.modal} style={{opacity: style.opacity}}>
				<div className={CSS.overlay} onClick={handleClose}/>
				<span className={CSS.close} onClick={handleClose}/>
				<div
					className={CSS.wrap}
					style={{
						transform: `translate3d(0, ${style.position}px, 0)`
					}}
				>
					{children}
				</div>
			</div>
		);
	}
}
