import {fromJS} from 'immutable';

export const primaryNavItems = fromJS([
	{
		name: 'About',
		link: '/about'
	},
	{
		name: 'Live Encouters',
		link: '#',
		dropdown: [
			{
				name: 'Photos',
				link: '/photos'
			},
			{
				name: 'Videos',
				link: '/videos'
			},
			{
				name: 'Stories',
				link: 'http://jojo-stories.blogspot.com'
			}
		]
	},
	{
		name: 'JoJo & Friends',
		link: '#',
		dropdown: [
			{
				name: 'JoJo',
				link: '/jojo'
			},
			{
				name: 'Mojo',
				link: '/mojo'
			},
			{
				name: 'Raggedy Anne',
				link: '/raggedyanne'
			},
			{
				name: 'Bo',
				link: '/bo'
			},
			{
				name: 'Lemon Lips',
				link: '/lemonlips'
			},
			{
				name: 'Piney',
				link: '/piney'
			},
			{
				name: 'Scarside',
				link: '/scarside'
			},
			{
				name: 'Julia & Friskey',
				link: '/julia'
			},
			{
				name: 'Whitey',
				link: '/whitey'
			},
			{
				name: 'Whizzer',
				link: '/whizzer'
			},
			{
				name: 'Snipper',
				link: '/snipper'
			},
			{
				name: 'White Tip',
				link: '/whitetip'
			}
		]
	},
	{
		name: 'Dolphin Behaviors',
		link: '/dolphin-behavior'
	},
	{
		name: 'Shop',
		link: '/shop'
	},
	{
		name: 'Blog',
		link: 'http://jojo-and-jay.blogspot.com',
		target: '_blank'
	},
	{
		name: 'Contact',
		link: 'mailto:spssargent@gmail.com'
	}
]);
