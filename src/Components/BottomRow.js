import React from 'react';
import BottomRowBox from './BottomRowBox';
import styles from './bottomrow.module.css';
// import '../App.css';

const BottomRow = (props) => {
	return (
		<div className={styles.bottomRow}>
			<BottomRowBox title={'Down'} value={props.downs} />
			<BottomRowBox title={'To Go'} value={props.toGo} />
			<BottomRowBox title={'Ball On'} value={props.ballOn} />
			<BottomRowBox title={'Quarter'} value={props.quarter} />
		</div>
	);
};

export default BottomRow;
