import React from 'react';
import styles from './timer.module.css';

export default function Timer(props) {
	let minutes = Math.floor(props.time / 60);
	let seconds = props.time % 60;

	return (
		<React.Fragment>
			<div className={styles.timer}>
				{(minutes < 10 ? `0${minutes}` : minutes) +
					':' +
					(seconds < 10 ? `0${seconds}` : seconds)}{' '}
			</div>
		</React.Fragment>
	);
}
