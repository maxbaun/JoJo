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
		src: PropTypes.string.isRequired,
		source: PropTypes.string.isRequired,
		maxWidth: PropTypes.string,
		caption: PropTypes.string
	}

	static defaultProps = {
		maxWidth: 'none',
		caption: ''
	}

	@bind()
	handleLoad() {
		this.setState({
			loaded: true
		});
	}

	render() {
		const {src, maxWidth, caption, source} = this.props;
		const {loaded} = this.state;

		const style = {
			maxWidth
		};

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
