import React, { Component }  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
      } 
  from "react-router-dom";

import Latest from './Latest'
import Symbol  from './Symbol'
import Symbolbase  from './Symbolbase'
import Footer  from './Footer'
import './App.css';
class Headernav extends Component {
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
    return (
      <Router>
        <div className="Content">
          <ul>
              <button type="button" class="btn btn-light">
              <Link className='colorlink' exact to="/">Latest Stock Report</Link>
              </button>
              <button type="button" class="btn btn-light">
              <Link className='colorlink' to="/Symbol">Latest Stock Search with Base</Link> 
              </button>
              <button type="button" class="btn btn-light">
              <Link className='colorlink' to="/Symbolbase">Stock Search with Base and  Currency</Link>
            </button>
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