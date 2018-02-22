import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import {fromJS, List} from 'immutable';
import Parser from 'html-react-parser';

import CSS from '../css/pages/behavior.module.css';
import {graphImages, unique, stripHtml} from '../utils/componentHelpers';
import Page from '../components/page';
import Video from '../components/video';
import Image from '../components/image';

const Behavior = ({data: d}) => {
	const data = fromJS(d.behaviorJson);

	const PageConfig = {
		title: `Dolphin Behavior: ${data.get('name')}`,
		description: stripHtml(data.get('description')),
		keywords: List([data.get('name'), 'behavior'])
	};

	return (
		<Page {...PageConfig}>
			<div className={CSS.behavior}>
				<div className={CSS.header}>
					{data.get('featuredImage') ?
						<div className={CSS.featuredImage}>
							<Image
								src={data.getIn(['featuredImage', 'src', 'publicURL'])}
								caption={data.getIn(['featuredImage', 'caption'])}
								align="center"
							/>
						</div> : null
					}
					<div className={CSS.description}>
						{Parser(data.get('description') || '')}
					</div>
				</div>
				<div className={CSS.content}>
					{data.get('sections').map(renderSection)}
				</div>
			</div>
		</Page>
	);
};

function renderSection(section) {
	const title = section.get('title');
	const description = section.get('description');

	return (
		<section key={title || unique()} className={CSS.section}>
			{title ? <h3 className={CSS.sectionTitle}>{title}</h3> : null}
			{description ? Parser(description) : null}
			{section.get('images') ? renderImages(section.get('images')) : null}
			{section.get('videos') ? renderVideos(section.get('videos')) : null}
		</section>
	);
}

function renderImages(images) {
	images = graphImages(images);

	return (
		<div className={CSS.images}>
			<div className="row justify-content-around">
				{images.map(image => {
					return (
						<div key={image.get('src')} className="col-12 col-6">
							<Image {...image.toJS()}/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function renderVideos(videos) {
	const compiledRow = videos && videos.count() > 1 ? ['row', 'justify-content-around'] : ['row'];
	const compileCol = videos && videos.count() > 1 ? 'col-12 col-sm-6' : 'col';

	return (
		<div className={CSS.videos}>
			<div className={compiledRow.join(' ')}>
				{videos.map(video => {
					return (
						<div key={video.get('src')} className={compileCol}>
							<Video {...video.toJS()}/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

Behavior.propTypes = {
	data: PropTypes.object.isRequired
};

export const postQuery = graphql`
	query BehaviorByPath($path: String!) {
		behaviorJson(path: {eq: $path}) {
			name
			description
			featuredImage {
				src {
					publicURL
				}
				caption
			}
			sections {
				title
				description
				videos {
					src
					source
					caption
				}
				images {
					src {
						publicURL
					}
					caption
				}
			}
		}
	}
`;

export default Behavior;
