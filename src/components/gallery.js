import React, {Fragment} from 'react';
import * as ImmutablePropTypes from 'react-immutable-proptypes';
import {List} from 'immutable';
import Masonry from 'react-masonry-component';
import {bind} from 'lodash-decorators';

import {click} from '../utils/componentHelpers';
import Modal from './modal';
import Carousel from './carousel';
import Image from './image';
import CSS from '../css/modules/gallery.module.css';

const masonryOptions = {
	transitionDuration: 300
};

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.wrap = null;

		this.state = {
			activeImage: '',
			active: false
		};
	}

	static propTypes = {
		images: ImmutablePropTypes.list
	};

	static defaultProps = {
		images: List()
	};

	@bind()
	handleClick(image) {
		this.setState({
			activeImage: image,
			active: true
		});
	}

	@bind()
	handleClose() {
		this.setState({
			activeImage: '',
			active: false
		});
	}

	render() {
		const {active, activeImage} = this.state;
		const {images} = this.props;

		return (
			<div className={CSS.gallery}>
				<Masonry
					className={CSS.galleryInner}
					elementType="ul"
					options={masonryOptions}
					disableImagesLoaded={false}
					updateOnEachImageLoad={false}
				>
					{images.map(image => {
						return (
							<li key={image.get('src')} data-item className={CSS.item} onClick={click(this.handleClick, image.get('src'))}>
								<Image {...image.toJS()} align="left"/>
							</li>
						);
					})}
				</Masonry>
				<Modal
					active={active}
					onClose={this.handleClose}
				>
					<div className={CSS.galleryCarousel}>
						<Carousel
							slideCount={images.count()}
							initialSlide={images.findIndex(i => i.get('src') === activeImage)}
						>
							<Fragment>
								{images.map(image => {
									return (
										<div key={image.get('src')} data-item className={CSS.carouselItem}>
											<Image {...image.toJS()} align="center" captionColor="white" captionSize="md"/>
										</div>
									);
								})}
							</Fragment>
						</Carousel>
					</div>
				</Modal>
			</div>
		);
	}
}
