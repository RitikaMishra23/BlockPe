import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";

function Base() {
	return (
		<div>
			<Navbar/>
			<Theme/>
			<Outlet/>
			<GetStarted/>
			<Footer/>
		</div>
	);
}

export default Base;
