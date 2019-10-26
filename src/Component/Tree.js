import React, { Component } from 'react';
import apple_img from '../images/apple.jpg';
import blueberry_img from '../images/blueberry.jpg';
import bluespruce_img from '../images/bluespruce.jpeg';
import cherryblossom_img from '../images/cherryblossom.jpg';
import lemon_img from '../images/lemon.jpg';
import mountaincabbage_img from '../images/moutaincabbage.jpg';
import rimu_img from '../images/rimu.jpg';
import cypress_img from '../images/cypress.jpg';
import rose_img from '../images/rose.jpg';
import viburnum_img from '../images/viburnum.jpg';

//This is for tree data 
//Each Tree contains img path so that reust it in another js file 
export default class Tree extends Component {
	constructor(id, name, type, soil, sun, maintain, height, growthRate, price, img, description, isAdded) {
		super();
		this.state = {
			id         : id,
			name       : name,
			type       : type,
			soil       : soil,
			sun        : sun,
			maintain   : maintain,
			height     : height,
			growthRate : growthRate,
			price   : price,
			img        : img,
			description: description,
			isAdded    : isAdded
		};
	}

	render() {
		return (
			<div>
				<h3>{this.state.id}</h3>
				<h3>{this.state.name}</h3>
				<p>{this.state.type}</p>
				<p>{this.state.soil}</p>
				<p>{this.state.sun}</p>
				<p>{this.state.maintain}</p>
				<p>{this.state.height}</p>
				<p>{this.state.growthRate}</p>
				<p>{this.state.Price}</p>
				<p>{this.state.img}</p>
				<p>{this.state.decription}</p>
			</div>
		);
	}
}

var apple = new Tree(
	1,
	'Apple',
	'Fruit tree',
	'Medium',
	'Sunny',
	'Low',
	'Over 5M',
	'Fast',
	49.99,
	apple_img,
	'An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apple trees are large if grown from seed.',
	false
);

var blueberry = new Tree(
	2,
	'Blueberry',
	'Fruit tree',
	'Fast',
	'Medium',
	'Medium',
	'1-2M',
	'Slow',
	74.99,
	blueberry_img,
	'Blueberry is a crown forming, woody, perennial shrub in the family Ericaceae grown for its fruits, or berries, of the same name. The blueberry plant possesses oval or elliptical leaves which grow alternately on the stems. The stems, or twigs, are yellow/green in color and turn reddish in winter.',
	false
);

var rose = new Tree(
	3,
	'Rose',
	'Flower tree',
	'Medium',
	'Sunny',
	'High',
	'Under 1M',
	'Medium',
	49.99,
	rose_img,
	'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.',
	false
);

var rimu = new Tree(
	4,
	'Rimu',
	'NZ native',
	'Fast',
	'Medium',
	'Medium',
	'Over 5M',
	'Low',
	200.99,
	rimu_img,
	'Rimu is a slow-growing tree, eventually attaining a height of up to 50 m, although most surviving large trees are 20 to 35 m tall. It typically appears as an emergent from mixed broadleaf temperate rainforest, although there are almost pure stands (especially on the west coast of the South Island).',
	false
);

var mountainCabbage = new Tree(
	5,
	'Mountain Cabbage',
	'NZ native',
	'Medium',
	'Shade',
	'Medium',
	'Under 1M',
	'Fast',
	24.99,
	mountaincabbage_img,
	'Cordyline indivisa (Mountain Cabbage Tree) It forms a stout tree up to 8 m tall, with a trunk from 40 to 80 cm in diameter. The stem is usually unbranched or has very few branches. The leaves are 1 to 2 metres long, and from 10-15cm wide, a blue-green and are shaped like a broadsword.',
	false
);

var viburnum = new Tree(
	6,
	'Viburnum',
	'Hedge',
	'Fast',
	'Shade',
	'Medium',
	'1-2M',
	'Medium',
	74.99,
	viburnum_img,
	'Viburnum davidii is an evergreen species from China with blue fruit. Viburnum dentatum has flat-topped flowers, bluish fruit, and reddish leaves in autumn. It is somewhat salt-tolerant. The cultivar (Blue Muffin) is more compact than the species and has fruit that are a deeper blue than the species.',
	false
);

var cypress = new Tree(
	7,
	'Cypress',
	'Hedge',
	'Fast',
	'Sunny',
	'Medium',
	'Over 5M',
	'Fast',
	49.99,
	cypress_img,
	'Cypress trees are often 25 metres (80 feet) tall and are pyramidal in shape, especially when young. Some species develop flattened, spreading heads at maturity, and others are shrubs less than 6 metres tall.',
	false
);

var blueSpruce = new Tree(
	8,
	'Blue Spruce',
	'Evergreen',
	'Fast',
	'Sunny',
	'High',
	'2-5M',
	'Slow',
	180.99,
	bluespruce_img,
	'In the wild, Picea pungens grows to about 23 m (75 ft), but when planted in parks and gardens it seldom exceeds 15 m (49 ft) tall by 5 m (16 ft) wide. It is a columnar or conical evergreen conifer with densely growing horizontal branches. ... The blue spruce is the State Tree of Colorado.',
	false
);

var lemon = new Tree(
	9,
	'Lemon',
	'Fruit tree',
	'Medium',
	'Medium',
	'Low',
	'1-2M',
	'Medium',
	24.99,
	lemon_img,
	'Lemon, Citrus limon, is a small evergreen tree in the family Rutaceae grown for its edible fruit which, among other things, are used in a variety of foods and drinks. The tree has a spreading, upright growth habit, few large branches and stiff thorns.',
	false
);

var cherryBlossom = new Tree(
	10,
	'Cherry Blossom',
	'Flower tree',
	'Slow',
	'Sunny',
	'High',
	'2-5M',
	'Slow',
	74.99,
	cherryblossom_img,
	'Known as "sakura" in Japanese, these pale blooms are a symbol of more than just spring — they stand for renewal and hope. According to the National Cherry Blossom Festival in D.C., the flower is a symbol for the friendship between Japan and the U.S. 5 U.S. cherry blossom trees date back to 1912.',
	false
);

var TreeList = [ apple, blueberry, rose, rimu, mountainCabbage, viburnum, cypress, blueSpruce, lemon, cherryBlossom ];

export { TreeList };
