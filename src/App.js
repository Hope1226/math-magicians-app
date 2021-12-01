import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';
import Home from './components/Home';
import Quote from './components/Quote';
import Nav from './components/Nav';

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
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator output={output} handleEvent={handleEvent} />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
