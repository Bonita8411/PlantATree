import React, { Component } from 'react';
import './css/Product.css';
import { TreeList } from '../Component/Tree.js';

class product extends Component {
	constructor(selected) {
		super();
		this.state = {
			selected      : selected
		};
    }

    render(){
        return(
            <div>
                {this.state.selected}  
            </div>  
        );        
    }
}
var check =new product(0);


const Product = () => {
    return(
        //Create Filter 
        <div id="main" className="container h-100">
            <div id="p_cont17">
                <div id="cont14">  
                    <br/>
                    <h1>Filters</h1>   
                    <br/><br/><br/>                  
                    <h3>
                        Tree Type:<br/><br/>   
                        <select id="cont13" name="select">
                            <option value="1" selected>Any</option>"
                            <option value="2">Hedge</option>"
                            <option value="3">Evergreen</option>"
                            <option value="4">NZ native</option>"
                            <option value="5">Fruit tree</option>"
                            <option value="6">Flower tree</option>"
                        </select>
                    </h3><br/><br/>
                    <h3>
                        Soil Drainage:
                        <br/><br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Any</option>"
                            <option value="2">Slow</option>"
                            <option value="3">Medium</option>"
                            <option value="4">Fast</option>"
                        </select>                                                                      
                    </h3><br/><br/>
                    <h3>
                        Sun:
                        <br/><br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Any</option>"
                            <option value="2">Shade</option>"
                            <option value="3">Medium</option>"
                            <option value="4">Sunny</option>"
                        </select>                                                                          
                    </h3><br/><br/>
                    <h3>
                        Maintenance:
                        <br/><br/> 
                        <select id="cont13" name="select">
                            <option value="1" selected>Any</option>"
                            <option value="2">AnyEasy</option>"
                            <option value="3">Medium</option>"
                            <option value="4">Hard</option>"
                        </select>
                    </h3><br/><br/>
                    <h3>
                        Max Height
                        <br/><br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Any</option>"
                            <option value="2">Under 1m</option>"
                            <option value="3">1 - 2M</option>"
                            <option value="4">2 - 3M</option>"
                            <option value="5">Over 3M</option>"
                        </select>
                    </h3>
                    <br/><br/>
                    <h3>
                        Growth Rate:
                        <br/><br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Any</option>"
                            <option value="2">Slow</option>"
                            <option value="3">Medium</option>"
                            <option value="4">Fast</option>"
                        </select>                                               
                    </h3>
                    <br/><br/>
                    <h3>
                        Price Range 
                        <br/>
                        <br/>
                        <select id="cont13" name="select">
                            <option value="1" selected>Any</option>"
                            <option value="2">$10-25</option>"
                            <option value="3">$25-50</option>"
                            <option value="4">$50-75</option>"
                            <option value="5">Over $75</option>"
                        </select>
                    </h3>
                    <br/><br/><br/>
                    <input id="cont13" type="button" value="Apply"></input>
                    <br/><br/>
                </div>
            </div>    
            <div id="cont3">
                <div id="cont2">                      
                    <a id="0" onClick={check.state.selected =0}href="/item" >
                    <img id ="cont23"src={TreeList[0].state.img} alt="" ></img></a>
                    <h3 id="cont20">{TreeList[0].state.name}</h3>                          
                </div>
                <div id="cont2">
                    <a id="1" onClick={check.state.selected =0}href="/item" >
                    <img id ="cont23" src={TreeList[1].state.img} alt=""></img></a> 
                    <h3 id="cont20">{TreeList[1].state.name}</h3>   
                </div>
                <div id="cont2">
                    <a id="1" onClick={check.state.selected =0}href="/item" >
                    <img id ="cont23" src={TreeList[2].state.img} alt=""></img></a>
                    <h3 id="cont20">{TreeList[2].state.name}</h3>   
                </div>
                <div id="cont2">
                    <a id="1" onClick='check.state.selected =1' href="/item" >
                    <img id ="cont23" src={TreeList[3].state.img} alt="" ></img></a>
                    <h3 id="cont20">{TreeList[3].state.name}</h3>   
                </div>
                <div id="cont2">
                    <a id="1" onClick={check.state.selected =2}href="/item" >
                    <img id ="cont23" src={TreeList[4].state.img} alt=""></img></a>
                    <h3 id="cont20">{TreeList[4].state.name}</h3>   
                </div>
                <div id="cont2">
                    <a id="1" onClick={check.state.selected =3}href="/item" >
                    <img id ="cont23" src={TreeList[5].state.img} alt=""></img></a>
                    <h3 id="cont20">{TreeList[5].state.name}</h3>   
                </div>
                <div id="cont2">
                    <a id="1" onClick={check.state.selected =4}href="/item" >
                    <img id ="cont23" src={TreeList[6].state.img} alt="" ></img></a>
                    <h3 id="cont20">{TreeList[6].state.name}</h3>   
                </div>
                <div id="cont2">
                    <a id="1" onClick={check.state.selected =0}href="/item" >
                    <img id ="cont23" src={TreeList[7].state.img} alt="" ></img></a> 
                    <h3 id="cont20">{TreeList[7].state.name}</h3>   
                </div>
                <div id="cont2">
                    <a id="1" onClick={check.state.selected =0}href="/item" >
                    <img id ="cont23" src={TreeList[8].state.img} alt=""></img></a>
                    <h3 id="cont20">{TreeList[8].state.name}</h3>   
                </div>
                <div id="cont2">
                    <a id="1" onClick={check.state.selected =0}href="/item" >
                    <img id ="cont23" src={TreeList[9].state.img} alt=""></img></a>
                    <h3 id="cont20">{TreeList[9].state.name}</h3>   
                </div>
            </div>
        </div>
        //list Tree List     
    )
}
export { check };
export default Product;
