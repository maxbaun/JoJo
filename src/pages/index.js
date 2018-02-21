import React, {Fragment} from 'react';

import CSS from '../css/pages/index.module.css';
import image1 from '../img/jay-diving.jpg';
import image2 from '../img/jojo-injury.jpg';
import Meta from '../components/meta';
import {meta} from '../constants';

export default () => {
	return (
		<Fragment>
			<Meta
				title="Home"
				description="Learn About JoJo, the famous dolphin in the Turks & Caicos Islands"
				keywords={meta.get('keywords')}
			/>
			<div className={CSS.homeImages}>
				<div className={CSS.imageWrap}>
					<div className={CSS.image}>
						<img src={image1} alt="Jay Diving with JoJo"/>
					</div>
					<div className={CSS.image}>
						<img src={image2} alt="JoJo Injury"/>
					</div>
				</div>
				<h1 className={CSS.title}>...and the dolphins of the Turks & Caicos islands</h1>
			</div>
		</Fragment>
	);
};
