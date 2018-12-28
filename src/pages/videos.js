import React from 'react';
import {List} from 'immutable';

import Page from '../components/page';
import Video from '../components/video';
import {videos} from '../constants';

const PageConfig = {
	title: 'JoJo Videos',
	description: 'Dolphin videos of JoJo & Friends in the Turks and Caicos Islands.',
	keywords: List(['videos', 'movies', 'vids'])
};

const Videos = () => {
	return (
		<Page {...PageConfig}>
			<div className="row">
				{videos.map(video => {
					return (
						<div key={video.get('src')} className="col col-12 col-sm-6">
							<Video
								src={video.get('src')}
								source={video.get('source')}
								caption={video.get('caption') || null}
							/>
						</div>
					);
				})}
			</div>
		</Page>
	);
};

export default Videos;
