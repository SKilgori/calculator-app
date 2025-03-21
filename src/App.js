import React from 'react';
import { CalculatorProvider } from './context/CalculatorContext';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <CalculatorProvider>
      <div className="App">
        <h1>React Calculator</h1>
        <Calculator />
      </div>
    </CalculatorProvider>
  );
}

export default App;
