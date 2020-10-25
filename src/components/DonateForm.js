import React, { Component } from "react";



class DonateForm extends Component {

    state = {
        item: "",
        weight: 0,
        quantity: 1,
        perishable: true,
        non_perishable: false,
        date: null,
        description: "",
        list: [],
    }

    handleIncrement = e => {
        this.setState({ quantity: quantity++ })
    }

    handleDecrement = e => {
        this.setState({ quantity: quantity-- })
    }

    togglePerishable = e => {
        this.setState((prevState) => {
            return {perishable: !prevState.perishable}
        } )
        const perish = document.getElementById('perishable')
        perishable ? perish.style.backgroundColor = "#F09826" : perish.style.backgroundColor = "#FFFFFF"
        
    }

    toggleNonPerishable = e => {
        this.setState((prevState) => {
            return {non_perishable: !prevState.non_perishable}
        } )
        const non_perish = document.getElementById('non_perishable')
        non_perishable ? non_perish.style.backgroundColor = "#FFFFFF" : non_perish.style.backgroundColor = "#F09826"

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleList = e => {
        const newItem = {

        }
        this.setState({ quantity: quantity++ })
        this.state.list.push(newItem)
    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {

        }
   
        this.setState({
        
            
        })
    };


    render() {
       
        return (
            <div>
                
                <div id="DonationHeader">Donation</div>
            <div>   
       
                <form onSubmit={this.handleSubmit}>
                       
                    <div>              
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.item}
                            placeholder="Item Name"                      
                        />
                    </div> 
            
                    <div>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.weight}
                            placeholder="Weight"                      
                        />
                    </div> 

                    <div id="quantity">
                        <label for="qty">Select Quantity</label>
                        <input type="number" name="qty" value="1" />
                        <div >
                            <button class="button-up" onClick={this.handleIncrement}>+</button>
                            <button class="button-dn" onClick={this.handleDecrement}>-</button>
                        </div>

                    </div>

              
                    <div id="PerishableStatus">
                        <div id='perishable' onClick={this.togglePerishable}>Perishable</div>
                        <div id='non_perishable' onClick={this.toggleNonPerishable}>Non-perishable</div>
                    </div>

                    {perishable ? 
                        <div id="date">
                            <input type='date'></input>
                        </div>
                    : 
                        <div></div>
                    
                    }
                    

                    <div>
                        <textarea
                        onChange={this.handleChange}
                        value={this.state.description}
                        placeholder="Additional Notes"
                        rows="4"
                        />
                    </div>



                  <div>
                    <button onClick={this.handleList}>Save to List</button>
                  </div>
          
                  <div>
                      {/* maybe better, a route with state.list passed as props */}
                    <button type="submit">Complete Donation</button>
                  </div>
            </form>
          </div>
        </div>
  
    );
  }

}



export default Donations;