import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { inCart } from './InCart';

// This class displays cart summary at the bottom of the page, including total price, Clear cart button and proceed to checkout button that opens up a Paypal login page.
export default class CartSummary extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mt-5 mb-2 ml-sm-5 ml-md-auto col-sm-8 text capitalize text-right">
						{/* Total Price */}
						<h4 className="text-capitalize">
							total price : $ {parseFloat(inCart.state.totalPrice.toFixed(2))}
						</h4>
						<div>
							{/* Proceed To Checkout button that is disabled when cart is empty */}
							<Link
								to="/paypal"
								style={
									inCart.state.item.length === 0 ? (
										{ pointerEvents: 'none' }
									) : (
										{ pointerEvents: 'auto' }
									)
								}
							>
								<button
									className="btn btn-success w-auto text-uppercase mt-1 mb-2 ml-2"
									disabled={inCart.state.item.length === 0 ? true : false}
								>
									proceed to checkout
								</button>
							</Link>
							{/* Clear Cart button that is disabled when cart is empty */}
							<Link
								to="/cart"
								onClick={() => inCart.resetCart()}
								style={
									inCart.state.item.length === 0 ? (
										{ pointerEvents: 'none' }
									) : (
										{ pointerEvents: 'auto' }
									)
								}
							>
								<button
									className="btn btn-danger w-auto text-uppercase mt-1 mb-5"
									disabled={inCart.state.item.length === 0 ? true : false}
								>
									clear cart
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
