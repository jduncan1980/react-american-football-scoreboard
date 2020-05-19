import React from 'react';
import Button from './Button';
import styles from './buttoncontainer.module.css';

export default function ButtonContainer(props) {
	return (
		<section className={styles.buttons}>
			<div className={styles.homeButtons}>
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
			</div>

			<div className={styles.awayButtons}>
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

			<div className={styles.boxButtons}>
				<Button
					name={'Next Down'}
					click={() => {
						props.setDowns(props.downs < 4 ? props.downs + 1 : 0);
					}}
				/>

				<Button
					name={'Yards To Go'}
					click={() => {
						props.setToGo(props.toGo > 1 ? props.toGo - 1 : 10);
					}}
				/>

				<Button
					name={'Ball On'}
					click={() => {
						props.setBallOn(props.ballOn < 100 ? props.ballOn + 1 : 0);
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
