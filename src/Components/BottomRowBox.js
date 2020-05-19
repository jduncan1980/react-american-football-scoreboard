import React from 'react';
import styles from './bottomrowbox.module.css';

export default function BottomRowBox(props) {
	return (
		<div className={styles.box}>
			<h3 className={styles.title}>{props.title}</h3>
			<div className={styles.value}>{props.value}</div>
		</div>
	);
}
