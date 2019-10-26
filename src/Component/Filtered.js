import React, { Component } from 'react';

import { TreeList } from './Tree';

// This class contains the list of trees to be displayed in the product page, and an integer value to represent whether the list is empty(1) or not(-1).
export default class Filtered extends Component {
	constructor(filter, noneResult) {
		super();
		this.state = {
			filter     : filter,
			noneResult : noneResult
		};
	}

	// Adds a tree to the list.
	addTree(tree) {
		const tempList = [ ...filteredTrees.state.filter, tree ];
		filteredTrees.state.filter = tempList;
		filteredTrees.state.noneResult = -1;
		return { filteredTrees };
	}

	// Resets the list so that it contains all the trees.
	reset() {
		filteredTrees.state.filter = TreeList;
		return { filteredTrees };
	}

	render() {
		return <div />;
	}
}

var filteredTrees = new Filtered(TreeList, -1);

export { filteredTrees };
