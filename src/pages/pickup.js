import React from 'react';
import './css/pickup&deliveryOpt.css'; 
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import PickupDeliveryOpt from './pickup&deliveryOpt';
// this class is for pickup option it hsow the branch detail
const Pickup = () => {
        return (
            <div>
                <br/>
                <div className="mymodal" id ="modal" >
                    <div className="delivery-content">
                        <div className="title">
                            <center><h2>Pickup Branch</h2></center>
                        </div>

                        <div className="info">
                            <center><h3>Mt Eden</h3></center>
                            <center><p>443 Mount Eden Road, Mount Eden, Auckland <br/></p></center>
                            <center><p>Contact: Stephen Beck<br/></p></center>
                            <center><p>Phone: 09 789 44 55<br/></p></center>
                        </div>

                        <div className="info">
                            <center><h3>East Tamaki</h3></center>
                            <center><p>29 Kerwyn Ave, East Tamaki, Auckland 2013 <br/></p></center>
                            <center><p>Contact: Amy Anderson <br/></p></center>
                            <center><p>Phone: 09 789 44 44 <br/></p></center>
                        </div>
                        <div className="info">
                            <center><h3>Albany</h3></center>
                            <center><p>67 Kell Dr, Albany, Auckland 0632 <br/></p></center>
                            <center><p>Contact: Chris Wilson <br/></p></center>
                            <center><p>Phone: 09 789 14 58 <br/></p></center>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

 
export default Pickup;