import React from 'react';
import PropTypes from 'prop-types';
import {bind} from 'lodash-decorators';
import Slider from 'react-slick';

import {click, ref} from '../utils/componentHelpers';
import CSS from '../css/modules/carousel.module.css';

export default class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.slider = null;
	}

	static propTypes = {
		children: PropTypes.element.isRequired,
		initialSlide: PropTypes.number
	};

	static defaultProps = {
		initialSlide: 0
	};

	@bind()
	handlePrev() {
		if (!this.slider) {
			return;
		}

		this.slider.slickPrev();
	}

	@bind()
	handleNext() {
		if (!this.slider) {
			return;
		}

		this.slider.slickNext();
	}

	render() {
		const {children, initialSlide} = this.props;
		const nextArrow = <Arrow direction="right" onClick={click(this.handleNext)}/>;
		const prevArrow = <Arrow direction="left" onClick={click(this.handlePrev)}/>;
		const sliderSettings = {
			nextArrow,
			prevArrow,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			initialSlide,
			centerMode: true
		};

		return (
			<div className={CSS.slider}>
				<div className={CSS.inner}>
					<Slider {...sliderSettings} ref={ref.call(this, 'slider')}>
						{children.props.children}
					</Slider>
				</div>
			</div>
		);
	}
}

const Arrow = ({direction, onClick: handleClick}) => {
	return (
		<div className={CSS[`arrow${direction}`]} onClick={handleClick}><span className={CSS[`icon${direction}`]}/></div>
	);
};

Arrow.propTypes = {
	direction: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
