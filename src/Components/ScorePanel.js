import React from 'react';
import styles from './scorepanel.module.css';

export default function ScorePanel(props) {
	return (
		<div className={styles.panel} style={props.style}>
			<h2 className={styles.panelName}>{props.team}</h2>
			<div className={styles.panelScore}>{props.score}</div>
		</div>
	);
}
