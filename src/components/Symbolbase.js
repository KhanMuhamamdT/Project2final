import React, { Component } from 'react';
import { equal } from 'assert';
import './App.css';
let dropdown = {
   position: 'relative',
   display: 'inline-block',
}
class Symbolbase extends React.Component {
   constructor(props) {
      super(props) 
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
         res: [],
         rates: {}
       }
     }
   handleChange(event) {
      this.setState({value: event.target.value });
         }
    handleChange2(event) {
      this.setState({value2: event.target.value });
    }
    handleSubmit(event) {
      if (this.state.value == undefined){
         this.state.value ='USD'
      }
      if (this.state.value2 == undefined){
        this.state.value2 ='CHF'
     }
      event.preventDefault();
      this.fetchrates()
    }
    fetchrates = () => {
      fetch('https://api.ratesapi.io/api/latest?base='+this.state.value+'&symbols='+this.state.value2)
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
          <div style={dropdown} className="dropdown" className="App">
            <div>
               <form onSubmit={this.handleSubmit}>
                  <div class='lbltext'>
                     <label>Select Base Currency</label>
                   </div>
                  <select   
                   class="form-control" id="exampleFormControlSelect1"
                    value={this.state.value} onChange={this.handleChange}>
                       {
                        Object.keys(this.props.rates).map((symb, index)=>(
                         <option  key={index}>{symb}</option>
                      ))
                       }
                    </select>
                      <div class='lbltext'>
                        <label>Select Conversion Currency</label>
                        </div> 
                     <select 
                        class="form-control" id="exampleFormControlSelect1"
                        value={this.state.value2} onChange={this.handleChange2}>
                        {
                          Object.keys(this.props.rates).map((symb, index)=>(
                          <option key={index}>{symb}</option>
                          ))
                        }
                      </select>
                      <button type ="submit" class="btn btn-primary" value="Submit">Submit</button>
                  </form>
              </div>
                  <div class="divdetail">
                      {
                      this.state.res.base ? <div>Base Currency :{this.state.res.base} </div>: ""
                       }
                      {
                      this.state.res.date? <div>Base Currency Date:{this.state.res.date}</div>: ""
                       }
                      {
                      Object.keys(this.state.rates).map((s, index) => {
                      return(
                        <div> 
                           <div key={index}>{s}: {this.state.res.rates[s]}</div>
                       </div>
                            ) }) 
                        }
                   </div>
            </div>
       )
    }
 }
 export default Symbolbase;