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
            item: this.state.item,
            weight: this.state.weight,
            quantity: this.state.quantity,
            perishable: this.state.perishable,
            non_perishable: this.state.non_perishable,
            date: this.state.date,
            description: this.state.description,
        }
       
        this.state.list.push(newItem)
    }

    handleSubmit = e => {
        e.preventDefault();

        const data = this.state.list
   
        // reset forms
        this.setState({
            item: "",
            weight: 0,
            quantity: 1,
            perishable: true,
            non_perishable: false,
            date: null,
            description: "",
            list: [],
            
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
                  
                  <hr/>
                  <div>
                      {this.state.list.map(l => 
                        <div key={l.id}>
                            <p>{l.item}  {l.weight}</p>
                            <p>{l.date}</p> 
                        </div>
                        )
                      }
                  </div>
                  <hr/> 

          
                  <div>
                    <button type="submit">Complete Donation</button>
                  </div>
            </form>
          </div>
        </div>
  
    );
  }

}



export default Donations;