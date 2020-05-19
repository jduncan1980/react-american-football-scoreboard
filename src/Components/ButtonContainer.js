import React from 'react';
import Button from './Button';
export default function ButtonContainer(props) {
	return (
		<section className='buttons'>
			<div className='homeButtons'>
				<Button
					name={'Home Touchdown'}
					click={() => {
						props.setLionsScore(props.lionsScore + 7);
					}}
					buttonClass={'homeButtons__touchdown'}
				/>
				<Button
					name={'Home Field Goal'}
					buttonClass={'homeButtons__fieldGoal'}
					click={() => {
						props.setLionsScore(props.lionsScore + 3);
					}}
				/>
			</div>
			<div className='awayButtons'>
				<Button
					name={'Away Touchdown'}
					buttonClass={'awayButtons__touchdown'}
					click={() => {
						props.setTigersScore(props.tigersScore + 7);
					}}
				/>

				<Button
					name={'Away Field Goal'}
					buttonClass={'awayButtons__fieldGoal'}
					click={() => {
						props.setTigersScore(props.tigersScore + 3);
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
				name={'Next Quarter'}
				buttonClass={'awayButtons__fieldGoal'}
				click={() => {
					props.setQuarter(props.quarter < 4 ? props.quarter + 1 : 1);
				}}
			/>
		</section>
	);
}
