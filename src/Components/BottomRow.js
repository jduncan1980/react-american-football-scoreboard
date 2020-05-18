import React from 'react';
import BottomRowBox from './BottomRowBox';
import '../App.css';

const BottomRow = () => {
	return (
		<div className='bottomRow'>
			<BottomRowBox
				classNames={['down', 'down__title', 'down__value']}
				title={'Down'}
				value={3}
			/>

			<BottomRowBox
				classNames={['toGo', 'toGo__title', 'toGo__value']}
				title={'To Go'}
				value={7}
			/>

			<BottomRowBox
				classNames={['ballOn', 'ballOn__title', 'ballOn__value']}
				title={'Ball On'}
				value={21}
			/>

			<BottomRowBox
				classNames={['quarter', 'quarter__title', 'quarter__value']}
				title={'Quarter'}
				value={4}
			/>
		</div>
	);
};

export default BottomRow;
