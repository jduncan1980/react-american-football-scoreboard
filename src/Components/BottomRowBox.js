import React from 'react';

export default function BottomRowBox(props) {
	return (
		<div className={props.classNames[0]}>
			<h3 className={props.classNames[1]}>{props.title}</h3>
			<div className={props.classNames[2]}>{props.value}</div>
		</div>
	);
}
