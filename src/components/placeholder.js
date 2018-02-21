import React from 'react';
import PropTypes from 'prop-types';

import CSS from '../css/modules/placeholder.module.css';

const Placeholder = ({height, children}) => {
	const style = {
		height
	};

	return (
		<div className={CSS.placeholder} style={style}>
			{children ? children : null}
		</div>
	);
};

Placeholder.propTypes = {
	height: PropTypes.number,
	children: PropTypes.element //eslint-disable-line
};

Placeholder.defaultProps = {
	height: 150
};

export default Placeholder;
