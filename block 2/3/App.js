import React, { Component } from 'react';

import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {
    // задать стили в JSX: divStyle
      const divStyle = {
          'color': 'blue',
          'fontSize': '80px'
        }
    return (
      
      <div className="App">        
          <h1 style = {divStyle}>Hello world!!!</h1>

        <Car />
      </div>
    );
  }
}

export default App;
