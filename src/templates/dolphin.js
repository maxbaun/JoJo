import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import {fromJS, List} from 'immutable';
import Parser from 'html-react-parser';

import CSS from '../css/pages/dolphin.module.css';
import {graphImages} from '../utils/componentHelpers';
import Page from '../components/page';
import Video from '../components/video';
import Image from '../components/image';
import Gallery from '../components/gallery';

const Dolphin = ({data: d}) => {
	const data = fromJS(d.friendsJson);

	const PageConfig = {
		title: `${data.get('name')} - Turks & Caicos Dolphin`,
		description: `Videos & Pictures of ${data.get('name')}, a dolphin from Providenciales in the Turks & Caicos Islands.`,
		keywords: List([data.get('name')])
	};

	return (
		<Page {...PageConfig}>
			<div className={CSS.dolphin}>
				<div className={CSS.content}>
					<div className="row">
						{data.get('featuredImage') ?
							<div className="col col-12 col-sm-6">
								<div className={CSS.featuredImage}>
									<Image
										src={data.getIn(['featuredImage', 'src', 'publicURL'])}
										caption={data.getIn(['featuredImage', 'caption'])}
										align="left"
									/>
								</div>
							</div> : null
						}
						<div className={data.get('featuredImage') ? 'col col-12 col-sm-6' : 'col col-sm-6 offset-sm-3'}>
							<div className={CSS.description}>
								{Parser(data.get('description') || '')}
							</div>
						</div>
					</div>
				</div>
				{data.get('images') && data.get('images').count() ?
					<div className={CSS.images}>
						<h3 className={CSS.subtitle}>Images</h3>
						<Gallery
							images={graphImages(data.get('images'))}
						/>
					</div> : null
				}
				{data.get('videos') && data.get('videos').count() ?
					<div className={CSS.videos}>
						<h3 className={CSS.subtitle}>Videos</h3>
						<div className="row">
							{data.get('videos').map(video => {
								return (
									<div key={video.get('src')} className="col-6">
										<Video {...video.toJS()} maxWidth="475px"/>
									</div>
								);
							})}
						</div>
					</div> : null
				}
			</div>
		</Page>
	);
};

Dolphin.propTypes = {
	data: PropTypes.object.isRequired
};

export const postQuery = graphql`
	query FriendByPath($path: String!) {
		friendsJson(path: {eq: $path}) {
			name
			description
			featuredImage {
				src {
					publicURL
				}
				caption
			}
			images {
				src {
					publicURL
				}
				caption
			}
			videos {
				src
				source
			}
		}
	}
`;

export default Dolphin;
