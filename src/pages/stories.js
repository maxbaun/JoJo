import React from 'react';
import axios from 'axios';
import {fromJS, List} from 'immutable';
import Parser from 'html-react-parser';
import Showdown from 'showdown';

import CSS from '../css/pages/stories.module.css';
import Page from '../components/page';

const PageConfig = {
	title: `JoJo Stories`,
	description: `Stories of JoJo, a dolphin from Providenciales in the Turks & Caicos Islands.`,
	keywords: List(['encounters', 'stories'])
};

export default class Stories extends React.Component {
	constructor(props) {
		super(props);

		this.converter = new Showdown.Converter();

		this.state = {
			stories: List()
		};
	}

	componentDidMount() {
		this.getStories();
	}

	getStories() {
		const config = {
			url: `https://cdn.contentful.com/spaces/smkpl8jy8b0t/entries`,
			params: {
				content_type: 'story', //eslint-disable-line
				access_token: '9a4ceb123334195b06c64d2a037cb9afd3bb198a473d5f490d2ed59c3c4c1a65', //eslint-disable-line
				order: '-fields.order'
			}
		};

		return axios(config)
			.then(r => r.data)
			.then(data => {
				this.setState({
					stories: fromJS(data.items)
				});
			});
	}

	render() {
		const {stories} = this.state;

		return (
			<Page {...PageConfig}>
				<div className={CSS.stories}>
					<p className={CSS.info}>This is a group of stories that have been told to me about JoJo. They all happened before I met him. I don’t know if any of them are true I suspect some are and some aren’t! If any of you out there have more to add please let me know and I will include them.</p>
					{stories.map(story => {
						console.log(Parser(story.getIn(['fields', 'content'])));
						return (
							<div key={story.getIn(['sys', 'id'])} className={CSS.story}>
								<div className={CSS.storyContent}>
									<h3>{story.getIn(['fields', 'title'])}</h3>
									{Parser(this.converter.makeHtml(story.getIn(['fields', 'content'])))}
								</div>
							</div>
						);
					})}
				</div>
			</Page>
		);
	}
}
