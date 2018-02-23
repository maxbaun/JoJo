import React from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';
import {List, fromJS} from 'immutable';

const BaseUrl = `https://www.googleapis.com/blogger/v3/blogs/8333652500649875957/posts`;

export default class Blog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: List()
		};
	}

	componentDidMount() {
		this.getPosts();
	}

	getPosts(nextPageToken) {
		let data = {
			url: BaseUrl,
			params: {
				key: 'AIzaSyDDp473NKUrBuXgHxnoBteXkRLtdDnKqI0',
				maxResults: 20
			}
		};

		if (nextPageToken) {
			data.params.nextPageToken = nextPageToken;
		}

		return axios(data)
			.then(r => r.data)
			.then(data => {
				const posts = fromJS(data.items)
					// .map(post => {
					// 	return post.set('content', decodeURIComponent(post.get('content')));
					// });
				this.setState({
					posts
				});
			});
	}

	render() {
		return (
			<div>
				{this.state.posts.map(p => {
					console.log(p.get('content'));
					return (
						<div key={p.get('id')}>
							{Parser(p.get('content'))}
						</div>
					);
				})}
			</div>
		);
	}
}
