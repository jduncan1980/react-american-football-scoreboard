import React, { useState, useEffect } from 'react';
import { useTimer } from 'timer-hook';
import Scoreboard from './Components/Scoreboard';
import {
	ScoreButtonContainer,
	ControlButtonContainer,
} from './Components/ButtonContainer';
import styles from './app.module.css';

export default function App() {
	const [home, setHome] = useState('Home');
	const [away, setAway] = useState('Away');

	useEffect(() => {
		const homeName = prompt('Enter Home Team Name!');
		if (homeName !== '') {
			setHome(homeName);
		}
		const awayName = prompt('Enter Home Team Name!');
		if (awayName !== '') {
			setAway(awayName);
		}
	}, []);

	const [homeScore, setHomeScore] = useState(0);
	const [awayScore, setAwayScore] = useState(0);
	const [downs, setDowns] = useState(1);
	const [toGo, setToGo] = useState(10);
	const [ballOn, setBallOn] = useState(50);
	const [quarter, setQuarter] = useState(1);

	const { time, start, pause, reset } = useTimer({
		interval: 1000,
		initialTime: 900,
		step: 1,
		endTime: 0,
		type: 'DECREMENT',
		onEnd: () => {
			console.log('Done');
			reset();
			setQuarter(quarter < 4 ? quarter + 1 : 0);
		},
	});

	return (
		<div className={styles.container}>
			<ControlButtonContainer
				setDowns={setDowns}
				setToGo={setToGo}
				setBallOn={setBallOn}
				setQuarter={setQuarter}
				downs={downs}
				toGo={toGo}
				ballOn={ballOn}
				quarter={quarter}
				start={start}
				pause={pause}
				reset={reset}
			/>
			<Scoreboard
				homeScore={homeScore}
				awayScore={awayScore}
				downs={downs}
				toGo={toGo}
				ballOn={ballOn}
				quarter={quarter}
				time={time}
				homeTeam={home}
				awayTeam={away}
			/>

			<ScoreButtonContainer
				homeScore={homeScore}
				awayScore={awayScore}
				setHomeScore={setHomeScore}
				setAwayScore={setAwayScore}
				homeTeam={home}
				awayTeam={away}
			/>
		</div>
	);
}
