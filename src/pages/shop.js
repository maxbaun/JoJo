import React from 'react';
import Parser from 'html-react-parser';
import {List} from 'immutable';

import CSS from '../css/pages/shop.module.css';
import Page from '../components/page';
import Image from '../components/image';
import Paypal from '../components/paypal';
import {shop} from '../constants';
import {price} from '../utils/componentHelpers';

const PageConfig = {
	title: 'Shop',
	description: 'Dolphin books, movies, and DVDs in Turks & Caicos',
	keywords: List(['books', 'dvds', 'dolphin books', 'dolphin dvds', 'dolphin movies', 'dolphin images'])
};

const Shop = () => {
	return (
		<Page {...PageConfig}>
			<div className={CSS.shop}>
				<div className={CSS.shopDescription}>
					<p>I first met JoJo in 1999. JoJo and Me tells how it all started. The sequel is a continuation of our friendship plus my relationship with calf I called Lemon Lips.</p>
					<div>
						<p className={CSS.mail}>Order with PayPal or send a check to Jay and a book will be mailed to you.<br/>Send check, name and address to: <strong>Jay Sargent 330 Indian Ave. Middletown, RI 02842</strong></p>
					</div>
				</div>
				{shop.map(section => {
					return (
						<section key={section.get('title')} className={CSS.section}>
							<h3 className={CSS.sectionTitle}>{section.get('title')}</h3>
							{section.get('subtitle') && section.get('subtitle') !== '' ? <h5 className={CSS.sectionSubtitle}>{section.get('subtitle')}</h5> : null}
							<div className={CSS.products}>
								<div className="row">
									{section.get('products').map(product => {
										return (
											<div key={product.getIn(['paypal', 'item'])} className="col-12 col-sm-6 col-md-4">
												<div className={CSS.product}>
													<div className={CSS.productImage}>
														<Image {...product.get('image').toJS()} align="left"/>
													</div>
													<div className={CSS.productContent}>
														<div className={CSS.productDescription}>
															{Parser(product.get('description') || '')}
														</div>
														<p className={CSS.productPrice}>
															<span>{price(product.getIn(['paypal', 'amount']))}</span>
															<small>(includes shipping and handling)</small>
														</p>
														<div className={CSS.productPaypal}>
															<Paypal {...product.get('paypal').toJS()}/>
														</div>
														{product.get('amazon') && product.get('amazon') !== '' ? <span className={CSS.productAmazon}>Also available on <a href={product.get('amazon')} target="_blank">Amazon.</a></span> : null}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</section>
					);
				})}
			</div>
		</Page>
	);
};

export default Shop;
