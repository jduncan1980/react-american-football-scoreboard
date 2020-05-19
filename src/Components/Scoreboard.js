import React, { useState } from 'react';
import ScorePanel from './ScorePanel';
import BottomRow from './BottomRow';
import Timer from './Timer';

export default function Scoreboard(props) {
	return (
		<section className='scoreboard'>
			<div className='topRow'>
				<ScorePanel
					score={props.lionsScore}
					team={'Lions'}
					homeOrAway={['home', 'home__name', 'home__score']}
				/>
				<Timer time={props.time} />

				<ScorePanel
					score={props.tigersScore}
					team={'Tigers'}
					homeOrAway={['away', 'away__name', 'away__score']}
				/>
			</div>
			<BottomRow
				downs={props.downs}
				toGo={props.toGo}
				ballOn={props.ballOn}
				quarter={props.quarter}
			/>
		</section>
	);
}
