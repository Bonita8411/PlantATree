import React, { Component } from 'react';

class Description extends Component {
	constructor(Description) {
		super();
		this.state = {
			Description       : Description
		};
	}

	render() {
		return (
			<div>
				<h3>{this.state.Description}</h3>
			</div>
		);
	}
}

var apple = new Description('An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apple trees are large if grown from seed');

var blueberry = new Description('Blueberry is a crown forming, woody, perennial shrub in the family Ericaceae grown for its fruits, or berries, of the same name. The blueberry plant possesses oval or elliptical leaves which grow alternately on the stems. The stems, or twigs, are yellow/green in color and turn reddish in winter.');

var rose = new Description('A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.');

var rimu = new Description('Description. Rimu is a slow-growing tree, eventually attaining a height of up to 50 m, although most surviving large trees are 20 to 35 m tall. It typically appears as an emergent from mixed broadleaf temperate rainforest, although there are almost pure stands (especially on the west coast of the South Island).');

var mountainCabbage = new Description('Cordyline indivisa (Mountain Cabbage Tree) It forms a stout tree up to 8 m tall, with a trunk from 40 to 80 cm in diameter. The stem is usually unbranched or has very few branches. The leaves are 1 to 2 metres long, and from 10-15cm wide, a blue-green and are shaped like a broadsword');

var viburnum = new Description('Viburnum davidii is an evergreen species from China with blue fruit. Viburnum dentatum has flat-topped flowers, bluish fruit, and reddish leaves in autumn. It is somewhat salt-tolerant. The cultivar (Blue Muffin) is more compact than the species and has fruit that are a deeper blue than the species.');

var cypress = new Description('Cypress trees are often 25 metres (80 feet) tall and are pyramidal in shape, especially when young. Some species develop flattened, spreading heads at maturity, and others are shrubs less than 6 metres tall.');

var blueSpruce = new Description('In the wild, Picea pungens grows to about 23 m (75 ft), but when planted in parks and gardens it seldom exceeds 15 m (49 ft) tall by 5 m (16 ft) wide. It is a columnar or conical evergreen conifer with densely growing horizontal branches. ... The blue spruce is the State Tree of Colorado.');

var lemon = new Description('Lemon, Citrus limon, is a small evergreen tree in the family Rutaceae grown for its edible fruit which, among other things, are used in a variety of foods and drinks. The tree has a spreading, upright growth habit, few large branches and stiff thorns.');

var cherryBlossom = new Description('Known as "sakura" in Japanese, these pale blooms are a symbol of more than just spring — they stand for renewal and hope. According to the National Cherry Blossom Festival in D.C., the flower is a symbol for the friendship between Japan and the U.S. 5 U.S. cherry blossom trees date back to 1912');

var Description_List = [ apple, blueberry, rose, rimu, mountainCabbage, viburnum, cypress, blueSpruce, lemon, cherryBlossom ];

export { Description_List };