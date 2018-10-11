import React, { Component } from 'react';

import './App.css';
import Car from './Car/Car'

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2015},
      {name: 'Audi', year: 2017},
      {name: 'Mersedes', year: 2017},
    ],
    pageTitle: 'React components'
  }

  render() {
    const divStyle = {
          'color': 'blue',
          'fontSize': '20px'
        }
    const $h1 = {
      'color': '#00CC99',
      'fontSize': '45px'
    }
    
    const someCars = this.state.cars
    return (
      
      <div className="App" style = {divStyle}>        
          <h1 style = {$h1}>{this.state.pageTitle}</h1>

          <Car name={someCars[0].name} year={ someCars[0].year } />
          <Car name={someCars[1].name} year={ someCars[1].year } />          
          <Car name={someCars[2].name} year={ someCars[2].year } />  
      </div>
    );
  }
}

export default App;
