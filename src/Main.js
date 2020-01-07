import React from "react";
import { Route, Switch } from "react-router-dom";
//import Lateststock from './Lateststock';

//import stockData from "./stock-data";

function Main(props) {
  console.log("Main flow ", props);
  return (
    <main>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        
       
        
        {/* <Route
          path="/Lstock"
          render={props => <Lstock {...props} stockData={props.stockData} />}
        />
        

        <Route
          path="/Stockdetail/:symbol"
          render={props => <Stockdetail {...props} stockData={props.stockData} />}
        />
         */}
        
        
        {/* <Route path="/Lateststock" component={Lateststock} /> */}
       
        {/* <Route
          path="/stocks"
          render={props => <Dashboard {...props} stockData={props.stockData} />}
        />
      
       */}
      
      </Switch>
    </main>
  );
}

export default Main;
