import React from 'react';
import Button from './Button';
import styles from './buttoncontainer.module.css';

export function ScoreButtonContainer(props) {
	return (
		<section className={styles.buttons}>
			<div className={styles.scoreButtons}>
				<Button
					name={`${props.homeTeam} Touchdown!`}
					click={() => {
						props.setHomeScore(props.homeScore + 7);
					}}
				/>
				<Button
					name={`${props.homeTeam} Field Goal`}
					click={() => {
						props.setHomeScore(props.homeScore + 3);
					}}
				/>

				<Button
					name={`${props.awayTeam} Touchdown!`}
					click={() => {
						props.setAwayScore(props.awayScore + 7);
					}}
				/>

				<Button
					name={`${props.awayTeam} Field Goal`}
					click={() => {
						props.setAwayScore(props.awayScore + 3);
					}}
				/>
			</div>
		</section>
	);
}

export function ControlButtonContainer(props) {
	return (
		<section className={styles.buttons}>
			<div className={styles.boxButtons}>
				<Button
					name={'Downs'}
					click={() => {
						let value;
						do {
							value = prompt('Enter Downs (1-4)');
							value = parseInt(value);
						} while (isNaN(value) || value < 1 || value > 4);
						props.setDowns(value);
					}}
				/>

				<Button
					name={'To Go'}
					click={() => {
						let value;
						do {
							value = prompt('Enter Yards to Go (1-10)');
							value = parseInt(value);
						} while (isNaN(value) || value < 1 || value > 10);
						props.setToGo(value);
					}}
				/>

				<Button
					name={'Ball On'}
					click={() => {
						let value;
						do {
							value = prompt('Enter Yardline (0-100)');
							value = parseInt(value);
						} while (isNaN(value) || value < 0 || value > 100);
						props.setBallOn(value);
					}}
				/>
			</div>

			<div className={styles.timerControlButtons}>
				<Button
					name={'Start Timer'}
					click={() => {
						props.start();
					}}
				/>

				<Button
					name={'Pause Timer'}
					click={() => {
						props.pause();
					}}
				/>

				<Button
					name={'Reset Timer'}
					click={() => {
						props.reset();
					}}
				/>
			</div>
		</section>
	);
}
