import React from 'react';
import { inCart } from '../Component/Cart/InCart';
import { Link } from 'react-router-dom';
import './css/paypal.css'; 
// this class is for paypal page 
const Paypal = () => {
    return(
        <div>
                    <h1>ALREADY HAVE A PAYPAL ACCOUNT?!</h1>
                <div className="container">
                    {/*allow user to input their email, also when customer hover over the box it say please fill this field*/} 
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required="Please fill this field."></input>
                </div>
                <div className="container">
               {/*allow user to input their password, also when customer hover over the box it say please fill this field*/} 
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="text" placeholder="Enter password" name="password" required="Please fill this field."></input>
                    {/* all the cart are clare after they click submit*/} 
                </div><Link to="/" onClick={()=>inCart.resetCart()}>
                <button type="submit">Login</button></Link>
        </div>
    )
}

export default Paypal;