import React, { useState } from 'react';
import Scoreboard from './Components/Scoreboard';
import ButtonContainer from './Components/ButtonContainer';
import './App.css';

function App() {
	const [lionsScore, setLionsScore] = useState(0);
	const [tigersScore, setTigersScore] = useState(0);
	const [downs, setDowns] = useState(0);
	const [toGo, setToGo] = useState(10);
	const [ballOn, setBallOn] = useState(0);
	const [quarter, setQuarter] = useState(1);
	const [time, setTime] = useState(3600000);

	return (
		<div className='container'>
			<Scoreboard
				lionsScore={lionsScore}
				tigersScore={tigersScore}
				downs={downs}
				toGo={toGo}
				ballOn={ballOn}
				quarter={quarter}
				time={time}
				setTime={setTime}
			/>
			<ButtonContainer
				lionsScore={lionsScore}
				tigersScore={tigersScore}
				setLionsScore={setLionsScore}
				setTigersScore={setTigersScore}
				setDowns={setDowns}
				setToGo={setToGo}
				setBallOn={setBallOn}
				setQuarter={setQuarter}
				downs={downs}
				toGo={toGo}
				ballOn={ballOn}
				quarter={quarter}
			/>
		</div>
	);
}

export default App;
