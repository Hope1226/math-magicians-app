import React, { Component } from 'react';
import calculate from '../logic/calculate';

/* eslint-disable react/prefer-stateless-function */
class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      next: 0,
      total: 0,
    };

    this.handleEvent = (e) => {
      this.setState((prevState) => calculate(prevState, e.target.innerText));
    };
  }

  render() {
    const { next, total } = this.state;
    let output = 0;

    if (next) {
      output = next;
    } else if (total) {
      output = total;
    }

    return (
      <div className="calculator">
        <div className="display">{output}</div>
        <button type="button" className="buttons functions" onClick={this.handleEvent}>AC</button>
        <button type="button" className="buttons functions" onClick={this.handleEvent}>+/-</button>
        <button type="button" className="buttons functions" onClick={this.handleEvent}>%</button>
        <button type="button" className="buttons operetors" onClick={this.handleEvent}>÷</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>7</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>8</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>9</button>
        <button type="button" className="buttons operetors" onClick={this.handleEvent}>x</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>4</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>5</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>6</button>
        <button type="button" className="buttons operetors" onClick={this.handleEvent}>-</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>1</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>2</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>3</button>
        <button type="button" className="buttons operetors" onClick={this.handleEvent}>+</button>
        <button type="button" className="buttons operands two-span" onClick={this.handleEvent}>0</button>
        <button type="button" className="buttons operands" onClick={this.handleEvent}>.</button>
        <button type="button" className="buttons operetors" onClick={this.handleEvent}>=</button>
      </div>
    );
  }
}

export default Calculator;
