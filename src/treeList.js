import apple_img from './images/apple.jpg';
import blueberry_img from './images/blueberry.jpg';
import bluespruce_img from './images/bluespruce.jpeg';
import cherryblossom_img from './images/cherryblossom.jpg';
import lemon_img from './images/lemon.jpg';
import mountaincabbage_img from './images/moutaincabbage.jpg';
import rimu_img from './images/rimu.jpg';
import cypress_img from './images/cypress.jpg';
import rose_img from './images/rose.jpg';
import viburnum_img from './images/viburnum.jpg';

// tree objects in treeItems array
export const treeItems = [
	{
		id          : 1,
		name        : 'Apple',
		type        : 'Fruit tree',
		soil        : 'Medium',
		sun         : 'Sunny',
		maintenance : 'Low',
		maxHeight   : 'More than 5M',
		growthRate  : 'Fast',
		priceRange  : '$25-50',
		price       : 49.99,
		isAdded     : false,
		img         : apple_img,
		description :
			'An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apple trees are large if grown from seed.'
	},
	{
		id          : 2,
		name        : 'Blueberry',
		type        : 'Fruit tree',
		soil        : 'Fast',
		sun         : 'Medium',
		maintenance : 'Medium',
		maxHeight   : '1-2M',
		growthRate  : 'Slow',
		priceRange  : '$50-75',
		price       : 74.99,
		isAdded     : false,
		img         : blueberry_img,
		description :
			'Blueberry is a crown forming, woody, perennial shrub in the family Ericaceae grown for its fruits, or berries, of the same name. The blueberry plant possesses oval or elliptical leaves which grow alternately on the stems. The stems, or twigs, are yellow/green in color and turn reddish in winter.'
	},
	{
		id          : 3,
		name        : 'Rose',
		type        : 'Flower tree',
		soil        : 'Medium',
		sun         : 'Sunny',
		maintenance : 'High',
		maxHeight   : 'Under 1M',
		growthRate  : 'Medium',
		priceRange  : '$25-50',
		price       : 49.99,
		isAdded     : false,
		img         : rose_img,
		description :
			'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.'
	},
	{
		id          : 4,
		name        : 'Rimu',
		type        : 'NZ native',
		soil        : 'Fast',
		sun         : 'Medium',
		maintenance : 'Medium',
		maxHeight   : 'More than 5M',
		growthRate  : 'Low',
		priceRange  : 'Over $75',
		price       : 200.99,
		isAdded     : false,
		img         : rimu_img,
		description :
			'Description. Rimu is a slow-growing tree, eventually attaining a height of up to 50 m, although most surviving large trees are 20 to 35 m tall. It typically appears as an emergent from mixed broadleaf temperate rainforest, although there are almost pure stands (especially on the west coast of the South Island).'
	},
	{
		id          : 5,
		name        : 'Mountain cabbage',
		type        : 'NZ native',
		soil        : 'Medium',
		sun         : 'Shade',
		maintenance : 'Medium',
		maxHeight   : 'Under 1m',
		growthRate  : 'Fast',
		priceRange  : '$10-25',
		price       : 24.99,
		isAdded     : false,
		img         : mountaincabbage_img,
		description :
			'Cordyline indivisa (Mountain Cabbage Tree) It forms a stout tree up to 8 m tall, with a trunk from 40 to 80 cm in diameter. The stem is usually unbranched or has very few branches. The leaves are 1 to 2 metres long, and from 10-15cm wide, a blue-green and are shaped like a broadsword.'
	},
	{
		id          : 6,
		name        : 'Viburnum',
		type        : 'Hedge',
		soil        : 'Fast',
		sun         : 'Shade',
		maintenance : 'Medium',
		maxHeight   : '1-2M',
		growthRate  : 'Medium',
		priceRange  : '$50-75',
		price       : 74.99,
		isAdded     : false,
		img         : viburnum_img,
		description :
			'Viburnum davidii is an evergreen species from China with blue fruit. Viburnum dentatum has flat-topped flowers, bluish fruit, and reddish leaves in autumn. It is somewhat salt-tolerant. The cultivar (Blue Muffin) is more compact than the species and has fruit that are a deeper blue than the species.'
	},
	{
		id          : 7,
		name        : 'Cypress',
		type        : 'Hedge',
		soil        : 'Fast',
		sun         : 'Sunny',
		maintenance : 'Medium',
		maxHeight   : 'More than 5M',
		growthRate  : 'Fast',
		priceRange  : '$25-50',
		price       : 49.99,
		isAdded     : false,
		img         : cypress_img,
		description :
			'Cypress trees are often 25 metres (80 feet) tall and are pyramidal in shape, especially when young. Some species develop flattened, spreading heads at maturity, and others are shrubs less than 6 metres tall.'
	},
	{
		id          : 8,
		name        : 'Blue spruce',
		type        : 'Evergreen',
		soil        : 'Fast',
		sun         : 'Sunny',
		maintenance : 'High',
		maxHeight   : '2-5M',
		growthRate  : 'Slow',
		priceRange  : 'Over $75',
		price       : 180.99,
		isAdded     : false,
		img         : bluespruce_img,
		description :
			'In the wild, Picea pungens grows to about 23 m (75 ft), but when planted in parks and gardens it seldom exceeds 15 m (49 ft) tall by 5 m (16 ft) wide. It is a columnar or conical evergreen conifer with densely growing horizontal branches. ... The blue spruce is the State Tree of Colorado.'
	},
	{
		id          : 9,
		name        : 'Lemon',
		type        : 'Fruit tree',
		soil        : 'Medium',
		sun         : 'Medium',
		maintenance : 'Low',
		maxHeight   : '1-2M',
		growthRate  : 'Medium',
		priceRange  : '$10-25',
		price       : 24.99,
		isAdded     : false,
		img         : lemon_img,
		description :
			'Lemon, Citrus limon, is a small evergreen tree in the family Rutaceae grown for its edible fruit which, among other things, are used in a variety of foods and drinks. The tree has a spreading, upright growth habit, few large branches and stiff thorns.'
	},
	{
		id          : 10,
		name        : 'Cherry blossom',
		type        : 'Flower',
		soil        : 'Slow',
		sun         : 'Sunny',
		maintenance : 'High',
		maxHeight   : '2-5M',
		growthRate  : 'Slow',
		priceRange  : '$50-75',
		price       : 74.99,
		isAdded     : false,
		img         : cherryblossom_img,
		description :
			'Known as "sakura" in Japanese, these pale blooms are a symbol of more than just spring — they stand for renewal and hope. According to the National Cherry Blossom Festival in D.C., the flower is a symbol for the friendship between Japan and the U.S. 5 U.S. cherry blossom trees date back to 1912.'
	}
];

export const treeDetail = {
	id          : 1,
	name        : 'Apple',
	type        : 'Fruit tree',
	soil        : 'Medium',
	sun         : 'Sunny',
	maintenance : 'Low',
	maxHeight   : 'More than 5M',
	growthRate  : 'Fast',
	priceRange  : '$25-50',
	price       : 49.99,
	isAdded     : false,
	img         : apple_img,
	description :
		'An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apple trees are large if grown from seed.'
};
