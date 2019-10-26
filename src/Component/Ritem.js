import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { inCart } from './Cart/InCart';

// This class displays each item in the product page.
export default class Ritem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-9 mx-auto col-md-7 col-lg-3 my-3">
				<div className="box mb-2">
					{/* Image */}
					<Link
						to={{
							pathname : '/ritemdetail',
							item     : this.props
						}}
					>
						<img src={this.props.state.img} alt="" />
					</Link>
					{/* Responsive Add To Cart button that is disabled if the tree is already added to the cart */}
					<Link
						to="/product"
						style={this.props.state.isAdded ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }}
					>
						<button
							className="btn btn-success mt-0 mb-2 w-100 text-capitalize rounded-0"
							onClick={() => {
								inCart.addToCart(this.props.state);
							}}
							disabled={this.props.state.isAdded ? true : false}
						>
							{this.props.state.isAdded ? 'Added' : 'add to cart'}
						</button>
					</Link>
					{/* Name and price of the tree */}
					<h6 className="text-center">{this.props.state.name}</h6>
					<h6 className="text-center">$ {this.props.state.price}</h6>
				</div>
			</div>
		);
	}
}
