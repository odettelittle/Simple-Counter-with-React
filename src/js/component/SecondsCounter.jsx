import React from "react";
import { ClockIcon } from "./clock.jsx";

export function SecondsCounter(props) {
	const d1 = Math.floor((props.seconds / 100000) % 10);
	const d2 = Math.floor((props.seconds / 10000) % 10);
	const d3 = Math.floor((props.seconds / 1000) % 10);
	const d4 = Math.floor((props.seconds / 100) % 10);
	const d5 = Math.floor((props.seconds / 10) % 10);
	const d6 = Math.floor((props.seconds / 1) % 10);

	return (
		<div className="container d-flex justify-content-center">
			<div>🕤</div>
			<div>{d1}</div>
			<div>{d2}</div>
			<div>{d3}</div>
			<div>{d4}</div>
			<div>{d5}</div>
			<div>{d6}</div>
		</div>
	);
}
