import React, { Component } from 'react';

import CartItem from './CartItem';
import { inCart } from './InCart';

// This is the class that iterates through items in inCart props and displays each of them.
export default class CartList extends Component {
	render() {
		return (
			<div className="container-fluid align-middle">
				{inCart.state.item.map((item) => <CartItem {...item} key={item.id} />)}
			</div>
		);
	}
}
