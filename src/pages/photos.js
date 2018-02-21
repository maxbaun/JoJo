import React from 'react';
import {List} from 'immutable';

import Gallery from '../components/gallery';
import Page from '../components/page';
import {images} from '../constants';

const PageConfig = {
	title: 'JoJo Photos',
	description: 'Dolphin photos of JoJo & Friends in the Turks and Caicos Islands.',
	keywords: List(['photos', 'pictures', 'images', 'pics'])
};

const Photos = () => {
	return (
		<Page {...PageConfig}>
			<Gallery images={images}/>
		</Page>
	);
};

export default Photos;
