import React from 'react';
import {List} from 'immutable';

import CSS from '../css/pages/about.module.css';
import Page from '../components/page';
import about1 from '../img/about-1.jpg';
import about2 from '../img/about-2.jpg';
import about3 from '../img/about-3.jpg';

const PageConfig = {
	title: 'About JoJo',
	description: 'JoJo is an ambassador bottlenose dolphin that lives around the Turks and Caicos Islands.',
	keywords: List(['jay sargent', 'about us'])
};

const About = () => {
	return (
		<Page {...PageConfig}>
			<div className="row">
				<div className="col col-12 col-md-4">
					<div className={CSS.info}>
						<img src={about1} alt="About JoJo from Providenciales"/>
						<span>
							<p>JoJo is an ambassador bottlenose dolphin that lives around the Turks and Caicos Islands. He is probably around 40 years old and has swum with many people over the years. I first met JoJo in 1999. Tim Ainsley the Captain and owner of Beluga told me about him and then I got to see them interact. It wasn’t until I interacted with JoJo myself that my real fascination started.</p>

							<p>Animals have always been my life. I run a successful show horse business in Rhode Island and I think the reason I’ve been successful is my understanding of animal behavior. I never had any interest in the sea even though my brother is an oceanographer and we spent summers on Cape Cod. When I met JoJo all of that changed.</p>

							<p>I learned how to snorkel and free dive. I now think nothing of spending the whole day, everyday on the water (mostly in the water!) if there is a dolphin involved. I have also become familiar with quite a bit of the other marine life.</p>
						</span>
					</div>
				</div>
				<div className="col col-12 col-md-4">
					<div className={CSS.info}>
						<img src={about2} alt="JoJo from Provo"/>
						<span>
							<p>My husband and I bought a condo at Ocean Club on Providenciales and we started coming down for longer periods of time in the winter. We also bought a boat “Catch Ride” which enabled me to go find JoJo instead of waiting for him to swim by.</p>

							<p>I started spending more and more time with him. As his trust in me increased he started to bring me to meet other dolphins. He would very deliberately come to the back of our boat where I always get in and swim very slowly with me following to meet his friends. The mothers and calves would let me hang with them some calves have been especially friendly. Time after time if other people tried to hop in the water the mothers and calves would swim away. </p>

							<p>I began to feel that other people might find our relationship interesting. I decided to write a book. Basically I took my journal which I had kept documenting my relationship with JoJo and our adventures and turned into a book.</p>
						</span>
					</div>
				</div>
				<div className="col col-12 col-md-4">
					<div className={CSS.info}>
						<img src={about3} alt="Dolphins in Provo"/>
						<span>
							<p>JoJo has introduced me to over 10 dolphins most of which will let me swim with them. I feel he wants me to have a relationship with them like I do with him. </p>

							<p>I have been able to get some good footage of dolphin behavior and of the mothers and calves, which I have made into a DVD. I feel like I’m always telling people of all the great things I get to see when I’m with JoJo now I can share some of it. </p>

							<p>I have been emailing my adventures with the dolphins and sending them to a list of people that are interested. Now I will post these adventures on this site!</p>

							<p>I hope those of you who know JoJo will enjoy hearing about him and those of you that would love to know a dolphin will find it interesting. Please if you see JoJo or have a story let me know.</p>
						</span>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default About;
