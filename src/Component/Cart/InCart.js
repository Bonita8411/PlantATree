import React, { Component } from 'react';

import { TreeList } from '../Tree'; // Tree data import

// This class contains an item array and total price of those items.
export default class InCart extends Component {
	constructor(item, totalPrice) {
		super();
		this.state = {
			item       : item,
			totalPrice : totalPrice
		};
	}

	// Clears the cart.
	resetCart() {
		// Remove all items
		inCart.state.item.map((item) => {
			return inCart.deleteItem(item);
		});
		return { inCart };
	}

	// Adds an item to the cart.
	addToCart(item) {
		// Updates the item status (isAdded) to true
		item.isAdded = true;
		// Add the item
		const tempCart = [ ...inCart.state.item, item ];
		inCart.state.item = tempCart;
		// Updates the total price
		let tempTotal = 0.0;
		tempTotal = inCart.state.totalPrice + item.price;
		inCart.state.totalPrice = tempTotal;
		return { inCart };
	}

	// Removes an item from the cart.
	deleteItem(item) {
		let tempCartList = [ ...inCart.state.item ];
		let tempTotal = inCart.state.totalPrice;
		// Updates the total price
		tempTotal = tempTotal - item.price;
		// Filters through the list and adds all items except the removed item
		tempCartList = tempCartList.filter((element) => {
			return element.id !== item.id;
		});
		// Locates the index of the removed item in cart, updates its status (isAdded) to false
		let index = TreeList.findIndex((el) => el.state.id === item.id);
		TreeList[index].state.isAdded = false;

		inCart.state.totalPrice = tempTotal;
		inCart.state.item = tempCartList;
		return { inCart };
	}

	render() {
		return <div />;
	}
}

var inCart = new InCart([], 0.0);

export { inCart };
