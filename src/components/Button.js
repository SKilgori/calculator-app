import React from 'react';
import styles from '../styles/Button.module.css';

const Button = React.memo(({ value, onClick }) => {
	  return (
		      <button className={styles.button} onClick={() => onClick(value)}>
		        {value}
		      </button>
		    );
});

export default Button;

