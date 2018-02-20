import React from 'react';
import PropTypes from 'prop-types';

import CSS from '../css/modules/image.module.css';

const Image = ({src, caption, captionColor, align, captionSize}) => {
	return (
		<div className={CSS.image} data-align={align}>
			<img src={src} alt={caption}/>
			{caption && caption !== '' ? <small data-size={captionSize} data-color={captionColor}>{caption}</small> : null}
		</div>
	);
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	caption: PropTypes.string,
	captionColor: PropTypes.string,
	captionSize: PropTypes.string,
	align: PropTypes.string
};

Image.defaultProps = {
	caption: '',
	captionColor: '',
	captionSize: '',
	align: 'center'
};

export default Image;
