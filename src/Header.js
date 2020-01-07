import React, { Component }  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Latest from './Latest'
import Symbol  from './Symbol'

class Header extends Component {
 
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
          <li><Link exact to="/">Latest</Link>  </li>
          <li> <Link to="/Symbol">Symbol</Link> </li>
          <li><Link to="/Base">Base</Link> </li> 
           <li> <Link to="/Base">Basesymbol</Link> </li>
           </ul>
           <Switch>
           <Route exact path="/">
            <Latest />
          </Route>
            <Route  path="/Symbol" >
              <Symbol rates={this.state.rates} />
              </Route>
           </Switch>
      </div>
    </Router>
    
         )
  }
}
export default Header;    