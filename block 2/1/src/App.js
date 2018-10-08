import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    // задать стили в JSX: divStyle
      const divStyle = {
          'color': 'blue',
          'fontSize': '80px'
        }
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 style = {divStyle}>Hello world!!!</h1>
        </header>
      </div>
    );
  }
}

export default App;
