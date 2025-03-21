import React, { createContext, useState, useEffect, useCallback } from 'react';
import { evaluate } from 'mathjs';

export const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '←') {
      setDisplay(display.slice(0, -1));
    } else if (value === '=') {
      try {
        setDisplay(evaluate(display || '0').toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      if (value === '.' && display.includes('.') && !/[+\-*/]/.test(display.slice(-1))) return;
      setDisplay(display + value);
    }
  };

  // UseCallback ensures this function isn't re-created unnecessarily
  const handleKeyPress = useCallback(
    (event) => {
      const key = event.key;
      if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        handleButtonClick(key);
      } else if (key === 'Backspace') {
        handleButtonClick('←');
      } else if (key === 'Enter') {
        handleButtonClick('=');
      } else if (key === 'Escape') {
        handleButtonClick('C');
      }
    },
    [handleButtonClick] // Add handleButtonClick as a dependency
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]); // Add handleKeyPress to the dependency array

  return (
    <CalculatorContext.Provider value={{ display, handleButtonClick }}>
      {children}
    </CalculatorContext.Provider>
  );
}


