import React, {Fragment} from 'react';
import * as ImmutablePropTypes from 'react-immutable-proptypes';
import {List} from 'immutable';
import Masonry from 'react-masonry-component';
import {bind} from 'lodash-decorators';

import {click} from '../utils/componentHelpers';
import Modal from './modal';
import Carousel from './carousel';
import Image from './image';
import Placeholder from './placeholder';
import CSS from '../css/modules/gallery.module.css';

const masonryOptions = {
	transitionDuration: 150
};

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.wrap = null;

		this.state = {
			activeImage: '',
			active: false,
			loaded: false
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

	@bind()
	handleImagesLoaded() {
		this.setState({
			loaded: true
		});
	}

	render() {
		const {active, activeImage, loaded} = this.state;
		const {images} = this.props;

		return (
			<div className={CSS.gallery}>

				<Masonry
					className={CSS.galleryInnerLoaded}
					elementType="ul"
					onImagesLoaded={this.handleImagesLoaded}
					options={masonryOptions}
					disableImagesLoaded={false}
					updateOnEachImageLoad={false}
				>
					{images.map((image, index) => {
						const style = {
							transitionDelay: `${index / 50}s`
						};

						return (
							<li key={image.get('src')} data-item className={CSS.item} onClick={click(this.handleClick, image.get('src'))}>
								<div className={CSS.itemInner}>
									{loaded === false ?
										<div className={CSS.placeholder}>
											<Placeholder height={125}/>
										</div> : null
									}
									<div className={loaded ? CSS.imageLoaded : CSS.image} style={style}>
										<Image {...image.toJS()} align="left"/>
									</div>
								</div>
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
