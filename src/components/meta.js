import React from 'react';
import PropTypes from 'prop-types';
import * as ImmutablePropTypes from 'react-immutable-proptypes';
import {List} from 'immutable';
import {Helmet} from 'react-helmet';

import headerImage from '../img/header.jpg';

const Meta = ({title, description, keywords}) => {
	const baseTitle = 'JoJo & Jay';
	const pageTitle = title && title !== '' ? `${baseTitle} - ${title}` : baseTitle;
	return (
		<Helmet>
			<title>{pageTitle}</title>
			<meta
				name="description"
				content={description}
			/>
			<meta
				name="keywords"
				content={keywords.join(' ')}
			/>
			<meta
				name="og:title"
				content={pageTitle}
			/>
			<meta
				name="og:description"
				content={description}
			/>
			<meta
				name="og:type"
				content="article"
			/>
			<meta
				name="og:image"
				content={headerImage}
			/>
		</Helmet>
	);
};

Meta.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: ImmutablePropTypes.list //eslint-disable-line
};

Meta.defaultProps = {
	title: '',
	description: '',
	keywords: List()
};

export default Meta;
