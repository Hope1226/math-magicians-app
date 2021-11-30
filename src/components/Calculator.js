import React from 'react';
import PropTypes from 'prop-types';

function Calculator(props) {
  const { handleEvent, output } = props;
  return (
    <div className="calculatorContainer">
      <h1>Let&apos;s do some math</h1>
      <div className="calculator">
        <div className="display">{output}</div>
        <button type="button" className="buttons functions" onClick={handleEvent}>AC</button>
        <button type="button" className="buttons functions" onClick={handleEvent}>+/-</button>
        <button type="button" className="buttons functions" onClick={handleEvent}>%</button>
        <button type="button" className="buttons operetors" onClick={handleEvent}>÷</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>7</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>8</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>9</button>
        <button type="button" className="buttons operetors" onClick={handleEvent}>x</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>4</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>5</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>6</button>
        <button type="button" className="buttons operetors" onClick={handleEvent}>-</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>1</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>2</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>3</button>
        <button type="button" className="buttons operetors" onClick={handleEvent}>+</button>
        <button type="button" className="buttons operands two-span" onClick={handleEvent}>0</button>
        <button type="button" className="buttons operands" onClick={handleEvent}>.</button>
        <button type="button" className="buttons operetors" onClick={handleEvent}>=</button>
      </div>
    </div>
  );
}

Calculator.propTypes = {
  output: PropTypes.instanceOf(Object).isRequired,
  handleEvent: PropTypes.func.isRequired,
};

export default Calculator;
