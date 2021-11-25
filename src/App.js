import './App.css';
import React, { Component } from 'react';
import Calculator from './components/Calculator';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
