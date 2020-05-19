import React, { useState, useEffect } from 'react';
import { useTimer } from 'timer-hook';
import Scoreboard from './Components/Scoreboard';
import ButtonContainer from './Components/ButtonContainer';
import './App.css';

function App() {
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
	const [downs, setDowns] = useState(0);
	const [toGo, setToGo] = useState(10);
	const [ballOn, setBallOn] = useState(0);
	const [quarter, setQuarter] = useState(1);

	const { time, start, pause, reset, isRunning } = useTimer({
		interval: 1000,
		initialTime: 900,
		step: 1,
		endTime: 0,
		type: 'DECREMENT',
		onEnd: () => {
			console.log('Done');
			reset();
			setQuarter(quarter < 4 ? quarter + 1 : (quarter = 0));
		},
	});

	return (
		<div className='container'>
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

			<ButtonContainer
				homeScore={homeScore}
				awayScore={awayScore}
				setHomeScore={setHomeScore}
				setAwayScore={setAwayScore}
				homeTeam={home}
				awayTeam={away}
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
		</div>
	);
}

export default App;
