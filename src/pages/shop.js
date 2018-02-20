import React from 'react';
import Parser from 'html-react-parser';

import CSS from '../css/pages/shop.module.css';
import Page from '../components/page';
import Image from '../components/image';
import Paypal from '../components/paypal';
import {shop} from '../constants';
import {price} from '../utils/componentHelpers';

const PageConfig = {
	title: 'Shop'
};

const Shop = () => {
	return (
		<Page {...PageConfig}>
			<div className={CSS.shop}>
				{shop.map(section => {
					return (
						<section key={section.get('title')} className={CSS.section}>
							<h3 className={CSS.sectionTitle}>{section.get('title')}</h3>
							<div className={CSS.products}>
								<div className="row">
									{section.get('products').map(product => {
										return (
											<div key={product.getIn(['paypal', 'item'])} className="col-12 col-sm-4">
												<div className={CSS.product}>
													<div className={CSS.productContent}>
														<div className={CSS.productImage}>
															<Image {...product.get('image').toJS()} align="left"/>
														</div>
														<div className={CSS.productDescription}>
															{Parser(product.get('description') || '')}
														</div>
														<p className={CSS.productPrice}>{price(product.getIn(['paypal', 'amount']))} includes shipping and handling</p>
													</div>
													<div className={CSS.productFooter}>
														<div className={CSS.productPaypal}>
															<Paypal {...product.get('paypal').toJS()}/>
														</div>
														{product.get('amazon') && product.get('amazon') !== '' ? <p className={CSS.productAmazon}>Also available on <a href={product.get('amazon')} target="_blank">Amazon.</a></p> : null}
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
