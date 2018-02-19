import React from 'react';

import Gallery from '../components/gallery';
import Page from '../components/page';
import {images} from '../constants';

const PageConfig = {
	title: 'JoJo Photos'
};

const Photos = () => {
	return (
		<Page {...PageConfig}>
			<Gallery images={images}/>
		</Page>
	);
};

export default Photos;
