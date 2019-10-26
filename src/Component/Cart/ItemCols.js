import React, { Component } from 'react';

// This class displays the column names of the cart page.
export default class ItemCols extends Component {
	render() {
		return (
			<div className="container-fluid text-center d-none d-lg-block">
				<div className="row ">
					<div className="col-10 mx-auto col-lg-2">
						<h5 className="text-uppercase">remove</h5>
					</div>
					<div className="col-10 mx-auto col-lg-2">
						<h5 className="text-uppercase">products</h5>
					</div>
					<div className="col-10 mx-auto col-lg-2">
						<h5 className="text-uppercase">name</h5>
					</div>
					<div className="col-10 mx-auto col-lg-2">
						<h5 className="text-uppercase">price</h5>
					</div>
				</div>
			</div>
		);
	}
}
