import React, { Component } from 'react';

import ItemCols from './ItemCols';
import CartList from './CartList';
import CartSummary from './CartSummary';

// This class contains and displays cart related components such as column names, the list of cart items, and cart summary.
export default class CartComp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<h3 className="text-secondary text-uppercase mb-lg-4 pb-3 text-center border-bottom">cart</h3>
				</div>
				<ItemCols /> 
				<CartList />
				<CartSummary />
			</div>
		);
	}
}
