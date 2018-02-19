import React from 'react';
import PropTypes from 'prop-types';

import CSS from '../css/modules/video.module.css';

const Video = ({src}) => {
	return (
		<div className={CSS.video}>
			<iframe
				src={src}
				frameBorder="0"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
				allowFullScreen
			/>
		</div>
	);
};

Video.propTypes = {
	src: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired
};

export default Video;
