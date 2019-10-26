import React, { Component } from 'react';

import Ritem from './Ritem';
import { Link } from 'react-router-dom';
import { TreeList } from './Tree';
import { filteredTrees } from './Filtered';

// This class displays filter and the list of trees in the product page.
export default class RitemList extends Component {
	filter() {
		// Initialize the filteredTrees to empty array
		filteredTrees.state.filter = [];
		// for each tree in tresList, if it matches the filter condition, add it to the filteredTrees
		for (var i = 0; i < TreeList.length; i++) {
			if (
				(TreeList[i].state.type === document.getElementById('sType').value ||
					document.getElementById('sType').value === 'any') &&
				(TreeList[i].state.soil === document.getElementById('sSoil').value ||
					document.getElementById('sSoil').value === 'any') &&
				(TreeList[i].state.sun === document.getElementById('sSun').value ||
					document.getElementById('sSun').value === 'any') &&
				(TreeList[i].state.maintain === document.getElementById('sMaintain').value ||
					document.getElementById('sMaintain').value === 'any') &&
				(TreeList[i].state.height === document.getElementById('sHeight').value ||
					document.getElementById('sHeight').value === 'any') &&
				(TreeList[i].state.growthRate === document.getElementById('sGrowth').value ||
					document.getElementById('sGrowth').value === 'any')
			) {
				filteredTrees.addTree(TreeList[i]);
			}
			// If the filteredTrees is empty, set nonResult to 1.
			if (filteredTrees.state.filter.length < 1) {
				filteredTrees.state.noneResult = 1;
			}
		}
	}

	render() {
		return (
			<div>
				<div>
					<h3 className="text-secondary text-uppercase pb-3 text-center border-bottom">product</h3>
				</div>
				<div className="row">
					<div
						className="mx-auto ml-sm-3 mr-sm-3 col-xs-11 col-sm-3 col-md-3 col-lg-2 mt-4 bg-light rounded"
						style={StyleSheet.right}
					>
						{/* Filter */}
						<h4 className="my-4">Filters</h4>
						<h6 className="mt-3">
							Tree Type:
							<br />
							<select className="w-100 py-1" id="sType" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Hedge">Hedge</option>"
								<option value="Evergreen">Evergreen</option>"
								<option value="NZ native">NZ native</option>"
								<option value="Fruit tree">Fruit tree</option>"
								<option value="Flower tree">Flower tree</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Soil Drainage:
							<br />
							<select className="w-100 py-1" id="sSoil" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Slow">Slow</option>"
								<option value="Medium">Medium</option>"
								<option value="Fast">Fast</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Sun:
							<br />
							<select className="w-100 py-1" id="sSun" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Shade">Shade</option>"
								<option value="Medium">Medium</option>"
								<option value="Sunny">Sunny</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Maintenance:
							<br />
							<select className="w-100 py-1" id="sMaintain" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Low">Low</option>"
								<option value="Medium">Medium</option>"
								<option value="High">High</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Max Height:
							<br />
							<select className="w-100 py-1" id="sHeight" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Under 1M">Under 1M</option>"
								<option value="1-2M">1-2M</option>"
								<option value="2-5M">2-5M</option>"
								<option value="Over 5M">Over 5M</option>"
							</select>
						</h6>
						<h6 className="mt-3">
							Growth Rate:
							<br />
							<select className="w-100 py-1" id="sGrowth" name="select">
								<option value="any" defaultValue>
									Any
								</option>"
								<option value="Slow">Slow</option>"
								<option value="Medium">Medium</option>"
								<option value="Fast">Fast</option>"
							</select>
						</h6>
						{/* Apply filter button */}
						<Link to="/product">
							<input
								className="mt-4 w-100 py-1"
								type="button"
								value="Apply"
								onClick={() => this.filter()}
							/>
						</Link>
						{/* Reset filter button */}
						<Link to="/product">
							<input
								className="mb-5 mt-2 w-100 py-1"
								type="button"
								value="Reset"
								onClick={() => filteredTrees.reset()}
							/>
						</Link>
					</div>
					{/* Iterate through filteredTrees and displays tree one by one */}
					<div className="col-xs-12 col-sm-8 col-md-8 mx-auto col-lg-9 mt-2 align-right float-sm-center float-md-right float-lg-right">
						<div className="row">
							{filteredTrees.state.noneResult > 0 ? (
								<h1 className="text-capitalize">no result found</h1>
							) : (
								filteredTrees.state.filter.map((item) => <Ritem {...item} key={item.state.id} />)
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
