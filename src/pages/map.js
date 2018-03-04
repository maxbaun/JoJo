import React from 'react';
import {List} from 'immutable';

import CSS from '../css/pages/map.module.css';
import Page from '../components/page';
import map from '../img/jojo-map.jpg';
const PageConfig = {
	title: 'Map',
	description: 'Follow where we are going around the island for live dolphin encounters in Turks & Caicos.',
	keywords: List(['encounters', 'map'])
};

const About = () => {
	return (
		<Page {...PageConfig}>
			<div className="row">
				<div className="col col-12">
					<div className={CSS.map}>
						<img src={map} alt="Follow JoJo Map"/>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default About;
