import './App.css';
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

function App() {
  const [state, setState] = useState({
    next: 0,
    total: 0,
  });

  const handleEvent = (e) => { setState((prevState) => calculate(prevState, e.target.innerText)); };

  let output = 0;
  if (state.next) {
    output = state.next;
  } else if (state.total) {
    output = state.total;
  }

  return (
    <div className="App">
      <Calculator output={output} handleEvent={handleEvent} />
    </div>
  );
}

export default App;
