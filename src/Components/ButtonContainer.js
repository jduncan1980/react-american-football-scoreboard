import React from 'react';
import Button from './Button';
export default function ButtonContainer(props) {
	return (
		<section className='buttons'>
			<div className='homeButtons'>
				<Button
					name={`${props.homeTeam} Touchdown!`}
					click={() => {
						props.setHomeScore(props.homeScore + 7);
					}}
					buttonClass={'homeButtons__touchdown'}
				/>
				<Button
					name={`${props.homeTeam} Field Goal`}
					buttonClass={'homeButtons__fieldGoal'}
					click={() => {
						props.setHomeScore(props.homeScore + 3);
					}}
				/>
			</div>
			<div className='awayButtons'>
				<Button
					name={`${props.awayTeam} Touchdown!`}
					buttonClass={'awayButtons__touchdown'}
					click={() => {
						props.setAwayScore(props.awayScore + 7);
					}}
				/>

				<Button
					name={`${props.awayTeam} Field Goal`}
					buttonClass={'awayButtons__fieldGoal'}
					click={() => {
						props.setAwayScore(props.awayScore + 3);
					}}
				/>
			</div>
			<Button
				name={'Next Down'}
				buttonClass={'awayButtons__fieldGoal'}
				click={() => {
					props.setDowns(props.downs < 4 ? props.downs + 1 : 0);
				}}
			/>

			<Button
				name={'Yards To Go'}
				buttonClass={'awayButtons__fieldGoal'}
				click={() => {
					props.setToGo(props.toGo > 1 ? props.toGo - 1 : 10);
				}}
			/>

			<Button
				name={'Ball On'}
				buttonClass={'awayButtons__fieldGoal'}
				click={() => {
					props.setBallOn(props.ballOn < 100 ? props.ballOn + 1 : 0);
				}}
			/>

			<Button
				name={'Start Timer'}
				buttonClass={'awayButtons__fieldGoal'}
				click={() => {
					props.start();
				}}
			/>

			<Button
				name={'Pause Timer'}
				buttonClass={'awayButtons__fieldGoal'}
				click={() => {
					props.pause();
				}}
			/>

			<Button
				name={'Reset Timer'}
				buttonClass={'awayButtons__fieldGoal'}
				click={() => {
					props.reset();
				}}
			/>
		</section>
	);
}
