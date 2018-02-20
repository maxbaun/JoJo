import React from 'react';
import PropTypes from 'prop-types';

import CSS from '../css/modules/video.module.css';

const Video = ({src, maxWidth, caption}) => {
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
			{caption && caption !== '' ? <small className={CSS.caption}>{caption}</small> : null}
		</div>
	);
};

Video.propTypes = {
	src: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
	maxWidth: PropTypes.string,
	caption: PropTypes.string
};

Video.defaultProps = {
	maxWidth: 'none',
	caption: ''
};

export default Video;
