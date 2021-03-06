import React, { Component } from 'react';
import { equal } from 'assert';
import './App.css';
let dropdown = {
   position: 'relative',
   display: 'inline-block',
}
class Symbol extends React.Component {
   constructor(props) {
      super(props) 
      this.state = {value : 'CHF'}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
         res: [],
         rates: {}
       }
     }
   handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      if (this.state.value == undefined){
         this.state.value ='CHF'
      }
      event.preventDefault();
      this.fetchrates()
    }
  
   fetchrates = () => {
        fetch('https://api.ratesapi.io/api/latest?base='+this.state.value)
        .then(res => res.json())
        .then(res => {
            this.setState({
            res:res,
            rates: res.rates
             });
        }
        )
        .then(res=> console.log(Object.entries(this.state.res.rates)))
    };
   render() {
   return (
      <div style={dropdown} class="App">
         <div>
            <form onSubmit={this.handleSubmit}>
               <div>
                     <div class='lbltext'>
                         <label>Select Base Currency</label>
                     </div>
                  <select  
                        class="form-control" id="exampleFormControlSelect1"
                        value={this.state.value} onChange={this.handleChange}>
                         {
                            Object.keys(this.props.rates).map((symb, index)=>(
                           <option key={index}>{symb}</option>
                            ))
                         }
                     </select>
               </div>
                  <button type ="submit" class="btn btn-primary" value="Submit">Submit</button>
               </form>
            </div>
               <div>
                     <div class="divdetail"> 
                        {this.state.res.base ? <div>Base Currency :{this.state.res.base} </div>: "" }
                     </div>
                     <div class="divdetail"> 
                        {this.state.res.date? <div>Base Currency Date:{this.state.res.date}</div>: "" }
                     </div>
                  {
                  this.state.res.date? <div class="divdetail">Currencies with Exchange Rates</div>: "" }
                  {
                  Object.keys(this.state.rates).map((s, index) => {
                    return(
                      <div class="divdetail"> 
                        <span>
                       <div key={index}>{s}: {this.state.res.rates[s]}</div>
                      </span>
                      </div>
                        )})
                    
                  }
                </div>
           
      </div>
       )
    }
 }

 export default Symbol;