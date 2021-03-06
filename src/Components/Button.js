import React from 'react';
import styles from './button.module.css';

export default function Button(props) {
	return (
		<button className={styles.homeButtons} onClick={props.click}>
			{props.name}
		</button>
	);
}
