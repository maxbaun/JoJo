import React from 'react';
import PropTypes from 'prop-types';

import CSS from '../css/modules/paypal.module.css';

const Paypal = ({item, amount}) => {
	return (
		<div>
			<div className={CSS.button}>
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_xclick"/>
					<input type="hidden" name="business" value="spssargent@gmail.com"/>
					<input type="hidden" name="lc" value="US"/>
					<input type="hidden" name="item_name" value={item}/>
					<input type="hidden" name="amount" value={amount}/>
					<input type="hidden" name="currency_code" value="USD"/>
					<input type="hidden" name="button_subtype" value="services"/>
					<input type="hidden" name="no_note" value="0"/>
					<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"/>
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
				</form>
			</div>
			<div className={CSS.info}>
				<p>Order with PayPal or send a check to Jay and a book will be mailed to you. Send check, name and address to:</p>
				<strong>
					Jay Sargent<br/>330 Indian Ave.<br/>Middletown, RI 02842<br/>
				</strong>
			</div>
		</div>
	);
};

Paypal.propTypes = {
	item: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired
};

export default Paypal;
