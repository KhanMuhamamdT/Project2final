import React, { Component } from 'react';

let dropdown = {
   position: 'relative',
   display: 'inline-block',
}

class Symbol extends React.Component {
   constructor(props) {
      super(props) 
   }
   getApi = () =>{
// get new fetch for SELECTED option
   }
   render() {
        console.log ('Symbol ....',this.props)
        console.log ('end of symbol  ....')
       return (
          <div>
             <h1>Symbols...</h1>
            <div style={dropdown} className="dropdown">
               <form>
               <select>
               {
                 Object.keys(this.props.rates).map((symb, index)=>(
                     <option key={index}>{symb}</option>
                  ))

               }
                  </select>
                  <input type="Submit" ></input> 
               </form>
            </div>
          </div>
       )
    }
 }

 export default Symbol;