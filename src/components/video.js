import React from 'react';
import PropTypes from 'prop-types';
import {bind} from 'lodash-decorators';

import CSS from '../css/modules/video.module.css';

import Placeholder from './placeholder';

const Heights = {
	youtube: 275,
	vimeo: 250
};

export default class Video extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false
		};
	}

	static propTypes = {
		src: PropTypes.string,
		source: PropTypes.string.isRequired,
		maxWidth: PropTypes.string,
		caption: PropTypes.string,
		video: PropTypes.object
	}

	static defaultProps = {
		src: null,
		maxWidth: 'none',
		caption: '',
		video: null
	}

	@bind()
	handleLoad() {
		this.setState({
			loaded: true
		});
	}

	render() {
		const {src, maxWidth, caption, source, video} = this.props;
		const {loaded} = this.state;

		const style = {
			maxWidth
		};

		if (source === 'local') {
			console.log(video)
			return (
				<div className={CSS.videoWrap} style={style}>
					<div className={CSS.localVideo}>
						<video controls="controls" poster={video.poster}>
							<source src={video.m4v} type="video/mp4" />
							<source src={video.webm} type="video/webm" />
						</video>
					</div>
				</div>
			);
		}

		return (
			<div className={CSS.videoWrap} style={style}>
				{loaded === false ?
					<Placeholder height={Heights[source]}/> : null
				}
				<div className={loaded ? CSS.videoLoaded : CSS.videoLoading}>
					<div className={CSS.video}>
						<iframe
							src={src}
							frameBorder="0"
							webkitallowfullscreen="true"
							mozallowfullscreen="true"
							allowFullScreen
							onLoad={this.handleLoad}
						/>
					</div>
					{caption && caption !== '' ? <small className={CSS.caption}>{caption}</small> : null}
				</div>
			</div>
		);
	}
}
