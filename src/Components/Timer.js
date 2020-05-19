import React, { useEffect, useState, useRef } from 'react';
import '../App.css';

export default function Timer(props) {
	const [time, setTime] = useState(props.time - 1000);
	const [minutes, setMinutes] = useState(60);
	const [seconds, setSeconds] = useState(0);

	// useInterval custom hook taken from overreacted.io blog, because I just couldn't get setInterval to work right inside a react component
	function useInterval(callback, delay) {
		const savedCallback = useRef();

		// Remember the latest callback.
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		// Set up the interval.
		useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		}, [delay]);
	}

	let interval = useInterval(() => {
		setTime((time) => time - 1000);
		setSeconds(Math.floor((time / 1000) % 60));
		setMinutes(Math.floor((time / 1000 / 60) % 60));

		if (time === 0) {
			clearInterval(interval);
		}
	}, 1000);

	return (
		<React.Fragment>
			<div
				onClick={() => {
					clearInterval(interval);
				}}
				className='timer'
			>
				{(minutes < 10 ? `0${minutes}` : minutes) +
					':' +
					(seconds < 10 ? `0${seconds}` : seconds)}{' '}
			</div>
		</React.Fragment>
	);
}
