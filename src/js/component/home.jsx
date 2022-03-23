import React from "react";
import { SecondsCounter } from "./SecondsCounter.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<SecondsCounter seconds={123} />
		</div>
	);
};

export default Home;
