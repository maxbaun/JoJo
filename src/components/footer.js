import React from 'react';

import CSS from '../css/modules/footer.module.css';

const Footer = () => {
	return (
		<footer className={CSS.footer}>
			<div className={CSS.copy}>
				<div className="container">
					<div className="row justify-content-around">
						<div className="col col-xs-6 col-lg-4">
							<span>&copy; 2016 Jay Sargent. All Rights Reserved.</span>
						</div>
						<div className="col col-xs-6 col-lg-4">
							<span><a href="mailto:spssargent@gmail.com">spssargent@gmail.com</a></span>
						</div>
					</div>
				</div>
			</div>
			<div className={CSS.islandInfo}>
				<span><a href="http://www.wherewhenhow.com/turks-caicos-islands-directory/az/j.html" target="new">Click here for more information on the Turks & Caicos Islands</a></span>
			</div>
		</footer>
	);
};

export default Footer;
