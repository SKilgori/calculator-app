import React, { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import Button from './Button';
import Display from './Display';
import styles from '../styles/Calculator.module.css';

function Calculator() {
	  const { display, handleButtonClick } = useContext(CalculatorContext);

	  const buttons = [
		      '7', '8', '9', '+',
		      '4', '5', '6', '-',
		      '1', '2', '3', '*',
		      '.', '0', '←', '/',
		      'C', '='
		    ];

	  return (
		      <div className={styles.calculator}>
		        <Display value={display} />
		        <div className={styles.buttons}>
		          {buttons.map((value) => (
				            <Button key={value} value={value} onClick={handleButtonClick} />
				          ))}
		        </div>
		      </div>
		    );
}

export default Calculator;

