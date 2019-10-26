import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Special, Stores, Register, logIn, Paypal } from './pages';
import CartComp from './Component/Cart/CartComp';
import { filteredTrees } from './Component/Filtered';
import RitemList from './Component/RitemList';
import ItemDetail from './Component/ItemDetail';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="pageIndex">
					<div id="AppCont3">
						<h1 className="py-2 pl-2" id="AppCont4">
							<Link to="/" className="text-white text-decoration-none">
								PlantATree
							</Link>
						</h1>
						<Link id="AppCont5" to="/Register">
							Register
						</Link>
						{/* <h4 id="AppCont5"> / </h4> */}
						{/* <Link id="AppCont5" to="/logIn">
							log In
						</Link> */}
					</div>

					<nav className="wrapper1">
						<div id="AppCont2">
							<ul id="AppCont6">
								<li id="AppCont1">
									<Link to="/">Home</Link>
								</li>
								<li id="AppCont1">
									<Link to="/product" onClick={()=> filteredTrees.reset()}>Product</Link>
								</li>
								<li id="AppCont1">
									<Link to="/special">Special</Link>
								</li>
								<li id="AppCont1">
									<Link to="/stores">Stores</Link>
								</li>
								<li id="AppCont1">
									<Link to="/cart">My Cart</Link>
								</li>
							</ul>
						</div>
					</nav>

					<Route exact path="/" component={Home} />
					<Route path="/product" component={RitemList} />
					<Route path="/special" component={Special} />
					<Route path="/stores" component={Stores} />
					<Route path="/register" component={Register} />
					<Route path="/logIn" component={logIn} />
					<Route path="/cart" component={CartComp} />
					<Route path="/item" component={ItemDetail} />
					<Route path="/paypal" component={Paypal} />
					<Route path="/ritemdetail" component={ItemDetail} />
					<div className="w-100 mt-5" />
					<footer className="footer-copyright text-center footer-green py-3 botton-0 letter-spacing-5">
						<div>
							<a href="/">TreeCo</a>
							<span>&copy; 2019 PlantATree.</span>
						</div>
						<div className="ml-auto">
							| <span>Powered by</span> TreeCo | Copyright: Rachel Lee, YoonKun Lee, John Norvie Rosario,
							Bonita Ryda |
						</div>
					</footer>
				</div>
			</Router>
		);
	}
}

export default App;
