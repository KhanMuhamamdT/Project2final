
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      res: [],
      rates: {}
    }
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.fetchrates()
  }
  fetchrates = () => {
    console.log('click')
    fetch('https://api.ratesapi.io/api/latest')
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
      console.log('State ' , typeof(this.state.rates), this.state.rates["AUD"])
      
    return (
       
      <div className="App">
        <div> Base Currency :  {this.state.res.base} </div>
        <div> Base Currency Date :  {this.state.res.date} </div>
       
        {Object.keys(this.state.rates).map((s, index) => {
          return(
           <div className="divdetail">
            <div key={index}>{s}: {this.state.res.rates[s]}</div>
          </div>
          
            )
        }) }
      </div>
         )
  }
}
export default App;    