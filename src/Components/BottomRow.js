import React from 'react';
import BottomRowBox from './BottomRowBox';
import '../App.css';

const BottomRow = (props) => {
	return (
		<div className='bottomRow'>
			<BottomRowBox
				classNames={['down', 'down__title', 'down__value']}
				title={'Down'}
				value={props.downs}
			/>

			<BottomRowBox
				classNames={['toGo', 'toGo__title', 'toGo__value']}
				title={'To Go'}
				value={props.toGo}
			/>

			<BottomRowBox
				classNames={['ballOn', 'ballOn__title', 'ballOn__value']}
				title={'Ball On'}
				value={props.ballOn}
			/>

			<BottomRowBox
				classNames={['quarter', 'quarter__title', 'quarter__value']}
				title={'Quarter'}
				value={props.quarter}
			/>
		</div>
	);
};

export default BottomRow;
