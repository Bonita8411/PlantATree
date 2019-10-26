import React from 'react';
import tree1 from './images/tree1.jpg';
import ad3 from './images/ad3.JPG';
import './css/tips.css';

/**
 * Advertisement page which suppose to display Company advertisements
 * such as sales or new arrivals.
 * 
 * The page uses css file for the  styles.
 * Bootstrap could have been integrated if the team had time.
 */

const Advertisement = () => {
        return(
        <div className="main-wrapper">
            <div className="main-featured">
                <div className="sub1">
                    <h2>Advertisement</h2>
                    <img src={tree1} height="300px" width="900px"/> 
                </div>
                <div className="sub3">
                    <h2>Advertisement</h2>
                    <img src={ad3} height="300px" width="900px"/> 
                </div>
            </div>
        </div>
        )
    }

export default Advertisement;
