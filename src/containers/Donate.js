import React, { Component } from "react";
import DonateForm from '../components/DonateForm'



class Donations extends Component {

  render() {
       
        return (
            <div>
                {/* cont to hold barcode, picture and text input, or directly import and add as divs inline-block */}
                <DonateForm />
            </div>
  
    );
  }

}


export default Donations;