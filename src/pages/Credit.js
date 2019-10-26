import React from 'react';
// This class contain the display of credit card that allow user to input their card number, name , date and security code
const Credit = () => {
    return(
        <div>
            <div>
                <h3>Credit Card Payment</h3><br/>
            </div>
            <div className="Container">
                <label for = "cardnumber">Card Number</label>
                <input type="text" placeholder="Enter card number" name="cardnumber" required><br/><br/></input>
              </div>

            <div className="Container">
                  <label for = "cardname">Name on card</label>
                 <input type="text"  name="cardname" required><br/><br/></input>
             </div>

                <div className="Container">
                    <label for = "expDate">Expriation Date</label>
                    <input type="text"  name="expDate" placeholder=" MM/YY " required></input>
                </div>

                <div className="Container">
                    <label for = "secCode">Expriation Date</label>
                <div class="tooltip">?
                        <span class="tooltiptext">3 digit security code</span>
                </div>

                            <div>
                            <input type="text" name="secCode" required> <br/><br/></input>
                            <button type="button">Complete Order</button>
                            </div> 
                </div>            
        </div>
    )
}

export default Credit;