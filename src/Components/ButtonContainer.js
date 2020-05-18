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
		</section>
	);
}
