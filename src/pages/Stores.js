import React from 'react';
import './css/stores.css';

/**
 * Store page: One of the main page of the app.
 * Displays responsive view of the three branches/stores of the Company.
 * Used css file and bootstrap for styling.
 */

const Stores = () => {
	return (
		<div>
			<div>
				<h3 className="text-secondary text-uppercase mb-lg-2 pb-3 text-center border-bottom">stores</h3>
			</div>
			<div className="main-wrapper">
				<div className="branch-wrapper">
					<div className="wrapper2">
						<h1>Branches</h1>
					</div>
					<div className="branch1">
						<h3>Mt Eden</h3>
						443 Mount Eden Road, Mount Eden, Auckland
						<br />Contact: Stephen Beck
						<br />Phone: <a href="tel:097894455">09 789 4455</a>
					</div>
					<div className="branch2">
						<h3>East Tamaki</h3>
						29 Kerwyn Ave, Easts Tamaki, Auckland 2013
						<br />Contact: Amy Anderson
						<br />Phone: <a href="tel:097894444">09 789 4444</a>
					</div>
					<div className="branch3">
						<h3>Albany</h3>
						67 Kell Dr, Albany, Auckland 0632
						<br />Contact: Chris Wilson
						<br />Phone: <a href="tel:090781458">09 789 1458</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stores;
