import React from 'react';
import PropTypes from 'prop-types';

import CSS from '../css/modules/video.module.css';

const Video = ({src, maxWidth}) => {
	const style = {
		maxWidth
	};

	return (
		<div className={CSS.videoWrap} style={style}>
			<div className={CSS.video}>
				<iframe
					src={src}
					frameBorder="0"
					webkitallowfullscreen="true"
					mozallowfullscreen="true"
					allowFullScreen
				/>
			</div>
		</div>
	);
};

Video.propTypes = {
	src: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
	maxWidth: PropTypes.string
};

Video.defaultProps = {
	maxWidth: 'none'
};

export default Video;
