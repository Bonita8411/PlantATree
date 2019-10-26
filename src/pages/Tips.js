import React from 'react';
import acer from './images/acer.jpg';
import nara from './images/nara.jpg';
import './css/tips.css';

/**
 * Tip File contains Tips about how to grow trees according to their criteria.
 * This page has not been taken care of as to the team has found too many problem on 
 * to the other more important user stories.
 * 
 * The team only managed to return certain trees with description.
 * 
 * The page is supposedly using css for style. 
 * Bootstrap could have been implemented if we had time.
 * 
 * 
 */

const Tips = () => {
        return(
        <div className="main-wrapper">
            <div className="main-featured">
                <div className="sub1">
                    <table>
                        <tr>
                    <td><img src={acer} height="250px" width="300px"/></td>
                    <td>
                        <h2>Evergreen Trees</h2>
                        <strong>Description:</strong>
                        <p>In botany, an evergreen is a plant that has leaves throughout the year that are always green. This is true even if the plant retains its foliage only in warm climates, and contrasts with deciduous plants, which completely lose their foliage during the winter or dry season.</p>
                    </td>
                    </tr>
                    </table> 
                </div>
                <div className="sub2">
                    <table>
                        <tr>
                    <td><img src={nara} height="250px" width="300px"/>
                    </td>
                    <td>
                        <h2>Nara Tree</h2>
                        <strong>Description:</strong>
                    <p>It is very easily propagated from seed or large stem cuttings, but suffers from disease problems. For large scale production of seedlings, seeds are usually collected during months of July and are planted in plant nurseries.<br/>
Knowing the Narra’s uses and beauty, we would now appreciate why it was chosen to be our national tree. It is not just a majestic and straight tree, but also a medicinal plant, an important shade tree, and ecologically important as a nitrogen fixer for soils and habitat for birds, insects and small tree climbing mammals.</p>
</td></tr></table>
                </div>
                
            </div>
        </div>
        )
    }

export default Tips;
