import "../../Styles/components/Theme.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as bulbReg } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as bulbSol } from "@fortawesome/free-solid-svg-icons";

function Theme() {
	const [theme, setTheme] = useState(false);

	const setDark = () => {
		document.querySelector("body").setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
		if (!theme) {
			setTheme(true);
		}
	};
	const setLight = () => {
		document.querySelector("body").setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
		if (theme) {
			setTheme(false);
		}
	};
	const curTheme = localStorage.getItem("theme");
	if (curTheme === "dark") setDark();
	function toggleTheme() {
		if (
			document.querySelector("body").getAttribute("data-theme") === "dark"
		) {
			setLight();
		} else {
			setDark();
		}
	}

	const [tooVis, setToolVis] = useState(false);
	const showTooltip = () => {
		setToolVis(true);
	};
	const hideTooltip = () => {
		setToolVis(false);
	}
	return (
		<>
			<span className={tooVis? "tooltip Toolvis" : "tooltip"}>
				Switch to {theme ? "Light Mode" : "Dark Mode"}
			</span>
			<div
				className="Theme"
				onMouseOver={showTooltip}
				onMouseOut={hideTooltip}
			>
				<FontAwesomeIcon
					icon={theme ? bulbSol : bulbReg}
					className={theme ? "lightOn" : "lightOff"}
					onClick={toggleTheme}
				/>
			</div>
		</>
	);
}

export default Theme;
