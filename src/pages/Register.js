import React from 'react';
import './css/register.css';

const Register = () => {
    return(
        //Create Register page
        //Only create buttons and input text. Not enough time to complete function part 
        <div id="main">
            <h1>Create a TreeCo account</h1><br/>
            <div id="cont15">
                <h2>USER DETAIL</h2><br/><br/>
                <h4>Email Address</h4>
                <input id="cont16" type="email" name="email" value="example@example.com"></input><br/><br/>
                <h4>Password </h4>
                <input id="cont16" type="text" name="text" value="Password"></input><br/><br/>
                <h4>Confirm Password</h4> 
                <input id="cont16" type="text" name="text"></input><br/><br/><br/>
                <h2>Contact Detail</h2><br/><br/>
                <h4>First Name</h4> 
                <input id="cont16" type="text" name="text"></input><br/><br/>
                <h4>Last Name</h4> 
                <input id="cont16" type="text" name="text"></input><br/><br/>
                <h4>Mobile</h4> 
                <input id="cont16" type="text" name="text"></input><br/><br/>
                <h4>Address</h4> 
                <input id="cont16" type="text" name="text"></input><br/><br/>
                <h4>Post Code</h4> 
                <input id="cont16" type="text" name="text"></input><br/><br/><br/>
                <button id="cont17">Register</button>
            </div>                   
        </div>
    )
}
export default Register;