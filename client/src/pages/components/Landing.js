import "../../Styles/components/Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useState } from "react";
import GetStarted from "./GetStarted";

const benefits = [
	"Minimal transaction Fee",
	"Instantaneous transactions",
	"Transparency",
	"Full control over digital Assets",
];

function Landing() {
	const [index, incrementIndex] = useState(0);
	useEffect(() => {
		setInterval(() => {
			incrementIndex((index + 1) % benefits.length);
		}, 5000);
	});
	return (
		<>
			<div className="Landing">
				<div className="landing-txt">Welcome to</div>
				<div className="landing-title">BlockPe</div>
				<div className="landing-txt">
					one step Solution for all your Payment issues
				</div>
				<FontAwesomeIcon icon={faCubesStacked} className="cubes-img" />
				
				<div className="animated-txt">
					{benefits[index]}
				</div>
				<GetStarted/>
			</div>
			<div className="separator-bottom"></div>
		</>
	);
}

export default Landing;
