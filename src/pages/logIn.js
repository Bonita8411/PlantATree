import React from 'react';
import { inCart } from '../Component/Cart/InCart';
import { Link } from 'react-router-dom';
import './css/login.css'

const logIn = () => {
    return(
        <div>
                <div id="container">
        
        <div className="page_name">
            <h3>SIGN IN</h3>
        </div>
    
        <div id="cont">
            <div id="login_cont">
                <div id="login_detail_h">
                    <h3>SIGN IN DETAIL</h3>
                </div>
                
                <div  id="uname_input_cont">
                    <label htmlFor="uname">Email (or username): <br/></label>
                    <input type="text" placeholder="Enter Username" name="uname" required="Please fill this field."/>

                    <label htmlFor="psw"><br/>Password:<br/></label>
                    <input type="password" placeholder="Enter Password" name="psw" required="Please fill this field."/>
                    
                    <button id="register_btn" class="btn" type="btn" name="btn" href="./Register.js">
                    Register
                    </button>
                    <Link to="/" onClick={()=>inCart.resetCart()}>
                    <button id="login_btn" type="submit" >Login</button></Link>
                </div>
            </div>
        </div>

    </div>
        </div>
    )
}

export default logIn;