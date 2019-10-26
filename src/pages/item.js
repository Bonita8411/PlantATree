import React from 'react';
import './css/Product.css';
import { TreeList } from '../Component/Tree.js';
import { check } from '../pages/Product.js';
import { Description_List } from '../Component/Description.js'

const item = () => {
    return(
        //Create iteam page that show selected Tree description and details 
        <div id="main">
            <div id="p_cont15">
                <h1 >{TreeList[check.state.selected].state.name}</h1>
            </div>
                    
            <div id="cont5">
                <img id="cont24" src={TreeList[check.state.selected].state.img} alt=""></img>  
                <h2 id="p_cont18">
                    Description: 
                    <h3 id="cont6">
                        {Description_List[check.state.selected].state.Description}
                    </h3>                
                    <div id="cont19">                       
                        <div id="cont8">
                            <h3> Tree Type: {TreeList[check.state.selected].state.type}</h3><br/>
                            <h3>Tree Height: {TreeList[check.state.selected].state.height}</h3><br/>      
                            <h3>Maintain: {TreeList[check.state.selected].state.maintain}</h3><br/>     
                            <h3>Soil: {TreeList[check.state.selected].state.soil}</h3><br/> 
                            <h3>Sun: {TreeList[check.state.selected].state.sun}</h3><br/>                                                 
                        </div>                 
                        <div id="cont10">
                            <h1>Total Price: $ {TreeList[check.state.selected].state.Price}</h1>
                            <button> Add to Cart </button>
                        </div> 
                    </div>  
                </h2>    
            </div>                            
        </div>
    )
}
export default item;