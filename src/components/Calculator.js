import React, { Component } from 'react';

/* eslint-disable react/prefer-stateless-function */
class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="display">0</div>
        <div className="buttons functions">AC</div>
        <div className="buttons functions">+/-</div>
        <div className="buttons functions">%</div>
        <div className="buttons operetors">÷</div>
        <div className="buttons operands">7</div>
        <div className="buttons operands">8</div>
        <div className="buttons operands">9</div>
        <div className="buttons operetors">x</div>
        <div className="buttons operands">4</div>
        <div className="buttons operands">5</div>
        <div className="buttons operands">6</div>
        <div className="buttons operetors">-</div>
        <div className="buttons operands">1</div>
        <div className="buttons operands">2</div>
        <div className="buttons operands">3</div>
        <div className="buttons operetors">+</div>
        <div className="buttons operands two-span">0</div>
        <div className="buttons operands">.</div>
        <div className="buttons operetors">=</div>
      </div>
    );
  }
}

export default Calculator;
