import React from 'react';
import './css/pickup&deliveryOpt.css'; 
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import PickupDeliveryOpt from './pickup&deliveryOpt';
{/* this class is for delivery option page that link from pickup and delivery page */} 
const Delivery = () => {
        return (
            <div>
                <br/>
                <div className="mymodal" id ="modal" >
                    <div className="delivery-content">
                        <div className="title">
                            <center><h2>Delivery Pricing</h2></center>
                        </div>

                        <div className="info">
                            <center><h3>Urban Area</h3></center>
                            <center><p>$10 for less than 10 products <br/></p></center>
                            <center><p>Free shippping more than 10 products <br/></p></center>
                        </div>

                        <div className="info">
                            <center><h3>Rural Area</h3></center>
                            <center><p>$10 for less than 10 products <br/></p></center>
                            <center><p>Free shippping more than 10 products <br/></p></center>
                        </div>

                        <div className="info">
                            <center><h3>Outside Auckland</h3></center>
                            <center><p>$22 for less than 10 products <br/></p></center>
                            <center><p>Free shippping more than 10 products <br/></p></center>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

 
export default Delivery;