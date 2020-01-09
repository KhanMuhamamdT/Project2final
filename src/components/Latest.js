
import React, { Component } from 'react';
import './App.css';
import Footer from './Footer'
class App extends Component {
  constructor() {
    super()
      this.state = {
      res: [],
      rates: {}
    }
  }

  componentDidMount() {
    this.fetchrates()
  }
  fetchrates = () => {
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
    return (
      <div>
            <div class="divdetail"> Base Currency :  {this.state.res.base} </div>
            <div class="divdetail"> Base Currency Date :  {this.state.res.date} </div>
            <br/>
            <div class="divdetail"> Currencies with Exchange Rates</div>
        <div>
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
export default App;    