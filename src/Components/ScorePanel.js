import React from 'react';

export default function ScorePanel(props) {
	return (
		<div className={props.homeOrAway[0]}>
			<h2 className={props.homeOrAway[1]}>{props.team}</h2>
			<div className={props.homeOrAway[2]}>{props.score}</div>
		</div>
	);
}
