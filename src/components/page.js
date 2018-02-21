import React from 'react';
import PropTypes from 'prop-types';
import * as ImmutablePropTypes from 'react-immutable-proptypes';
import {List} from 'immutable';

import CSS from '../css/modules/page.module.css';
import Meta from './meta';
import {meta} from '../constants';

const Page = ({title, children, description, keywords}) => {
	return (
		<div className={CSS.page}>
			<Meta
				title={title}
				description={description}
				keywords={meta.get('keywords').concat(keywords)}
			/>
			<div className="container">
				<h1 className={CSS.title}>{title}</h1>
				{children}
			</div>
		</div>
	);
};

Page.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.element.isRequired,
	keywords: ImmutablePropTypes.list //eslint-disable-line
};

Page.defaultProps = {
	title: '',
	description: '',
	keywords: List()
};

export default Page;
