import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { inCart } from './InCart';

// This class displays each cart item on cart page.
export default class CartItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row text-uppercase text-center my-3 align-middle">
				{/* Delete item icon button */}
				<div className="btn col-10 mx-auto col-lg-2">
					<Link to="/cart">
						<i
							className="fas fa-times-circle text-danger mt-lg-4"
							onClick={() => inCart.deleteItem(this.props)}
						/>
					</Link>
				</div>
				{/* Item image */}
				<div className="col-10 mx-auto col-lg-2 w-10 h-10 mb-2">
					<div className="img-container">
						<img className="img-fluid" src={this.props.img} alt="" />
					</div>
				</div>
				{/* Item name */}
				<div className="col-10 mx-auto col-lg-2">
					<h6 className="mt-lg-5">{this.props.name}</h6>
				</div>
				{/* Item price */}
				<div className="col-10 mx-auto col-lg-2">
					<h6 className="my-auto mt-lg-5 mt-md-2 mt-sm-1">$ {this.props.price}</h6>
				</div>
			</div>
		);
	}
}
