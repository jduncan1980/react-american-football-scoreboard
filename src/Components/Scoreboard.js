import React from 'react';
import ScorePanel from './ScorePanel';
import BottomRow from './BottomRow';
import Timer from './Timer';
import styles from './scoreboard.module.css';

export default function Scoreboard(props) {
	return (
		<section className={styles.scoreboard}>
			<div className={styles.topRow}>
				<ScorePanel
					score={props.homeScore}
					team={props.homeTeam}
					style={{ backgroundColor: '#656565' }}
				/>
				<Timer time={props.time} />

				<ScorePanel
					score={props.awayScore}
					team={props.awayTeam}
					style={{ backgroundColor: '#af750a' }}
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
