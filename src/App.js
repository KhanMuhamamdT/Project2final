import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Headernav from './components/Headernav'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
render() {
  return (
   <div>
     <Header />
     <Headernav />
      <Footer />
      </div>
    );
  }
}
export default App;
