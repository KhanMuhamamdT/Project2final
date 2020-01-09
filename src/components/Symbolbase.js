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
      this.state = {value : 'CHF' , value2 : 'ABC'}
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
         this.state.value ='CHF'
      }
      event.preventDefault();
      this.fetchrates()
    }
      fetchrates = () => {
      console.log('Fetch Ratessssssssss')
     
     console.log(this.state.value2)
     console.log(this.state.value)
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
        console.log ('Symbol ....',this.props)
        console.log ('end of symbol  ....')
       return (
          
         <div style={dropdown} className="dropdown">
            <form onSubmit={this.handleSubmit}>
                <select  className="selectvaluefirst" value={this.state.value} onChange={this.handleChange}>
                        {
                      Object.keys(this.props.rates).map((symb, index)=>(
                     <option key={index}>{symb}</option>
                      ))
                     }
                     </select>


                     <select value={this.state.value2} onChange={this.handleChange2}>
                        {
                      Object.keys(this.props.rates).map((symb, index)=>(
                     <option key={index}>{symb}</option>
                      ))
                     }
                     </select>
                      <button type ="submit" class="btn btn-primary" value="Submit">Submit</button>
                      </form>
                  <div class="divdetail">
                      {this.state.res.base ? <div>Base Currency :{this.state.res.base} </div>: "" }
                      {/* <div> Base Currency :  {this.state.res.base} </div> */}
                       {/* <div> Base Currency Date :  {this.state.res.date} </div>  */}
                        {this.state.res.date? <div>Base Currency Date:{this.state.res.date}</div>: "" }
                      {Object.keys(this.state.rates).map((s, index) => {
                      return(
                      <div> 
                    <div key={index}>{s}: {this.state.res.rates[s]}</div>
                   </div>
          
                       )   
                    }) }
            </div>
          </div>
       )
    }
 }
 export default Symbolbase;