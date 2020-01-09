import React, { Component }  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Latest from './Latest'
import Symbol  from './Symbol'
import Symbolbase  from './Symbolbase'
import './App.css';

class Headernav extends Component {
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
    console.log('MK ' , this.state.res.rates)
    console.log('end Mk')
      return (
  <Router>
      <div>
        <ul>
          <li id ="1"  ><Link exact to="/">Latest Stock Report </Link>  </li>
          <li id ="2"> <Link to="/Symbol">Latest Stock with Base </Link> </li>
          <li id ="3"><Link to="/Symbolbase">Stock Search with Base and  Currency</Link> </li> 
            </ul>
           <Switch>
              <Route exact path="/">
                
                 <Latest />
              </Route>
            <Route  path="/Symbol" >
                <Symbol rates={this.state.rates} />
              </Route>
            <Route  path="/Symbolbase" >
              <Symbolbase rates={this.state.rates} />
              </Route>

           </Switch>
      </div>
    </Router>
    
         )
  }
}
export default Headernav;    