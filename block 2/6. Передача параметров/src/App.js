import React, { Component } from 'react';

import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {
    // задать стили в JSX: divStyle
      const divStyle = {
          'color': 'blue',
          'fontSize': '60px'
        }
    return (
      
      <div className="App" style = {divStyle}>        
          <h1>Hello world!!!</h1>

          <Car name={'Mazda'} year={ 2015 }/>
          <Car name='Audi' year={ 2017 }/>
      </div>
    );
  }
}

export default App;
