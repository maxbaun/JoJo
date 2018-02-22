import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import {fromJS, List} from 'immutable';
import Parser from 'html-react-parser';

import CSS from '../css/pages/stories.module.css';
import Page from '../components/page';

const Stories = ({data: d}) => {
	const data = fromJS(d.allStoryJson);

	const stories = data.getIn(['edges']).map(e => e.get('node'));

	const PageConfig = {
		title: `JoJo Stories`,
		description: `Stories of JoJo, a dolphin from Providenciales in the Turks & Caicos Islands.`,
		keywords: List(['encounters', 'stories'])
	};

	return (
		<Page {...PageConfig}>
			<div className={CSS.stories}>
				{stories.map(story => {
					return (
						<div key={story.get('title')} className={CSS.story}>
							<div className={CSS.storyContent}>
								<h3>{story.get('title')}</h3>
								{Parser(story.get('content') || '')}
							</div>
						</div>
					);
				})}
			</div>
		</Page>
	);
};

Stories.propTypes = {
	data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
	query Stories {
		allStoryJson(sort: {fields: [order], order: DESC}) {
			edges {
				node {
					title
					content
				}
			}
		}
	}
`;

export default Stories;
