import React, { useState } from 'react';
import Scoreboard from './Components/Scoreboard';
import ButtonContainer from './Components/ButtonContainer';
import './App.css';

function App() {
	const [lionsScore, setLionsScore] = useState(0);
	const [tigersScore, setTigersScore] = useState(0);

	return (
		<div className='container'>
			<Scoreboard lionsScore={lionsScore} tigersScore={tigersScore} />
			<ButtonContainer
				lionsScore={lionsScore}
				tigersScore={tigersScore}
				setLionsScore={setLionsScore}
				setTigersScore={setTigersScore}
			/>
			>
		</div>
	);
}

export default App;
