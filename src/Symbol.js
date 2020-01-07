import React, { Component } from 'react';

let dropdown = {
   position: 'relative',
   display: 'inline-block',
}

class Symbol extends React.Component {
   constructor(props) {
      super(props) 
   }
   render() {
        console.log ('Symbol ....',this.props)
        console.log ('end of symbol  ....')
       return (
          <div>
             <h1>Symbols...</h1>
            <div style={dropdown} className="dropdown">
               <button>Select</button>
               
               {
                 Object.keys(this.props.rates).map((symb, index)=>(
                    <li key={index}>{symb}</li> 
                 
                 
                    ))
               }


            </div>
          </div>
       )
    }
 }

 export default Symbol;